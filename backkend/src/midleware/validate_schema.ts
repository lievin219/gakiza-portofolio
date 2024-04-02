import Joi from '@hapi/joi'
import hapijoi from '@hapi/joi'

 export const authschema=Joi.object({
     email:Joi.string().email().lowercase().required()
     ,password:Joi.string().min(5).required()

 })

  export const contact_validate=Joi.object({
    name:Joi.string().required(),
     email:Joi.string().email().lowercase().required(),
     message:Joi.string().uppercase().required().min(20)
  })

   export const comment_validate=Joi.object({
     email:Joi.string().email().required(),
     message:Joi.string().lowercase().required()
   })
 export   const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});
  export const blog_validate=Joi.object({
    title:Joi.string().email().required(),
    description:Joi.string().lowercase().required()
  })
 