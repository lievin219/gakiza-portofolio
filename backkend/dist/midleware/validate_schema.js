"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blog_validate = exports.loginSchema = exports.comment_validate = exports.contact_validate = exports.authschema = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
exports.authschema = joi_1.default.object({
    email: joi_1.default.string().email().lowercase().required(),
    password: joi_1.default.string().min(5).required()
});
exports.contact_validate = joi_1.default.object({
    name: joi_1.default.string().required(),
    email: joi_1.default.string().email().lowercase().required(),
    message: joi_1.default.string().uppercase().required().min(20)
});
exports.comment_validate = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    message: joi_1.default.string().lowercase().required()
});
exports.loginSchema = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required()
});
exports.blog_validate = joi_1.default.object({
    title: joi_1.default.string().email().required(),
    description: joi_1.default.string().lowercase().required()
});
