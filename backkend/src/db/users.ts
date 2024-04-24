 import mongoose, { model, models } from 'mongoose'
import bcrypt from 'bcrypt'
import { required } from 'joi'
  
  const userschema=new mongoose.Schema(({
     email:{
            type:String,
          required:true,
           unique:true,
           
           
     },
      password:{
        type:String,
          required:true
          
      },
      isAdmin:{
        type:Boolean,
        default:false
      }
  }
   ))
   userschema.pre('save',async function(next:any){
         
    const salt:any=await bcrypt.genSalt()
     this.password=await bcrypt.hash(this.password,salt)
          next()
      })
    
    
    //schema for contact form 
    const contactschema=new mongoose.Schema(({
      name:{
          type:String,
           required:true,
            lowercase:true,
            unique:true,
            
            
      },
       email:{
          type:String,
           required:true,
           
       },
       message:{
         type:String,
         required:true,

       }
   }
    ))
    const commentschema=new mongoose.Schema(({
      
       email:{
          type:String,
           required:true,
           
       },
       message:{
         type:String,
         required:true,

       }
   }
    ))
    const blogs_admin=new mongoose.Schema(({
       image:{
        type:String,
        required:true

       },
       title:{
        type:String,
        required:true

       },
       description:{
           type:String,
           required:true
       }
    }))
    const blogs_adminiiiii=new mongoose.Schema(({
      image:{
       type:String,
       required:true

      },
      title:{
       type:String,
       required:true

      },
      description:{
          type:String,
          required:true
      }
   }))
    const blogschema=new mongoose.Schema(({
      image:{
        type:String,
        required:true
      },title:{
          type:String,
            required:true,
            lowercase:true,
            },
       description:{
          type:String,
          required:true}
       
   }))                
                    

 
   export  const blogschemamodel=mongoose.model('blogs',blogschema)
   export const blogsforadmin=mongoose.model("adminblogs",blogs_admin)
   export const blogsforagakizaadmin=mongoose.model("admingakiza",blogs_adminiiiii)
   export const  usermodel=mongoose.model("users",userschema);
   export const  contactschemamodel=mongoose.model("contacts",contactschema);
   export const  commentschemamodel=mongoose.model("comments",commentschema)
   export const getBlogs=()=>blogschemamodel.find()
   export const getadmonblogs=()=>blogsforadmin.find()
   export const getallcomments=()=>commentschemamodel.find()
   export const createUser=(values:Record<string,any>)=>new usermodel(values).save().then((user)=>
        user.toObject())
        export const getuserByid=(id:string)=>commentschemamodel.findById(id)
        export const deleteuserbyid=(id:string)=>commentschemamodel.findOneAndDelete({_id:id});
        export const getuserbyemail=(email:string)=>usermodel.findOne({email})
       export const login=async function(email:any,password:any){
          const user=await usermodel.findOne({email})
           if(user){
const auth=await bcrypt.compare(password,user.password)
if(auth){
return user
}
throw Error("incorrect password")
           }
           throw Error("this email doesn't exist ");
           
}

        