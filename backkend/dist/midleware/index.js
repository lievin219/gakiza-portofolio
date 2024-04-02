"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.require_auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const require_auth = (req, res, next) => {
    const token = req.cookies.jwt;
    // check jsonwebtoken exist or not 
    if (token) {
        jsonwebtoken_1.default.verify(token, 'gakiza code secret', (err, decodedToken) => {
            if (err) {
                res.status(400).json({ error: "no webtoken found!" });
            }
            else {
                console.log(decodedToken);
                next();
            }
        });
    }
    else {
        res.json({ error: "it seems you are not signed in!" });
    }
};
exports.require_auth = require_auth;
