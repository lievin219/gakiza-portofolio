 import express from  'express'
  import mongoose from 'mongoose' 
  import  Path  from 'path'
  import {getallblogs} from './controllers/authcontrollers'
  import { blog_post, deletecomment, update_comment } from './controllers/authcontrollers'
  import bodyparser from 'body-parser'
     import {comment_post, contact_get, log_out, login_post, signup_get,}from './controllers/authcontrollers'  
      import {signup_post} from './controllers/authcontrollers'
import { require_auth } from './midleware'
   
  

   
   export  const app=express()
   const jwt=require("jsonwebtoken")
 const cookie_parser=require("cookie-parser")
    app.use(express.json())
    
     app.use(cookie_parser())
  



    app.use("/assets",express.static(Path.join(__dirname,"../../public/assets")))
     
     
     const port=3000
      
          const mongodb_url="mongodb+srv://gakizalievin219:soFbc9DE42Yv7MKf@cluster0.csy64ya.mongodb.net/"
           mongoose.connect(mongodb_url).then(()=>{
             console.log(`the database is coonnected to  http://localhost:${port}`)
           }).catch((error)=>{
             console.log(`an errror have occured  here ${error}`)

           })
              app.listen(port)
                
               app.get("/signup",signup_get)
               app.post("/signupi",signup_post)
               app.post("/login",login_post)
                app.get("/logout",log_out)
                app.patch("/comments/:id",update_comment)  
    app.post("/contact",require_auth,contact_get)
               app.get("/",(req:express.Request,res:express.Response)=>{
                      res.sendFile(Path.join(__dirname,"../../public",'index.html'));

               })
                app.get("/home",require_auth,(req:express.Request,res:express.Response)=>{
                         res.sendFile(Path.join(__dirname,"../../public",'index.html'))
                })
                app.post("/article",require_auth,blog_post)
                app.post("/comment",require_auth,comment_post)
                app.post("contact",require_auth,contact_get)
                app.delete("/delete/:id",require_auth,deletecomment)
           // mongodb password:soFbc9DE42Yv7MKf
           app.get("/article/getall",require_auth,getallblogs)
                                                                                
