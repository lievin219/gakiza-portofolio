"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const authcontrollers_1 = require("./controllers/authcontrollers");
const authcontrollers_2 = require("./controllers/authcontrollers");
const authcontrollers_3 = require("./controllers/authcontrollers");
const authcontrollers_4 = require("./controllers/authcontrollers");
const midleware_1 = require("./midleware");
exports.app = (0, express_1.default)();
const jwt = require("jsonwebtoken");
const cookie_parser = require("cookie-parser");
exports.app.use(express_1.default.json());
exports.app.use(cookie_parser());
exports.app.use("/assets", express_1.default.static(path_1.default.join(__dirname, "../../public/assets")));
const port = 3000;
const mongodb_url = "mongodb+srv://gakizalievin219:soFbc9DE42Yv7MKf@cluster0.csy64ya.mongodb.net/";
mongoose_1.default.connect(mongodb_url).then(() => {
    console.log(`the database is coonnected to  http://localhost:${port}`);
}).catch((error) => {
    console.log(`an errror have occured  here ${error}`);
});
exports.app.listen(port);
exports.app.get("/signup", authcontrollers_3.signup_get);
exports.app.post("/signupi", authcontrollers_4.signup_post);
exports.app.post("/login", authcontrollers_3.login_post);
exports.app.get("/logout", authcontrollers_3.log_out);
exports.app.patch("/comments/:id", authcontrollers_2.update_comment);
exports.app.post("/contact", midleware_1.require_auth, authcontrollers_3.contact_get);
exports.app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../../public", 'index.html'));
});
exports.app.get("/home", midleware_1.require_auth, (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../../public", 'index.html'));
});
exports.app.post("/article", midleware_1.require_auth, authcontrollers_2.blog_post);
exports.app.post("/comment", midleware_1.require_auth, authcontrollers_3.comment_post);
exports.app.post("contact", midleware_1.require_auth, authcontrollers_3.contact_get);
exports.app.delete("/delete/:id", midleware_1.require_auth, authcontrollers_2.deletecomment);
// mongodb password:soFbc9DE42Yv7MKf
exports.app.get("/article/getall", authcontrollers_1.getallblogs);
