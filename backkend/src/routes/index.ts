 import express from 'express'
import { require_auth } from '../midleware/index'
  
 
    const router=express()
     router.get("",async(req:express.Request,res:express.Response)=>{
             const {email,id}= req.body
               res.sendFile('')

     })
     