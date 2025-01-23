import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { register } from "../services/authService";

const Register = ()=>{
    const [form,setForm] = useState({
        name:"",
        password:"",
        phone_number:""
    })

    const navigate= useNavigate();

    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    const handleSubmit=async(e)=>{
       try{
        e.preventDefault();
        register(form);
        navigate("/login");
       }
       catch(error){
        toast.error.response.data.msg;
       }
    }

    return (
        <div>
            <div>
                <h3>Register Form</h3>
                <form onSubmit={handleSubmit} action="">
                    <div>
                        <input onChange={handleChange} type="text" name="name" id="name" placeholder="Enter Name"/>
                    </div>
                    <div>
                        <input  onChange={handleChange} type="password" name="password" id="password" placeholder="Enter Password"/>
                    </div>
                    <div>
                        <input onChange={handleChange} type="number" name="phone_number" id="phone_number" placeholder="Enter Phone Number"/>
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    )

}

export default Register;