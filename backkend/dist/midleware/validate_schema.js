import Joi from '@hapi/joi';
export const authschema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$')).required()
});
export const contact_validate = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    message: Joi.string().required()
});
export const comment_validate = Joi.object({
    email: Joi.string().email().required(),
    message: Joi.string().lowercase().required()
});
export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});
export const blog_validate = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().lowercase().required()
});
//# sourceMappingURL=validate_schema.js.map