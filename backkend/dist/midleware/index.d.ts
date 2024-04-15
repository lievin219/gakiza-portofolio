import express from 'express';
export declare const require_auth: (req: express.Request, res: express.Response, next: express.NextFunction) => void;
export declare const isAdmin: (req: express.Request, res: express.Response, next: express.NextFunction) => express.Response<any, Record<string, any>> | undefined;
