import Joi from '@hapi/joi';
export const authschema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6)
});
export const contact_validate = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    message: Joi.string().required()
});
export const blogs_data = Joi.object({
    picture: Joi.string().required(),
    subtitle: Joi.string().required(),
    subdescription: Joi.string().required()
});
export const adminvali_date = Joi.object({
    image: Joi.string().required(),
    title: Joi.string().required(),
    description: Joi.string().required()
});
export const adminvali_month = Joi.object({
    image: Joi.string().required(),
    title: Joi.string().required(),
    description: Joi.string().required()
});
export const comment_validate = Joi.object({
    email: Joi.string().email().required(),
    message: Joi.string().lowercase().required()
});
export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});
export const blogshema = Joi.object({
    image: Joi.string().email().required(),
    title: Joi.string().required(),
    description: Joi.string().required()
});
//# sourceMappingURL=validate_schema.js.map