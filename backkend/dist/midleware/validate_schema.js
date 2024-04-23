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
export const comment_validate = Joi.object({
    email: Joi.string().email().required(),
    message: Joi.string().lowercase().required()
});
export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});
export const blogschema = Joi.object({
    imagei: Joi.string().email().required(),
    titlei: Joi.string().required(),
    descriptioni: Joi.string().required()
});
//# sourceMappingURL=validate_schema.js.map