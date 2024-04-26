export interface IShopifyCartItems {
    items: IShopifyCartItem[];
}

export interface IShopifyCartItem {
    id: number;
    title: string;
    key: string;
    price: number;
    line_price: number;
    quantity: number;
    sku: null;
    grams: number;
    vendor: string;
    properties: null;
    variant_id: number;
    gift_card: boolean;
    url: string;
    featured_image: IShopifyFeaturedImage;
    image: string;
    handle: string;
    requires_shipping: boolean;
    product_title: string;
    product_description: string;
    product_type: string;
    variant_title: string;
    variant_options: string[];
    options_with_values: IShopifyOptionWithValue[];
}

export interface IShopifyFeaturedImage {
    aspect_ratio: number;
    alt: string;
    height: number;
    url: string;
    width: number;
}

export interface IShopifyOptionWithValue {
    name: string;
    value: string;
}

export interface IShopifyUpdateRequest {
    updates: IShopifyLineItem;
}

export interface IShopifyLineItem {
    id?: number | string;
    quantity?: number;
}

export interface IShopifySection {
    [key: string]: string;
}
