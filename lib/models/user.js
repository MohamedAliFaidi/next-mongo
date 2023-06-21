import { Schema, model, models } from "mongoose"

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid email address"]
    },
 
    password: {
        type: String,
        required: [true, "Password is required"],
        select: false
    }
})
 
const User = models.User || model("User", UserSchema)

export default User