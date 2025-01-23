import React,{useState,useEffect} from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import {Link} from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Doctor= ()=>{
    const [doctors,setDoctors]=useState([]);

    useEffect(()=>{
        const fetchData  = async()=>{
            try{
                const response = await axios.get('http://localhost:3000/api/all');
                toast.success("Data fetched successfully");
                setDoctors(response.data);
            }
            catch(error){
                console.error("Error in fetching the data",error);
                
                    if(error.response?.status === 401){
                        toast.error("You are not authorized to view this page",{
                            position: 'top-right'
                        });
                    }
                    else{
                        toast.error("Something went wrong",{
                        position: 'top-right',
                        });
                    }
                
            }
        };
        fetchData();
    },[]);

    const deleteDoctor = async (id)=>{
        try{
        await axios.delete(`http://localhost:3000/api/delete/${id}`);
        setDoctors(doctors.filter((doctor)=>doctor._id !== id));
        toast.success("Doctor deleted successfully");
    }
        catch(error){
            toast.error("Failed to delete the doctor");
        }
    };

    return(
        <div className="card card-body shadow p-3 mb-5 bg-white rounded">
            <div className="p-0">
                <h1>Doctor List</h1>
                <div className="p-2">
                <Link className='btn btn-dark' to={'/add'}>Add Doctor</Link>
                </div>
            </div>
            <div>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">Sr.No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Specialization</th>
                            <th scope="col">Phone_no</th>
                            <th scope="col">Location</th>
                            <th scope="col">Hospital Name</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doctor,index)=>(
                            <tr key={doctor._id}>
                                <td>{index+1}</td>
                                <td>{doctor.name}</td>
                                <td>{doctor.specialization}</td>
                                <td>{doctor.phone_number}</td>
                                <td>{doctor.location}</td>
                                <td>{doctor.hospital_name}</td>
                                <td>
                                    <Link className='btn btn-primary m-1' to={`/edit/${doctor._id}`}>Edit</Link>
                                    <button className="btn btn-danger m-1" onClick={()=>deleteDoctor(doctor._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                        {doctors.length === 0 && (
                            <tr>
                                <td colSpan="7">No doctors found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Doctor;