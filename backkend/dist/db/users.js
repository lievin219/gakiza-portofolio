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
exports.login = exports.deleteuserbyid = exports.getuserByid = exports.createUser = exports.getBlogs = exports.commentschemamodel = exports.contactschemamodel = exports.usermodel = exports.blogschemamodel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { isemail } = require("validator");
const bcrypt_1 = __importDefault(require("bcrypt"));
const userschema = new mongoose_1.default.Schema(({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
}));
userschema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const salt = yield bcrypt_1.default.genSalt();
        this.password = yield bcrypt_1.default.hash(this.password, salt);
        next();
    });
});
//schema for contact form 
const contactschema = new mongoose_1.default.Schema(({
    name: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
}));
const commentschema = new mongoose_1.default.Schema(({
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
}));
const blogschema = new mongoose_1.default.Schema(({
    title: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    }
}));
exports.blogschemamodel = mongoose_1.default.model('blogs', blogschema);
exports.usermodel = mongoose_1.default.model("users", userschema);
exports.contactschemamodel = mongoose_1.default.model("contacts", contactschema);
exports.commentschemamodel = mongoose_1.default.model("comments", commentschema);
const getBlogs = () => exports.blogschemamodel.find();
exports.getBlogs = getBlogs;
const createUser = (values) => new exports.usermodel(values).save().then((user) => user.toObject());
exports.createUser = createUser;
const getuserByid = (id) => exports.commentschemamodel.findById(id);
exports.getuserByid = getuserByid;
const deleteuserbyid = (id) => exports.commentschemamodel.findOneAndDelete({ _id: id });
exports.deleteuserbyid = deleteuserbyid;
const login = function (email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield exports.usermodel.findOne({ email });
        if (user) {
            const auth = yield bcrypt_1.default.compare(password, user.password);
            if (auth) {
                return user;
            }
            throw Error("incorrect password");
        }
        throw Error("this email doesn't exist ");
    });
};
exports.login = login;
