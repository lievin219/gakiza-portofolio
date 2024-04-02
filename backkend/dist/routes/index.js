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
const express_1 = __importDefault(require("express"));
const midleware_1 = require("../midleware");
const authcontroleers = require("../controllers/authcontrollers");
const router = (0, express_1.default)();
router.get("", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, id } = req.body;
    res.sendFile('');
}));
router.get("/signup", authcontroleers.signup_get);
router.post("/signup", authcontroleers.signup_post);
router.get("/login", authcontroleers.login_get);
router.post("/login", midleware_1.require_auth, authcontroleers.login_post);
module.exports = router;
