export enum ProductStatus {
	Active = "active",
	Archived = "archived",
	Draft = "draft"
}

export enum PublishedScope {
	Web = "web",
	Global = "global"
}

export enum InventoryManagement {
	Shopify = "shopify",
	Null = "null"
}

export enum InventoryPolicy {
	Deny = "deny",
	Continue = "continue"
}

export interface IShopifyPresentmentPrices {
	currency_code: string;
	amount: string;
}

export interface IShopifyPresentmentPricesCollection {
	presentment_prices: IShopifyPresentmentPrices[];
}

/**
 * The Product resource
 * https://shopify.dev/docs/api/admin-rest/2024-01/resources/product#resource-object
 */
export interface IShopifyProducts {
	/**
	 * A description of the product. Supports HTML formatting.
	 */
	body_html: string;
	/**
	 * The date and time (ISO 8601 format) when the product was created.
	 */
	created_at: string;
	/**
	 * A unique human-friendly string for the product. Automatically generated from the product's title. Used by the Liquid templating language to refer to objects.
	 */
	handle: string;
	/**
	 * An unsigned 64-bit integer that's used as a unique identifier for the product. Each id is unique across the Shopify system. No two products will have the same id, even if they're from different shops.
	 */
	id: number;
	/**
	 * A list of product image objects, each one representing an image associated with the product.
	 */
	images: IShopifyProductImage[];
	/**
	 * The custom product properties. For example, Size, Color, and Material. Each product can have up to 3 options and each option value can be up to 255 characters. Product variants are made of up combinations of option values. Options cannot be created without values. To create new options, a variant with an associated option value also needs to be created.
	 */
	options: [];
	/**
	 * A categorization for the product used for filtering and searching products.
	 */
	product_type: string;
	/**
	 * The date and time (ISO 8601 format) when the product was published. Can be set to null to unpublish the product from the Online Store channel.
	 */
	published_at: string;
	/**
	 * Whether the product is published to the Point of Sale channel. Valid values:
	 */
	published_scope: PublishedScope;
	/**
	 * The status of the product. Valid values:
	 */
	status: ProductStatus;
	/**
	 * A string of comma-separated tags that are used for filtering and search. A product can have up to 250 tags. Each tag can have up to 255 characters.
	 */
	tags: string;
	/**
	 * The suffix of the Liquid template used for the product page. If this property is specified, then the product page uses a template called "product.suffix.liquid", where "suffix" is the value of this property. If this property is "" or null, then the product page uses the default template "product.liquid". (default: null)
	 */
	template_suffix: string;
	/**
	 * The name of the product.
	 */
	title: string;
	/**
	 * The date and time (ISO 8601 format) when the product was last modified. A product's updated_at value can change for different reasons. For example, if an order is placed for a product that has inventory tracking set up, then the inventory adjustment is counted as an update.
	 */
	updated_at: string;
	/**
     * An array of product variants, each representing a different version of the product.

The position property is read-only. The position of variants is indicated by the order in which they are listed.
     */
	variants: IShopifyProductVariant[];
	/**
	 * The name of the product's vendor.
	 */
	vendor: string;
}

/**
 * The Product Image resource
 * https://shopify.dev/docs/api/admin-rest/2024-01/resources/product-image#resource-object
 */
export interface IShopifyProductImage {
	/**
	 * The date and time when the product image was created. The API returns this value in ISO 8601 format.
	 */
	created_at: string;
	/**
	 * A unique numeric identifier for the product image.
	 */
	id: number;
	/**
	 * The order of the product image in the list. The first product image is at position 1 and is the "main" image for the product.
	 */
	position: number;
	/**
	 * The id of the product associated with the image.
	 */
	product_id: number;
	/**
	 * An array of variant ids associated with the image.
	 */
	variant_ids: number[];
	/**
	 * Specifies the location of the product image. This parameter supports Liquid filters that you can use to retrieve modified copies of the image.
	 */
	src: string;
	/**
	 * Width dimension of the image which is determined on upload.
	 */
	width: number;
	/**
	 * Height dimension of the image which is determined on upload.
	 */
	height: number;
	/**
	 * The date and time when the product image was last modified. The API returns this value in ISO 8601 format.
	 */
	updated_at: string;
}

/**
 * The Product Variant resource
 * https://shopify.dev/docs/api/admin-rest/2024-01/resources/product-variant#resource-object
 */
export interface IShopifyProductVariant {
	/**
	 * The barcode, UPC, or ISBN number for the product.
	 */
	barcode: string;
	/**
	 * The original price of the item before an adjustment or a sale.
	 */
	compare_at_price: string;
	/**
	 * The date and time (ISO 8601 format) when the product variant was created.
	 */
	created_at: string;
	/**
	 * The handle of a fulfillment service that stocks a product variant.
	 */
	fulfillment_service: string;
	/**
	 * The weight of the product variant in grams.
	 */
	grams: number;
	/**
	 * The unique numeric identifier for the product variant.
	 */
	id: number;
	/**
	 * The unique numeric identifier for a product's image. The image must be associated to the same product as the variant.
	 */
	image_id: number;
	/**
	 * The unique identifier for the inventory item, which is used in the Inventory API to query for inventory information.
	 */
	inventory_item_id: number;
	/**
	 * The fulfillment service that tracks the number of items in stock for the product variant. Valid values:
	 */
	inventory_management: string;
	/**
	 * Whether customers are allowed to place an order for the product variant when it's out of stock. Valid values:
	 */
	inventory_policy: string;
	/**
	 * An aggregate of inventory across all locations. To adjust inventory at a specific location, use the InventoryLevel resource.
	 */
	inventory_quantity: number;
	/**
	 * This property is deprecated. Use the InventoryLevel resource instead.
	 */
	old_inventory_quantity: number;
	/**
	 * A list of the variant's presentment prices and compare-at prices in each of the shop's enabled presentment currencies. Each price object has the following properties:
	 */
	presentment_prices: IShopifyPresentmentPricesCollection;
	/**
	 * The order of the product variant in the list of product variants. The first position in the list is 1. The position of variants is indicated by the order in which they are listed.
	 */
	position: number;
	/**
	 * The price of the product variant.
	 */
	price: string;
	/**
	 * The unique numeric identifier for the product.
	 */
	product_id: number;
	/**
	 * This property is deprecated. Use the `requires_shipping` property on the InventoryItem resource instead.
	 */
	requires_shipping: boolean;
	/**
	 * A unique case-sensitive identifier for the product variant in the shop. Required in order to connect to a FulfillmentService.
	 */
	sku: string;
	/**
	 * Whether a tax is charged when the product variant is sold.
	 */
	taxable: boolean;
	/**
	 * This parameter applies only to the stores that have the Avalara AvaTax app installed. Specifies the Avalara tax code for the product variant.
	 */
	tax_code: string;
	/**
	 * The title of the product variant. The title field is a concatenation of the option1, option2, and option3 fields. You can only update title indirectly using the option fields.
	 */
	title: string;
	/**
	 * The date and time when the product variant was last modified. Gets returned in ISO 8601 format.
	 */
	updated_at: string;
	/**
	 * The weight of the product variant in the unit system specified with weight_unit.
	 */
	weight: number;
	/**
	 * The unit of measurement that applies to the product variant's weight. If you don't specify a value for weight_unit, then the shop's default unit of measurement is applied. Valid values: g, kg, oz, and lb.
	 */
	weight_unit: string;
}
