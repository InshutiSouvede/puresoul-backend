import { hash } from "bcryptjs";
import Experts from "../models/Expert.js";
import Users from "../models/User.js";
import { sendEmail } from "../utils.js";

export const getAllExperts = async (req, res) => {
  try {
    const experts = await Experts.find().populate({path:"userId",select:'email'});
    res.json({ success: true, data: experts });
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
};

export const getExpertById = async (req, res) => {
  try {
    const id = req.params.id;
    const experts = await Experts.findById(id);
    res.json({ success: true, data: experts });
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
};
export const updateExpert = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, currency } = req.body;
    const expert = await Experts.findByIdAndUpdate(id, { name, currency }, { new: true });
    res.json({success:true, data:expert})
} catch (error) {
    res.json({ error: true, message: error.message });
  }
};
export const createExpert = async(req,res)=>{
    try {
        const {name, specialty, expertise,image} = req.body
        const {gender, age, phoneNumber, email, password} = req.body
        const hashedPassword = await hash(password,10)
        const userExist = await Users.findOne({email})
        
        if(userExist) throw new Error("User with that email already exist");

        const expertUser = await Users.create({name, email, gender, age, phoneNumber, password:hashedPassword, role:"expert"})
        let expert = await Experts.findOne({name})
        
        if(!expert) expert = await Experts.create({name, specialty, expertise,image, updatedAtserId:expertUser._id})
        else{
        expert['userId'] = expertUser._id
        await expert.save()
        }
        
        await sendEmail(expertUser.email,{name,password})
        res.json({success:true, data: {id:expert._id, name:expertUser.name,email,specialty,expertise,image}})
    } catch (error) {
        res.json({error:true, message:error.message})
    }
  }