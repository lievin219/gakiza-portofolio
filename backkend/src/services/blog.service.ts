    
   import { databasefor_blogs } from "../db/users.js";

    export class blogService{
            //update a blog
    async updateBlog(id: string, data: any) {
        try {

                const blogz = await databasefor_blogs.findByIdAndUpdate({_id:id}, data, {new: true})                
                if(!blogz){
                    return "blog not available"
                }
                return blogz          
        } catch (error) {
            console.log(error)
        }
    }




    }

              




    export const  blogServices = new blogService()