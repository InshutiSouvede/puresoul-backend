import { compare, hash } from "bcryptjs"
import Users from "../models/User.js"
import { secret } from "../constants.js"
import jwt from "jsonwebtoken"

export const register = async(req,res)=>{
    try {
        const {name, email, password,phone_number,gender,age} = req.body
        const hashedPassword = await hash(password,10)
        const user = await Users.create({name,email,password:hashedPassword,phoneNumber,gender,age})
        res.json({success:true, data: user})
    } catch (error) {
        res.json({error:true, message:error.message})
    }
}

export const login = async(req,res)=>{
    try {
        const {email, password} = req.body
        const user = await Users.findOne({email})
        if(!user) throw new Error("User not found")
        const isMatch = await compare(password, user.password)
        if(!isMatch) throw new Error("Invalid credentials")
        const token = jwt.sign({ id: user._id }, secret)
        res.json({success:true, data: {token,id:user._id,name:user.name,email:user.email}})
    } catch (error) {
        res.json({error:true, message:error.message})
    }
}