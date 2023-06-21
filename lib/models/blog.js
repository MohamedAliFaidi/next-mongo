import { Schema, model, models } from "mongoose"

const BlogSchema = new Schema({
    author: {
        type: String,
        unique: true,
        required: [true, "Author is required"],
        
    },
 
    title: {
        type: String,
        required: [true, "Title is required"],
      
    }
    ,
    content: {
        type: String,
        required: [true, "Content is required"],
    }
})
 
const Blog = models.Blog || model("Blog", BlogSchema)

export default Blog