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
    phoneNumber:{
        type:String,
        required:false
    },
    gender:{
        type:String,
        required:false
    },
    age:{
        type:Number,
        required:false
    },
},{timestamps:true})

const Users = model("User",UserSchema)

export default Users