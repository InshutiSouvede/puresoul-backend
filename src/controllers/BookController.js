import Books from "../models/Book.js";

export const getAllBooks = async (req, res) => {
  try {
    const books = await Books.find();
    res.json({ success: true, data: books });
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
};

export const getBookById = async (req, res) => {
  try {
    const id = req.params.id;
    const books = await Books.findById(id);
    res.json({ success: true, data: books });
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
};
export const updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, currency } = req.body;
    const book = await Books.findByIdAndUpdate(id, { name, currency }, { new: true });
    res.json({success:true, data:book})
} catch (error) {
    res.json({ error: true, message: error.message });
  }
};
