import mongoose from "mongoose";
const ExpertSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    speciality:{
        type: String,
        require:true
    },
    Expertise:{
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