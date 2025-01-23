import axios from "axios"

export const register = async(doctorData)=>{
    return await axios.post(`http://localhost:3000/api/register`,form);
};