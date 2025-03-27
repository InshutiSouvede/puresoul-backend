import mongoose from "mongoose";
const ExpertSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    specialty:{
        type: String,
        require:true
    },
    expertise:{
        type: String,
        require: true
    },
    image:{
        type:String,
        require: true
    }
},{timestamps:true})

const Expert = mongoose.model('Expert', ExpertSchema)
export default Expert