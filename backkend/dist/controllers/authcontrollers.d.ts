import express from 'express';
export declare const signup_post: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
export declare const getallblogs: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>>>;
export declare const login_get: (req: express.Request, res: express.Response) => Promise<void>;
export declare const signup_get: (req: express.Request, res: express.Response) => Promise<void>;
export declare const login_post: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>>>;
export declare const log_out: (req: express.Request, res: express.Response) => void;
export declare const contact_get: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>>>;
export declare const comment_post: (req: express.Request, res: express.Response) => Promise<void>;
export declare const update_comment: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
export declare const getalcomments: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>>>;
export declare const deletecomment: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>>>;
export declare const blog_post: (req: express.Request, res: express.Response) => Promise<void>;
export declare const adminpage: (req: express.Request, res: express.Response) => Promise<void>;
export declare const gakiapage: (req: express.Request, res: express.Response) => Promise<void>;
