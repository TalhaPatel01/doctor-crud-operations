import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        specialization:{
            type:String,
            required:true
        },
        phone_number:{
            type:String,
            required:true
        },
        location:{
            type:String,
            required:true
        },
        hospital_name:{
            type:String,
            required:true
        },
        token:{
            type:String,
            default:""
        }
    },{
        timestamps:true
    }
)
const Doctor = mongoose.model("Doctor",doctorSchema);

export default Doctor;