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



       export const isAdmin_auth= (req: express.Request, res: express.Response, next: express.NextFunction) => {
    // Extract token from the Authorization header
    const token = req.headers.authorization?.split(' ')[1];

    if (token) {
        // Verify the token
        jwt.verify(token, 'gakiza code secret', (err: any, decodedToken: any) => {
            if (err) {
                // If token verification fails, send an error response
                res.status(401).json({ error: 'Unauthorized' });
            } else {
                // If token is valid, check if the user is an admin
                if (decodedToken && decodedToken.isAdmin) {
                    // If user is admin, proceed to the next middleware
                    next();
                } else {
                    // If user is not an admin, send an error response
                    res.status(403).json({ error: 'Forbidden' });
                }
            }
        });
    } else {
        // If no token is provided, send an error response
        res.status(401).json({ error: 'Unauthorized' });
    }
};