 import jwt from 'jsonwebtoken' 
 import express from 'express'
import { usermodel } from '../db/users';
import { any, string } from 'joi';
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
        export const admin_auth = (req:express.Request, res:express.Response, next:express.NextFunction) => {
          const token = req.headers.authorization?.split(' ')[1];
          if (!token) {
            return res.redirect("back");
          }
        
          jwt.verify(token, 'gakiza code secret', async (err: any | null, decodedInfo: any) => {
            if (err) {
              console.log(err.message);
              return res.status(500).send("Internal Server Error");
            }
        
            try {
              const user = await usermodel.findById(decodedInfo.id);
              if (!user || !user.isAdmin) {
                return res.redirect("back")
              }
              next();
            } catch (error) {
              console.error("Error retrieving user:", error);
              return res.status(500).send("Internal Server Error");
            }
          });
        };
      
        