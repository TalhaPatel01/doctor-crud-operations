import Doctor from "../models/doctorModel.js";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();

export const createDoctor = async (req, res) => {
    try {
        const doctorData = new Doctor(req.body);
        if (!doctorData) {
            res.status(404).json({ msg: "User not found" });
        }
        await doctorData.save();
        res.status(200).json({ msg: "Doctor got created succesfully." });
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
        res.status(500).json({ err: error })
    }
}

export const getOne = async (req, res) => {
    try {
        const id = req.params.id;
        const doctorData = await Doctor.findById(id);
        if (!doctorData) {
            res.status(404).json({ msg: "users doesn't exist" });
        }
        res.status(200).json(doctorData);
    }
    catch (error) {
        res.status(500).json({ err: error });
    }
}

export const updateDoctor = async (req, res) => {
    try {
        const id = req.params.id;
        const doctorData = await Doctor.findByIdAndUpdate(id, req.body, { new: true });
        if (!doctorData) {
            res.status(404).json({ msg: "Doctor doesn't exist" });
        }
        res.status(200).json(doctorData);
    }
    catch (error) {
        res.status(500).json({ err: error });
    }
}

export const deleteDoctor = async (req, res) => {
    try {
        const id = req.params.id;
        const doctorData = await Doctor.findByIdAndDelete(id);
        if (!doctorData) {
            res.status(404).json({ msg: "Doctor doesn't exist" });
        }
        res.status(200).json({ msg: "Doctor deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ err: error });
    }
}

export const register = async (req, res) => {
    try {
        const { name, password, specialization, phone_number, location, hospital_name } = req.body;
        if (!name || !password || !specialization || !phone_number || !location || !hospital_name) {
            res.status(404).json({ message: "All fields are required" });
        }
        //hashing the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newDoctor = Doctor({ name, password: hashedPassword, specialization, phone_number, location, hospital_name });
        await newDoctor.save();
        res.status(200).json({ message: "Doctor registered succesfully" });
    }
    catch (error) {
        res.status(500).json({ err: error });
    }
}

export const login = async (req, res) => {
    try {
        const { name, password } = req.body;

        if (!name || !password) {
            res.status(404).json({ message: "All fields are required" });
        }

        const doctor = await Doctor.findOne({ name });
        if (!doctor) {
            res.status(404).json({ message: "Doctor doesn't exist" });
        }

        const isMatch = await bcrypt.compare(password, doctor.password);
        if (!isMatch) {
            res.status(401).json({message:"Invalid Credentials"});
        }

        const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || "1h" });
        doctor.token = token;
        await doctor.save();

        res.status(200).json({
            token, doctor: {
                id: doctor._id,
                name: doctor.name,
                specialization: doctor.specialization,
                phone_number: doctor.phone_number,
                location: doctor.location,
                hospital_name: doctor.hospital_name
            }
        });

    }
    catch (error) {
        res.status(401).json({message:error.message});
    }
}

export const logout = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.doctor._id);
        if(!doctor){
            res.status(404).json({message:"Doctor doesn't exist"});
        }
        doctor.token = "";
        await doctor.save();

        res.status(200).json({message:"Doctor logged out successfully"});
    }
    catch (error) {
        res.status(500).json({message:error.message});
    }
}   