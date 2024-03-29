import * as express from "express";
declare const signup: (req: any, res: express.Response) => Promise<void>;
declare const email_verification: (req: any, res: express.Response) => Promise<void>;
declare const resend_otp: (req: any, res: express.Response) => Promise<void>;
declare const phone_no_verification: (req: any, res: express.Response) => Promise<void>;
declare const resend_phone_otp: (req: any, res: express.Response) => Promise<void>;
declare const social_login: (req: express.Request, res: express.Response) => Promise<void>;
declare const login: (req: express.Request, res: express.Response) => Promise<void>;
declare const forgot_password: (req: any, res: express.Response) => Promise<void>;
declare const verify_otp: (req: any, res: express.Response) => Promise<void>;
declare const verify_password_otp: (req: any, res: express.Response) => Promise<void>;
declare const set_new_password: (req: any, res: express.Response) => Promise<void>;
declare const view_my_profile: (req: any, res: express.Response) => Promise<void>;
declare const edit_profile: (req: any, res: express.Response) => Promise<void>;
declare const change_password: (req: any, res: express.Response) => Promise<void>;
declare const logout: (req: any, res: express.Response) => Promise<void>;
declare const deactivate_account: (req: any, res: express.Response) => Promise<void>;
declare const contact_us: (req: any, res: express.Response) => Promise<void>;
declare const list_content: (req: express.Request, res: express.Response) => Promise<void>;
declare const add_edit_address: (req: any, res: express.Response) => Promise<void>;
declare const set_default_address: (req: any, res: express.Response) => Promise<void>;
declare const list_address: (req: any, res: express.Response) => Promise<void>;
declare const delete_address: (req: any, res: express.Response) => Promise<void>;
declare const add_to_cart: (req: any, res: express.Response) => Promise<void>;
declare const list_cart_items: (req: any, res: express.Response) => Promise<void>;
declare const remove_cart_item: (req: any, res: express.Response) => Promise<void>;
declare const place_order: (req: any, res: express.Response) => Promise<void>;
declare const get_single_order_detail: (req: any, res: express.Response) => Promise<void>;
declare const get_all_orders: (req: any, res: express.Response) => Promise<void>;
declare const cancel_order: (req: any, res: express.Response) => Promise<void>;
declare const can_add_review: (req: any, res: express.Response) => Promise<void>;
declare const add_review: (req: any, res: express.Response) => Promise<void>;
declare const edit_review: (req: any, res: express.Response) => Promise<void>;
declare const list_reviews: (req: any, res: express.Response) => Promise<void>;
declare const list_my_reviews: (req: any, res: express.Response) => Promise<void>;
declare const my_review_details: (req: any, res: express.Response) => Promise<void>;
declare const delete_review: (req: any, res: express.Response) => Promise<void>;
declare const add_wishlist: (req: any, res: express.Response) => Promise<void>;
declare const get_wishlist: (req: any, res: express.Response) => Promise<void>;
declare const delete_wishlist: (req: any, res: express.Response) => Promise<void>;
declare const add_card: (req: any, res: express.Response) => Promise<void>;
declare let save_card: (req: any, res: express.Response) => Promise<void>;
declare let detach_payment: (req: any, res: express.Response) => Promise<void>;
declare const set_default_card: (req: any, res: express.Response) => Promise<void>;
declare const listing_cards: (req: any, res: express.Response) => Promise<void>;
declare const list_cards: (req: any, res: express.Response) => Promise<void>;
declare const card_detail: (req: any, res: express.Response) => Promise<void>;
declare const list_coupons: (req: any, res: express.Response) => Promise<void>;
declare const coupon_details: (req: any, res: express.Response) => Promise<void>;
declare const list_used_coupons: (req: any, res: express.Response) => Promise<void>;
declare const expired_coupons: (req: any, res: express.Response) => Promise<void>;
declare const shipment_create: (req: any, res: express.Response) => Promise<void>;
declare const list_notifications: (req: any, res: express.Response) => Promise<void>;
declare const read_notifications: (req: any, res: express.Response) => Promise<void>;
declare const clear_notifications: (req: any, res: express.Response) => Promise<void>;
declare const getKeys: (req: any, res: express.Response) => Promise<void>;
declare const getKeyDetail: (req: any, res: express.Response) => Promise<void>;
export { signup, email_verification, resend_otp, phone_no_verification, resend_phone_otp, social_login, login, forgot_password, verify_otp, set_new_password, view_my_profile, edit_profile, change_password, logout, deactivate_account, contact_us, list_content, add_edit_address, set_default_address, list_address, delete_address, add_to_cart, list_cart_items, remove_cart_item, place_order, get_all_orders, get_single_order_detail, cancel_order, can_add_review, add_review, edit_review, list_reviews, list_my_reviews, my_review_details, add_wishlist, get_wishlist, delete_wishlist, add_card, save_card, set_default_card, listing_cards, list_cards, card_detail, detach_payment, list_coupons, coupon_details, list_used_coupons, expired_coupons, shipment_create, verify_password_otp, delete_review, list_notifications, read_notifications, clear_notifications, getKeys, getKeyDetail, };
