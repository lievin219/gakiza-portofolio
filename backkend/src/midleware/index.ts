 import jwt from 'jsonwebtoken' 
 import express from 'express'
import { usermodel } from '../db/users';
import { any } from 'joi';
import { getuserbyemail } from '../db/users';
;
 
   export const require_auth=(req:express.Request,res:express.Response,next:express.NextFunction)=>{
       const tokene=  req.headers.authorization?.split(' ')[1];
       
     

      
     
     if(tokene){
    jwt.verify(tokene,'gakiza code secret',(err:any,decodedToken:any)=>{
      if(err){
        res.status(400).json({error:err,tokene});
     }
      else{
         console.log(decodedToken)
         
        next()
    }
    })
        }
        else{
             res.json({error:"it seems you are not signed in!"});
        }}
        
   
       
