import {
	IShopifyCartItems,
	IShopifyUpdateRequest
} from "ts/interfaces/shopify-cart";
import CartController from "./cart-controller";
import {
	IShopifyProductVariant,
	IShopifyProducts
} from "ts/interfaces/shopify-products";
import ProductController from "./product-controller";

export default class OfferController extends CartController {
	public context: HTMLElement | Document;

	private cart: Promise<IShopifyCartItems>;

	private products: ProductController;

	public offerCheckbox: HTMLInputElement | null | undefined;

	public offerCombobox: HTMLSelectElement | null | undefined;

	public deluxeCheckbox: HTMLInputElement | null | undefined;

	constructor(context?: HTMLElement | Document) {
		super();

		this.context = context ?? document;

		this.offerCheckbox =
			context?.querySelector<HTMLInputElement>("#ActionCheckbox0");

		this.offerCombobox =
			context?.querySelector<HTMLSelectElement>("#ActionQuantity0");

		this.deluxeCheckbox =
			context?.querySelector<HTMLInputElement>("#DeluxeCheckbox");

		this.cart = this.getCart();

		this.products = new ProductController();
	}

	public async handleOffer() {
		const offerCheckbox = this.offerCheckbox;
		if (!offerCheckbox) return;

		const offerCombobox = this.offerCombobox;
		if (!offerCombobox) return;

		const singleOffer = await this.products.getProductVariantBySku(
			"AABPC"
		);
		const doubleOffer = await this.products.getProductVariantBySku(
			"AABPCTV"
		);
		const fee = await this.products.getProductVariantBySku("AABPCFEE");

		const changeToSingleOffer = (quantity: number) => {
			this.updateItems({
				updates: {
					[singleOffer.id]: quantity,
					[doubleOffer.id]: 0,
					[fee.id]: 0
				}
			});
		};

		const changeToDoubleOffer = (quantity: number) => {
			this.updateItems({
				updates: {
					[singleOffer.id]: 0,
					[doubleOffer.id]: quantity,
					[fee.id]: quantity
				}
			});
		};

		const handleOfferQuantity = () => {
			const quantity = parseInt(offerCombobox.value);

			offerCheckbox.checked
				? changeToDoubleOffer(quantity)
				: changeToSingleOffer(quantity);
		};

		offerCombobox.addEventListener("change", (event) =>
			handleOfferQuantity()
		);
		offerCheckbox.addEventListener("change", (event) =>
			handleOfferQuantity()
		);

		const cart = await this.cart;

		const singleItemInCart = cart.items.find(
			(item) => item.variant_id === singleOffer.id
		);
		if (singleItemInCart) {
			offerCheckbox.checked = false;
			offerCheckbox.setAttribute("aria-checked", "false");
			offerCombobox.value = singleItemInCart.quantity.toString();

			return;
		}

		const doubleItemInCart = cart.items.find(
			(item) => item.variant_id === doubleOffer.id
		);
		if (doubleItemInCart) {
			offerCheckbox.checked = true;
			offerCombobox.value = doubleItemInCart.quantity.toString();

			return;
		}

		if (offerCheckbox.checked) {
			handleOfferQuantity();
		}
	}

	public async handleDeluxeOffer() {
		const deluxeCheckbox = this.deluxeCheckbox;
		if (!deluxeCheckbox) return;

		const deluxeOffer = await this.products.getProductVariantBySku(
			"VOOMMINI"
		);

		deluxeCheckbox.addEventListener("change", async (event) => {
			const id = deluxeOffer.id.toString();
			const quantity = deluxeCheckbox.checked ? 1 : 0;

			this.updateItems({ updates: { [id]: quantity } });
		});

		const cart = await this.cart;
		const itemInCart = cart.items.find(
			(item) => item.variant_id === deluxeOffer.id
		);
		if (!itemInCart) return;

		deluxeCheckbox.checked = true;
	}
}
