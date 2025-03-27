import Users from "../models/User.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.json({ success: true, data: users });
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const users = await Users.findById(id);
    res.json({ success: true, data: users });
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
};
export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, phoneNumber, gender, age } = req.body;
    const user = await Users.findByIdAndUpdate(id, { name, age, gender, phoneNumber}, { new: true });
    res.json({success:true, data:user})
} catch (error) {
    res.json({ error: true, message: error.message });
  }
};
