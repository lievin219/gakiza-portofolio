/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import mongoose from 'mongoose';
export declare const blogschemamodel: mongoose.Model<{
    image: string;
    title: string;
    description: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    image: string;
    title: string;
    description: string;
}> & {
    image: string;
    title: string;
    description: string;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    image: string;
    title: string;
    description: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    image: string;
    title: string;
    description: string;
}>> & mongoose.FlatRecord<{
    image: string;
    title: string;
    description: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export declare const blogsforadmin: mongoose.Model<{
    image: string;
    title: string;
    description: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    image: string;
    title: string;
    description: string;
}> & {
    image: string;
    title: string;
    description: string;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    image: string;
    title: string;
    description: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    image: string;
    title: string;
    description: string;
}>> & mongoose.FlatRecord<{
    image: string;
    title: string;
    description: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export declare const usermodel: mongoose.Model<{
    email: string;
    password: string;
    isAdmin: boolean;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    email: string;
    password: string;
    isAdmin: boolean;
}> & {
    email: string;
    password: string;
    isAdmin: boolean;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    email: string;
    password: string;
    isAdmin: boolean;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    email: string;
    password: string;
    isAdmin: boolean;
}>> & mongoose.FlatRecord<{
    email: string;
    password: string;
    isAdmin: boolean;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export declare const contactschemamodel: mongoose.Model<{
    email: string;
    name: string;
    message: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    email: string;
    name: string;
    message: string;
}> & {
    email: string;
    name: string;
    message: string;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    email: string;
    name: string;
    message: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    email: string;
    name: string;
    message: string;
}>> & mongoose.FlatRecord<{
    email: string;
    name: string;
    message: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export declare const commentschemamodel: mongoose.Model<{
    email: string;
    message: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    email: string;
    message: string;
}> & {
    email: string;
    message: string;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    email: string;
    message: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    email: string;
    message: string;
}>> & mongoose.FlatRecord<{
    email: string;
    message: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export declare const getBlogs: () => mongoose.Query<(mongoose.Document<unknown, {}, {
    image: string;
    title: string;
    description: string;
}> & {
    image: string;
    title: string;
    description: string;
} & {
    _id: mongoose.Types.ObjectId;
})[], mongoose.Document<unknown, {}, {
    image: string;
    title: string;
    description: string;
}> & {
    image: string;
    title: string;
    description: string;
} & {
    _id: mongoose.Types.ObjectId;
}, {}, {
    image: string;
    title: string;
    description: string;
}, "find">;
export declare const getadmonblogs: () => mongoose.Query<(mongoose.Document<unknown, {}, {
    image: string;
    title: string;
    description: string;
}> & {
    image: string;
    title: string;
    description: string;
} & {
    _id: mongoose.Types.ObjectId;
})[], mongoose.Document<unknown, {}, {
    image: string;
    title: string;
    description: string;
}> & {
    image: string;
    title: string;
    description: string;
} & {
    _id: mongoose.Types.ObjectId;
}, {}, {
    image: string;
    title: string;
    description: string;
}, "find">;
export declare const getallcomments: () => mongoose.Query<(mongoose.Document<unknown, {}, {
    email: string;
    message: string;
}> & {
    email: string;
    message: string;
} & {
    _id: mongoose.Types.ObjectId;
})[], mongoose.Document<unknown, {}, {
    email: string;
    message: string;
}> & {
    email: string;
    message: string;
} & {
    _id: mongoose.Types.ObjectId;
}, {}, {
    email: string;
    message: string;
}, "find">;
export declare const createUser: (values: Record<string, any>) => Promise<{
    email: string;
    password: string;
    isAdmin: boolean;
} & {
    _id: mongoose.Types.ObjectId;
} & Required<{
    _id: mongoose.Types.ObjectId;
}>>;
export declare const getuserByid: (id: string) => mongoose.Query<(mongoose.Document<unknown, {}, {
    email: string;
    message: string;
}> & {
    email: string;
    message: string;
} & {
    _id: mongoose.Types.ObjectId;
}) | null, mongoose.Document<unknown, {}, {
    email: string;
    message: string;
}> & {
    email: string;
    message: string;
} & {
    _id: mongoose.Types.ObjectId;
}, {}, {
    email: string;
    message: string;
}, "findOne">;
export declare const deleteuserbyid: (id: string) => mongoose.Query<(mongoose.Document<unknown, {}, {
    email: string;
    message: string;
}> & {
    email: string;
    message: string;
} & {
    _id: mongoose.Types.ObjectId;
}) | null, mongoose.Document<unknown, {}, {
    email: string;
    message: string;
}> & {
    email: string;
    message: string;
} & {
    _id: mongoose.Types.ObjectId;
}, {}, {
    email: string;
    message: string;
}, "findOneAndDelete">;
export declare const getuserbyemail: (email: string) => mongoose.Query<(mongoose.Document<unknown, {}, {
    email: string;
    password: string;
    isAdmin: boolean;
}> & {
    email: string;
    password: string;
    isAdmin: boolean;
} & {
    _id: mongoose.Types.ObjectId;
}) | null, mongoose.Document<unknown, {}, {
    email: string;
    password: string;
    isAdmin: boolean;
}> & {
    email: string;
    password: string;
    isAdmin: boolean;
} & {
    _id: mongoose.Types.ObjectId;
}, {}, {
    email: string;
    password: string;
    isAdmin: boolean;
}, "findOne">;
export declare const login: (email: any, password: any) => Promise<mongoose.Document<unknown, {}, {
    email: string;
    password: string;
    isAdmin: boolean;
}> & {
    email: string;
    password: string;
    isAdmin: boolean;
} & {
    _id: mongoose.Types.ObjectId;
}>;
