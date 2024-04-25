 import express from 'express'
  import  Path  from 'path'
  import app  from '../index'
  import cookie from  'cookie-parser'
  import cloudinary from '../midleware/cloudinary.js'
 import upload from '../routes/multer.js'
 import multer from 'multer'

 
  import {getBlogs, getuserbyemail,getallcomments, blogsforadmin, getadmonblogs, blogsforagakizaadmin, databasefor_blogs} from '../db/users.js'
  
   import jwt from 'jsonwebtoken'
import {blogschemamodel, deleteuserbyid} from '../db/users.js'
   import { commentschemamodel, getuserByid, usermodel } from '../db/users.js'
    import { adminvali_date, adminvali_month, authschema, blogshema, comment_validate, contact_validate, loginSchema,blogs_data } from '../midleware/validate_schema.js'
   import { contactschemamodel, createUser, login ,getdatablogs} from '../db/users.js'
import { isStrongPassword } from 'validator'
    
  
    const handleerrors=(err:any)=>{
        console.log(err.message,err.code)
         let errors={email:"",password:""}
          if(err.message.lincludes("users validation failed")){
            
          }
    }
   const maxAge=3*24*60*68
       const createtoken=(id:any)=>{
  return  jwt.sign({id},'gakiza code secret',{
    expiresIn:maxAge
  })
       }
    
      
   export const signup_post=async(req:express.Request,res:express.Response)=>{
    
    try{
   

 const result=await authschema.validateAsync(req.body,{abortEarly:false})
 const existingusr=await getuserbyemail(result.email)
 if(existingusr){
   res.json({error:`this user already exists`})
 }
 else{
     const user=await createUser({email:result.email,password:result.password}) 
     
     
      const token=createtoken(user._id)

      res.cookie("jwt",token,{httpOnly:true,maxAge:maxAge*1000})
 
        
    return  res.status(200).json({user:`signup succesfully for${user.email} `,token}).end()   
    } }
     catch(error:any){
      if(error.isJoi==true){
         return res.status(400).json({error:`please check email or password`})
         console.log(`joi displayed an error${error}`)
      }
   
       return  res.status(400).send(`an error occured there is ${error} !!`)
       console.log(`an error occured there is ${error} !!`)
     }
   } 
   
   export const getallblogs=async(req:express.Request,res:express.Response)=>{
      try{
         const users=await getadmonblogs()
          return res.status(200).json(users) 
 
         
    }
   catch(error){
      console.log(error)
       return res.sendStatus(400)
   }
 
 }
 export const getdata=async(req:express.Request,res:express.Response)=>{
   try{
       const data=await getdatablogs()
       return res.status(200).json(data)
   }
   catch(error){
        
   }
 }
 


    export const login_get=async(req:express.Request,res:express.Response)=>{



    }


   export const signup_get=async(req:express.Request,res:express.Response)=>{

    res.json({message:"user registerd!!"})
          

    }



     export const login_post=async(req:express.Request,res:express.Response)=>{
   
      try{
            const result=await loginSchema.validateAsync(req.body,{abortEarly:false})
          
              
                        const user=await login(result.email,result.password)
                        const token=createtoken(user._id)
     
                             
                       return  res.json({user:`login succesfully for ${user.email}`,token}).end()
               } 
               catch(error:any){
                  
                  if(error.isJoi==true){
                     return res.json({error:`${error}`})
                  }
                   return  res.status(400).json({error:`${error}`})
                }
     }  

      export const log_out= (req:express.Request,res:express.Response)=>{
            res.cookie('jwt',"",{maxAge:1})
             res.status(400).json({message:"you are now logged out"})
      }

       export const contact_get=async(req:express.Request,res:express.Response)=>{
        //const {name,email,message}=req.body
         try{
          const result=await contact_validate.validateAsync(req.body)
          
           const newcomment=await contactschemamodel.create({name:result.name,email:result.email,message:result.message})
            return res.status(200).json({newcomment:newcomment._id})


         }
         catch(error:any){
          if(error.isJoi==true){
            return res.json({error:`joi displayed an error${error}`})
          }
           return  res.json({error:`an error occuring is ${error}`})
         }
         
       
        }
        export const comment_post=async (req:express.Request,res:express.Response)=>{
        try{

           const validate=await comment_validate.validateAsync(req.body)
          const newcommenti=await commentschemamodel.create({email:validate.email,message:validate.message})
          await newcommenti.save()
           res.status(200).json(newcommenti)
        }
         catch (error){
                res.status(404).json({error:` an error occured is ${error}`})
         }


        }

         export const update_comment=async(req:express.Request,res:express.Response)=>{
              
          const {id}=req.params
          const {email,message}= req.body
              

                 try{
                   if(!email||!message){
                     return res.json({error:`please provid all email and message`})}
                     
                     const useri= await getuserByid(id)
                      if(useri){
                     useri.email=email
                      useri.message=message
                          await useri.save()
                             res.status(200).json(useri)
                    }
                       
                             
                        
                          return res.json({message:"no user found "})
                   

                 }
                  catch(error){
                    res.json({error:`an error occured is ${error}  `})
                  }
         }  
         export const getalcomments=async(req:express.Request,res:express.Response)=>{
                 
            try{
               const newcommenti= await getallcomments()
                return res.status(200).json(newcommenti) 
       
               
          }
         catch(error){
            console.log(error)
             return res.status(400).json(error)
         }
                 
       }
         export const deletecomment=async(req:express.Request,res:express.Response)=>{
          try{
       const {id}=req.params;
        const deleteduser=await deleteuserbyid(id)
         return res.json(deleteduser)
          }
          catch(error){
               console.log(error)
                return res.status(200).json({message:`an error occured here`});
             
          }}
          export const datablog_blogposting=async(req:express.Request,res:express.Response)=>{
    try{
  const main=await blogs_data.validateAsync(req.body)
  const new_Blogssaq=await databasefor_blogs.create({picture:main.picture,subtitle:main.subtitle,subdescription:main.subdescription})
    await new_Blogssaq.save()
    res.status(400).json(new_Blogssaq)


    }
    catch(error){
     return  res.status(400).json(error)
    }
          }
          export const blog_post=async (req:express.Request,res:express.Response)=>{            
  
            try{
                        
    const validone=await blogshema.validateAsync(req.body)
                            
               
      const newcommente=await blogschemamodel.create({image:validone.image,title:validone.title,description:validone.description})
              await newcommente.save()
               res.status(200).json({newcommente})
            }
             catch (error){
                    res.status(404).json({error:` an error occured is ${error}`})
             }
    
    
            }

            export const adminpage=async(req:express.Request,res:express.Response)=>{
               try{
                const validpages=await adminvali_date.validateAsync(req.body)
               const newitem=await blogsforadmin.create({image:validpages.image,title:validpages.title,description:validpages.description})
               await newitem.save()
                res.status(200).json(newitem)
               }
               catch(error){
                   res.status(400).json({error})
               }

            }
            export const gakiapage=async(req:express.Request,res:express.Response)=>{
               try{
                const validpages=await adminvali_month.validateAsync(req.body)
               const newitem=await blogsforagakizaadmin.create({image:validpages.image,title:validpages.title,description:validpages.description})
               await newitem.save()
                res.status(200).json(newitem)
               }
               catch(error){
                   res.status(400).json({error})
               }

            }
                            