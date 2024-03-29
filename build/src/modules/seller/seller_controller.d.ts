import express from "express";
declare const login: (req: express.Request, res: express.Response) => Promise<void>;
declare const email_verification: (req: any, res: express.Response) => Promise<void>;
declare const resend_email_otp: (req: any, res: express.Response) => Promise<void>;
declare const view_my_profile: (req: any, res: express.Response) => Promise<void>;
declare const edit_profile: (req: any, res: express.Response) => Promise<void>;
declare const verify_seller_info: (query: any) => Promise<unknown>;
declare const change_password: (req: any, res: express.Response) => Promise<void>;
declare const forgot_password: (req: any, res: express.Response) => Promise<void>;
declare const resend_fp_otp: (req: any, res: express.Response) => Promise<void>;
declare const verify_fp_otp: (req: any, res: express.Response) => Promise<void>;
declare const set_new_password: (req: any, res: express.Response) => Promise<void>;
declare const logout: (req: any, res: express.Response) => Promise<void>;
declare const dashboard: (req: any, res: express.Response) => Promise<void>;
declare const retrive_parcels: (req: express.Request, res: express.Response) => Promise<void>;
export { login, email_verification, resend_email_otp, view_my_profile, edit_profile, change_password, forgot_password, resend_fp_otp, verify_fp_otp, set_new_password, logout, dashboard, retrive_parcels, verify_seller_info };
