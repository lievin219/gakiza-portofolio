 import jwt from 'jsonwebtoken' 
 import express from 'express'
 
   export const require_auth=(req:express.Request,res:express.Response,next:express.NextFunction)=>{
       const token= req.cookies.jwt
      
       // check jsonwebtoken exist or not 
        if(token){
    jwt.verify(token,'gakiza code secret',(err:any,decodedToken:any)=>{
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
             
        }
   }
   export const isAdmin = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const  {email,password}  = req.body;
    if (email !== 'admin.lievin@gmail.com'&&password!=='Mugabekazilievin219@') {
      return res.status(403).json({ message: 'Forbidden' });
    }
    next();
  };
