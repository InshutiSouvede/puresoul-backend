import mongoose from "mongoose";
const ExpertSchema = new mongoose.Schema({
    name:{
        type:String,
        unique: true,
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
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: false
    },
},{timestamps:true})

const Expert = mongoose.model('Expert', ExpertSchema)
export default Expert