import Doctor from "../models/doctorModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const auth = async(req,res,next)=>{
    try {
        const token = req.header("Authorization");
        if(!token){
            return res.status(401).send({message:"Access denied. No token provided."});
        }
        const tokenPart = token.split(" ")[1];
        const verified = jwt.verify(tokenPart ,process.env.JWT_SECRET);
        const doctor = await Doctor.findById(verified.id);
        if(!doctor || doctor.token!==tokenPart){
            return res.status(401).send({message:"Access denied. Invalid token."});
        }
        req.doctor = verified;
        next();
    }   
    catch(error){
        res.status(401).send({message:error.message});
    }
}
export default auth;