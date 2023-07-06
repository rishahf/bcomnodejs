import { Request, Response } from 'express';
export default class controller {
    static dashboard: (req: Request, res: Response) => Promise<void>;
    static product_graph: (req: Request, res: Response) => Promise<void>;
    static sales_graph: (req: Request, res: Response) => Promise<void>;
    static add_a_product: (req: Request, res: Response) => Promise<void>;
    static edit_a_product: (req: Request, res: Response) => Promise<void>;
    static list_product: (req: Request, res: Response) => Promise<void>;
    static list_product_details: (req: Request, res: Response) => Promise<void>;
    static add_product_details: (req: Request, res: Response) => Promise<void>;
    static edit_product_details: (req: Request, res: Response) => Promise<void>;
    static list_p_details: (req: Request, res: Response) => Promise<void>;
    static delete_product_details: (req: Request, res: Response) => Promise<void>;
    static add_product_services: (req: Request, res: Response) => Promise<void>;
    static edit_product_services: (req: Request, res: Response) => Promise<void>;
    static list_product_services: (req: Request, res: Response) => Promise<void>;
    static delete_product_services: (req: Request, res: Response) => Promise<void>;
    static add_product_highlights: (req: Request, res: Response) => Promise<void>;
    static edit_product_highlights: (req: Request, res: Response) => Promise<void>;
    static list_product_highlights: (req: Request, res: Response) => Promise<void>;
    static delete_product_highlights: (req: Request, res: Response) => Promise<void>;
    static add_pv: (req: Request, res: Response) => Promise<void>;
    static edit_pv: (req: Request, res: Response) => Promise<void>;
    static list_pv: (req: Request, res: Response) => Promise<void>;
    static delete_pv: (req: Request, res: Response) => Promise<void>;
    static list_product_variants_to_add: (req: Request, res: Response) => Promise<void>;
    static add_product_faq: (req: Request, res: Response) => Promise<void>;
    static edit_product_faq: (req: Request, res: Response) => Promise<void>;
    static list_product_faq: (req: Request, res: Response) => Promise<void>;
    static delete_product_faq: (req: Request, res: Response) => Promise<void>;
    static add_delivery_location: (req: Request, res: Response) => Promise<void>;
    static edit_delivery_location: (req: Request, res: Response) => Promise<void>;
    static list_delivery_location: (req: Request, res: Response) => Promise<void>;
    static delete_delivery_location: (req: Request, res: Response) => Promise<void>;
    static add_a_coupon: (req: Request, res: Response) => Promise<void>;
    static edit_a_coupon: (req: Request, res: Response) => Promise<void>;
    static list_coupons: (req: Request, res: Response) => Promise<void>;
    static list_coupon_details: (req: Request, res: Response) => Promise<void>;
    static delete_a_coupon: (req: Request, res: Response) => Promise<void>;
    static list_orders: (req: Request, res: Response) => Promise<void>;
    static order_details: (req: Request, res: Response) => Promise<void>;
    static order_status_change: (req: Request, res: Response) => Promise<void>;
    static order_invoice_details: (req: Request, res: Response) => Promise<void>;
    static cancel_order: (req: Request, res: Response) => Promise<void>;
    static approve_cancel_request: (req: Request, res: Response) => Promise<void>;
    static list_orders_transactions: (req: Request, res: Response) => Promise<void>;
    static list_notifications: (req: Request, res: Response) => Promise<void>;
    static mark_read_notifications: (req: Request, res: Response) => Promise<void>;
    static clear_notifications: (req: Request, res: Response) => Promise<void>;
    static read_notification: (req: Request, res: Response) => Promise<void>;
    static list_orders_reviews: (req: Request, res: Response) => Promise<void>;
    static checking_orders: (req: Request, res: Response) => Promise<void>;
}
