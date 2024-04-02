"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blog_post = exports.deletecomment = exports.update_comment = exports.comment_post = exports.contact_get = exports.log_out = exports.login_post = exports.signup_get = exports.login_get = exports.getallblogs = exports.signup_post = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const users_1 = require("../db/users");
const validate_schema_1 = require("../midleware/validate_schema");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const users_2 = require("../db/users");
const users_3 = require("../db/users");
const validate_schema_2 = require("../midleware/validate_schema");
const roution = require('express');
const users_4 = require("../db/users");
const apping = roution();
const handleerrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: "", password: "" };
    if (err.message.lincludes("users validation failed")) {
    }
};
const maxAge = 3 * 24 * 60 * 68;
const createtoken = (id) => {
    return jsonwebtoken_1.default.sign({ id }, 'gakiza code secret', {
        expiresIn: maxAge
    });
};
const User = require("../db/users");
apping.use("/assets", express_1.default.static(path_1.default.join(__dirname, "../../public/assets")));
const signup_post = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //  const {email,password}=req.body
        const result = yield validate_schema_2.authschema.validateAsync(req.body);
        const uses = yield (0, users_4.createUser)({ email: result.email, password: result.password });
        const token = createtoken(uses._id);
        res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
        return res.status(201).json({ uses: uses._id }).end();
    }
    catch (error) {
        if (error.isJoi == true) {
            return res.status(422).json({ error: `joi displayed an error${error}` });
        }
        return res.status(400).send(`an error occured there is ${error} !!`);
    }
});
exports.signup_post = signup_post;
const getallblogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, users_1.getBlogs)();
        return res.status(200).json(users);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
});
exports.getallblogs = getallblogs;
const login_get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.login_get = login_get;
const signup_get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ message: "user registerd!!" });
});
exports.signup_get = signup_get;
const login_post = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const{email,password}=req.body
    try {
        const result = yield validate_schema_2.loginSchema.validateAsync(req.body);
        const user = yield (0, users_4.login)(result.email, result.password);
        const token = createtoken(user._id);
        res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
        return res.json({ user: user._id }).end();
    }
    catch (error) {
        if (error.isJoi == true) {
            return res.json({ error: `joi displayed this speccific error${error}` });
        }
        return res.status(400).json({ error: `an error occured is ${error}` });
    }
});
exports.login_post = login_post;
const log_out = (req, res) => {
    res.cookie('jwt', "", { maxAge: 1 });
    res.status(400).json({ message: "you are now logged out" });
};
exports.log_out = log_out;
const contact_get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //const {name,email,message}=req.body
    try {
        const result = yield validate_schema_2.contact_validate.validateAsync(req.body);
        const newcomment = yield users_4.contactschemamodel.create({ name: result.name, email: result.email, message: result.message });
        return res.status(201).json({ newcomment });
    }
    catch (error) {
        if (error.isJoi == true) {
            return res.json({ error: `joi displayed an error${error}` });
        }
        return res.json({ error: `an error occuring is ${error}` });
    }
});
exports.contact_get = contact_get;
const comment_post = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validate = yield validate_schema_2.comment_validate.validateAsync(req.body);
        const newcomment = yield users_3.commentschemamodel.create({ email: validate.email, message: validate.message });
        yield newcomment.save();
        res.json(newcomment);
    }
    catch (error) {
        res.status(400).json({ error: ` an error occured is ${error}` });
    }
});
exports.comment_post = comment_post;
const update_comment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { email, message } = req.body;
    try {
        if (!email || !message) {
            return res.json({ error: `please provid all email and message` });
        }
        const useri = yield (0, users_3.getuserByid)(id);
        if (useri) {
            useri.email = email;
            useri.message = message;
            yield useri.save();
            res.status(200).json(useri);
        }
        return res.json({ message: "no user found " });
    }
    catch (error) {
        res.json({ error: `an error occured is ${error}  ` });
    }
});
exports.update_comment = update_comment;
const deletecomment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleteduser = yield (0, users_2.deleteuserbyid)(id);
        return res.json(deleteduser);
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: `an error occured here` });
    }
});
exports.deletecomment = deletecomment;
const blog_post = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validate_post = yield validate_schema_1.blog_validate.validateAsync(req.body);
        const newcomment = yield users_2.blogschemamodel.create({ title: validate_post.title, message: validate_post.description });
        yield newcomment.save();
        res.json(newcomment);
    }
    catch (error) {
        res.status(400).json({ error: ` an error occured is ${error}` });
    }
});
exports.blog_post = blog_post;
