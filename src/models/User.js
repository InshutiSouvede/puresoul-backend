import mongoose, { model, Schema } from "mongoose";
const UserSchema = new Schema({
    id:{
        type:String,
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    currency:{
        type:String,
        default:"RWF"
    }
},{timestamps:true})

const Users = model("User",UserSchema)

export default Users