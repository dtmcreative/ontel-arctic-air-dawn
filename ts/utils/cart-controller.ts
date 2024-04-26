import {
    IShopifyCartItems,
    IShopifyLineItem,
    IShopifySection,
    IShopifyUpdateRequest
} from "ts/interfaces/shopify-cart";

declare global {
    interface Window {
        Shopify: {
            routes: {
                root: string;
            };
        };
    }
}

export default class CartController {
    public route: string;

    public sections: string[] = [];

    public parser: DOMParser;

    constructor() {
        // global Shopify route
        this.route = window.Shopify.routes.root;

        // queries HTML elements that contain `data-id` value that maps to the section id from Shopify
        this.sections = Array.from(
            document.querySelectorAll<HTMLElement>("[data-id]")
        ).map((section) => section.dataset.id as string);

        // instance of DOM Parser API
        this.parser = new DOMParser();
    }

    // takes either a string or a string array of section id values that will be added to the sections array.
    public addSections(sections: string | string[]) {
        const ids = Array.isArray(sections)
            ? sections
            : sections.replace(/\s/g, "").split(",");

        this.sections = this.sections.concat(ids);
    }

    // takes the sections object returned from the Section Rendering API result within the HTTP response object and attempts to render the DOM.
    public renderSections(sections: IShopifySection) {
        if (!sections) return;

        for (const [id, html] of Object.entries(sections)) {
            this.renderSection(id, html);
        }
    }

    // takes a Shopify section id along with the html text string and attempts to render the DOM with that string.
    public renderSection(id: string, html: string) {
        const section = this.parser.parseFromString(html, "text/html");
        const sectionHTML =
            section.querySelector(".js-contents")?.innerHTML ??
            section.textContent;
        if (!sectionHTML) return;

        const element = document.querySelector(`#shopify-section-${id}`);
        if (!element) return;

        const container = element.querySelector(".js-contents") ?? element;
        if (!container) return;

        container.innerHTML = sectionHTML;
    }

    // takes a Shopify product's variant id along with a quantity and makes a HTTP POST request to the `cart/add` endpoint.
    public async addItem(
        variantId: string,
        quantity: number
    ): Promise<IShopifyCartItems> {
        const request = await fetch(`${this.route}cart/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                id: variantId,
                quantity: quantity,
                sections: this.sections
            })
        });

        const response = await request.json();

        this.renderSections(response.sections);

        return response;
    }

    // takes a Shopify product's variant id along with a 0 quantity and makes an HTTP POST request to the `cart/change` endpoint.
    public async removeItem(variantId: string) {
        return await this.updateItem({ id: variantId, quantity: 0 });
    }

    // takes a Shopify product's variant id along with a quantity and makes an HTTP POST request to the `cart/change` endpoint.
    public async updateItem(item: IShopifyLineItem) {
        const request = await fetch(`${this.route}cart/change`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ ...item, sections: this.sections })
        });

        const response = await request.json();

        this.renderSections(response.sections);

        return response;
    }

    // takes an object containing key-value pairs where the key is a Shopify product variant id and the value is the quantity and makes an HTTP POST request to the `cart/update` endpoint.
    public async updateItems(
        items: IShopifyUpdateRequest
    ): Promise<IShopifyCartItems> {
        const request = await fetch(`${this.route}cart/update`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ ...items, sections: this.sections })
        });

        const response = await request.json();

        this.renderSections(response.sections);

        return response;
    }

    // Makes an HTTP GET request to the `/cart` endpoint to fetch the updated Shopify customer cart.
    public async getCart(): Promise<IShopifyCartItems> {
        const result = await fetch(`${this.route}cart`, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        });

        if (result.status === 200) return result.json();

        throw new Error(
            `Failed to get request, Shopify returned ${result.status} ${result.statusText}`
        );
    }
}
