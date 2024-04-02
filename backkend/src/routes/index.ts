 import express from 'express'
import { require_auth } from '../midleware'
   const authcontroleers=require("../controllers/authcontrollers")
 
    const router=express()
     router.get("",async(req:express.Request,res:express.Response)=>{
             const {email,id}= req.body
               res.sendFile('')

     })
      router.get("/signup",authcontroleers.signup_get)
       router.post("/signup",authcontroleers.signup_post)
        router.get("/login",authcontroleers.login_get)
         router.post("/login",require_auth,authcontroleers.login_post)

      module.exports=router