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
    const { name, currency } = req.body;
    const user = await Users.findByIdAndUpdate(id, { name, currency }, { new: true });
    res.json({success:true, data:user})
} catch (error) {
    res.json({ error: true, message: error.message });
  }
};
