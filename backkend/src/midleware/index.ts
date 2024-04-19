 import jwt from 'jsonwebtoken' 
 import express from 'express'
import { usermodel } from '../db/users';
import { any } from 'joi';
 
   export const require_auth=(req:express.Request,res:express.Response,next:express.NextFunction)=>{
       const tokene=  req.headers.authorization?.split(' ')[1];
       
     

      
     
     if(tokene){
    jwt.verify(tokene,'gakiza code secret',(err:any,decodedToken:any)=>{
      if(err){
        res.status(400).json({error:"no webtoken found!"});
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
        
   
   export const isAdmin = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const  {email,password}  = req.body;
    if (email !== 'admin.lievin@gmail.com'&&password!=='Mugabekazilievin219@') {
      return res.status(403).json({ message: 'Forbidden' });
    }
    next();
  };
