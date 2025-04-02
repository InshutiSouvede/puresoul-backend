import mongoose from "mongoose";
const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        require: true
    },
    author:{
        type: String,
        require:true
    },
    description:{
        type: String,
        require: true
    },
    image:{
        type:String,
        require: true
    },
    path:{
        type:String,
        require: true
    },
},{timestamps:true})

const Book = mongoose.model('Book', BookSchema)
export default Book