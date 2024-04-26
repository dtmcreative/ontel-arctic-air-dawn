import {
	IShopifyProductVariant,
	IShopifyProducts
} from "ts/interfaces/shopify-products";

// declare global {
// 	interface Window {
// 		Shopify: {
// 			routes: {
// 				root: string;
// 			};
// 		};
// 	}
// }

export default class ProductController {
	public route: string;

	private static products: WeakMap<ProductController, IShopifyProducts[]> =
		new WeakMap<ProductController, IShopifyProducts[]>();

	private set products(value: IShopifyProducts[]) {
		ProductController.products.set(this, value);
	}

	public get products(): Promise<IShopifyProducts[]> {
		return new Promise<IShopifyProducts[]>((resolve, reject) => {
			const value = ProductController.products.get(this);

			if (value) return resolve(value);

			this.getProducts()
				.then((products) => {
					this.products = products;

					resolve(products);
				})
				.catch((error) => console.debug(error));
		});
	}

	constructor() {
		// global Shopify route
		this.route = window.Shopify.routes.root;
	}

	// Makes an HTTP GET request to the `/products` endpoint to fetch the Shopify products JSON data.
	public async getProducts(): Promise<IShopifyProducts[]> {
		const result = await fetch(`${this.route}products.json`, {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			}
		});

		if (result.status === 200) {
			const products = await result.json();

			return products.products;
		}

		throw new Error(
			`Failed to get request, Shopify returned ${result.status} ${result.statusText}`
		);
	}

	public async getProductVariants(): Promise<IShopifyProductVariant[]> {
		const products = await this.products;

		return products.map((product) => product.variants).flat();
	}

	public async getProductVariantBySku(
		sku: string
	): Promise<IShopifyProductVariant> {
		const variants = await this.getProductVariants();

		const variant = variants.find((variant) => variant.sku === sku);
		if (variant) return variant;

		throw `Product variant could not be found`;
	}

	public async getProductVariantsBySkus(
		skus: string[]
	): Promise<IShopifyProductVariant[]> {
		const variants = await this.getProductVariants();

		const results = variants.filter((variant) =>
			skus.includes(variant.sku)
		);
		if (results.length > 0) return results;

		throw `Product variants could not be found`;
	}
}
