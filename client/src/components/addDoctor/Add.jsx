import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import toast from 'react-hot-toast';

const Add = () => {
    const [doctor, setdoctor] = useState({
        name: "",
        password: "",
        specialization: "",
        phone_number: "",
        location: "",
        hospital_name: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setdoctor({
            ...doctor,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/create', doctor);
            toast.success(response.data.msg);
            navigate('/');
        }
        catch (error) {
            toast.error(error.response.data.msg);
        }
    }

    return (
        <div className='container d-flex justify-content-center align-items-center ' style={{ minHeight: '60vh' }}>
            <div className="card p-5 shadow-lg custom-card" style={{ maxWidth: '600px', width: '100%' }}>
                <h3 className="text-center mb-4">Add Doctor</h3>
                <Link className="btn btn-primary mb-4" to={"/"}>Back</Link>
                <form>
                    <div className="form-group mb-3">
                        <label htmlFor='name'>Name:</label>
                        <input
                            type='text'
                            className='form-control'
                            onChange={handleChange}
                            id='name'
                            name='name'
                            value={doctor.name}
                            placeholder='Enter Name'
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor='password'>Password:</label>
                        <input
                            type='password'
                            className='form-control'
                            onChange={handleChange}
                            id='password'
                            name='password'
                            value={doctor.password}
                            placeholder='Enter Password'
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor='specialization'>Specialization:</label>
                        <input
                            type='text'
                            className='form-control'
                            onChange={handleChange}
                            id='specialization'
                            name='specialization'
                            value={doctor.specialization}
                            placeholder='Enter Specialization'
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor='phone_number'>Phone Number:</label>
                        <input
                            type='text'
                            className='form-control'
                            onChange={handleChange}
                            id='phone_number'
                            name='phone_number'
                            placeholder='Enter Phone Number'
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor='location'>Location:</label>
                        <input
                            type='text'
                            className='form-control'
                            onChange={handleChange}
                            id='location'
                            name='location'
                            value={doctor.location}
                            placeholder='Enter Location'
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor='hospital_name'>Hospital Name:</label>
                        <input
                            type='text'
                            className='form-control'
                            onChange={handleChange}
                            id='hospital_name'
                            name='hospital_name'
                            value={doctor.hospital_name}
                            placeholder='Enter Hospital Name'
                            required
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type='submit'
                            className='btn btn-primary w-100'
                            onClick={handleSubmit}
                        >
                            Add Doctor
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )

}

export default Add;