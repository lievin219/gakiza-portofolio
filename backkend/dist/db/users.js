import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const userschema = new mongoose.Schema(({
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
userschema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});
//schema for contact form 
const contactschema = new mongoose.Schema(({
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
const commentschema = new mongoose.Schema(({
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
}));
const blogschema = new mongoose.Schema(({
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
export const blogschemamodel = mongoose.model('blogs', blogschema);
export const usermodel = mongoose.model("users", userschema);
export const contactschemamodel = mongoose.model("contacts", contactschema);
export const commentschemamodel = mongoose.model("comments", commentschema);
export const getBlogs = () => blogschemamodel.find();
export const createUser = (values) => new usermodel(values).save().then((user) => user.toObject());
export const getuserByid = (id) => commentschemamodel.findById(id);
export const deleteuserbyid = (id) => commentschemamodel.findOneAndDelete({ _id: id });
export const login = async function (email, password) {
    const user = await usermodel.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error("incorrect password");
    }
    throw Error("this email doesn't exist ");
};
//# sourceMappingURL=users.js.map