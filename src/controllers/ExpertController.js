import Experts from "../models/Expert.js";

export const getAllExperts = async (req, res) => {
  try {
    const experts = await Experts.find();
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
        const {title, description, author,image} = req.body
        const expert = await Experts.create({title, description, author,image})
        res.json({success:true, data: expert})
    } catch (error) {
        res.json({error:true, message:error.message})
    }
  }