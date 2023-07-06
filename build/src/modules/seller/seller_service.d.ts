declare const get_seller_data: (_id: any) => Promise<any>;
declare const generate_seller_token: (_id: string, req_data: any, device_type: any) => Promise<unknown>;
declare const make_seller_response: (data: any, language: string) => Promise<any>;
declare const save_products: (data: any, seller_id: any) => Promise<unknown>;
declare const make_brand_response: (query: any, options: any) => Promise<unknown>;
declare const make_subcategory_response: (query: any, options: any) => Promise<unknown>;
declare const save_product_details: (data: any, product_id: any) => Promise<any>;
declare const save_product_services: (data: any, product_id: any) => Promise<any>;
declare const save_product_highlights: (data: any, product_id: any) => Promise<any>;
declare const save_deliverable_locations: (data: any, product_id: any) => Promise<any>;
declare const make_products_response: (query: any, options: any) => Promise<any>;
declare const get_product_detail: (query: any, options: any) => Promise<unknown>;
declare const get_services: (_id: any, options: any) => Promise<unknown>;
declare const get_highlights: (_id: any, options: any) => Promise<unknown>;
declare const product_details: (_id: any, options: any) => Promise<unknown>;
declare const get_product_by_id: (_id: any, options: any) => Promise<unknown>;
declare const fetch_total_count: (collection: any, query: any) => Promise<unknown>;
declare const block_delete_data: (data: any, collection: any) => Promise<unknown>;
declare const edit_products_data: (data: any, _id: any, deliverable_cities: any) => Promise<any>;
declare const verify_user_info: (query: any) => Promise<unknown>;
declare const save_product_variants: (data: any) => Promise<any>;
declare const edit_variants: (data: any, query: any) => Promise<any>;
declare const edit_services: (data: any, query: any) => Promise<any>;
declare const edit_highlights: (data: any, query: any) => Promise<any>;
declare const edit_productDetails: (data: any, query: any) => Promise<any>;
declare const get_variants_detail: (query: any, options: any) => Promise<unknown>;
declare const fetch_order_detail: (query: any, options: any) => Promise<any>;
declare const make_orders_response: (query: any, options: any) => Promise<any>;
declare const list_reviews: (user_id: any, product_id: any) => Promise<any>;
declare const order_cancellation: (_id: any) => Promise<unknown>;
declare const order_confirmation: (_id: any) => Promise<unknown>;
declare const fetch_Orders_data: (query: any, options: any) => Promise<any>;
declare const get_Orders_data: (query: any, options: any) => Promise<any>;
declare const save_notification_data: (set_data: any) => Promise<unknown>;
declare const set_seller_data: (data: any) => Promise<any>;
declare const verify_seller_info: (query: any) => Promise<unknown>;
declare const update_email_otp: (user_id: string) => Promise<unknown>;
declare const edit_faqs: (data: any) => Promise<any>;
declare const verify_product: (query: any) => Promise<unknown>;
export { get_seller_data, generate_seller_token, make_seller_response, make_brand_response, make_subcategory_response, save_products, save_product_variants, edit_variants, edit_services, edit_highlights, edit_productDetails, get_variants_detail, save_product_details, save_product_services, save_product_highlights, save_deliverable_locations, make_products_response, get_product_detail, get_services, get_highlights, product_details, fetch_total_count, block_delete_data, edit_products_data, verify_user_info, fetch_Orders_data, fetch_order_detail, make_orders_response, list_reviews, order_cancellation, order_confirmation, save_notification_data, set_seller_data, verify_seller_info, edit_faqs, verify_product, get_product_by_id, get_Orders_data, update_email_otp, };
