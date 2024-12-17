import Doctor from "../models/doctorModel.js";

export const createDoctor = async (req, res) => {
    try {
        const doctorData = new Doctor(req.body);
        if (!doctorData) {
            res.status(404).json({ msg: "User not found" });
        }
        await doctorData.save();
        res.status(200).json({ msg: "User got created succesfully." });
    }
    catch (error) {
        res.status(500).json({ err: error });
    }
}

export const getAll = async (req, res) => {
    try {
        const doctorData = await Doctor.find();
        if (!doctorData) {
            res.status(404).json({ msg: "User not found" });
        }
        res.status(200).json(doctorData)
    }
    catch (error) {
        res.status(500).json({err:error})
    }
}

export const getOne = async (req,res)=>{
    try{
        const id=req.params.id;
        const doctorData = await Doctor.findById(id);
        if(!doctorData){
            res.status(404).json({msg:"users doesn't exist"});
        }
        res.status(200).json(doctorData);
    }
    catch(error){
        res.status(500).json({err:error});
    }
}

export const updateDoctor = async (req,res)=>{
    try{
        const id=req.params.id;
        const doctorData = await Doctor.findByIdAndUpdate(id,req.body,{new:true});
        if(!doctorData){
            res.status(404).json({msg:"Doctor doesn't exist"});
        }
            res.status(200).json(doctorData);
    }
    catch(error){
        res.status(500).json({err:error});
    }
}

export const deleteDoctor = async (req,res)=>{
    try{
        const id=req.params.id;
        const doctorData = await Doctor.findByIdAndDelete(id);
        if(!doctorData){
            res.status(404).json({msg:"Doctor doesn't exist"});
            }
            res.status(200).json({msg:"Doctor deleted successfully"});
    }
    catch(error){
        res.status(500).json({err:error});
    }
}