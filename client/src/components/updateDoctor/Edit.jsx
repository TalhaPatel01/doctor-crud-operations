import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Edit = () => {
    const [doctor, setDoctor] = useState({
        name: "",
        password: "",
        specialization: "",
        phone_number: "",
        location: "",
        hospital_name: "",
    });

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/getone/${id}`);
                setDoctor(response.data);
                toast.success("Data fetched successfully");
            }
            catch (error) {
                const message = error.response?.data?.msg || "Failed to fetch the data";
                toast.error(message);
            }
        };
        fetchData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDoctor({
            ...doctor,
            [name]: value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/api/update/${id}`, doctor)
            toast.success("Doctor updated successfully");
            navigate('/');
        }
        catch (error) {
            const message = error.response?.data?.msg || "Failed to update the doctor";
            toast.error(message);
        };
    }

    return (
        <div className="container d-flex justify-content-center align-items-center py-5" style={{ minHeight: '60vh' }}>
            <div className="card p-5 shadow-lg" style={{ maxWidth: '600px', width: '100%' }}>
                <h3 className="text-center mb-4">Edit Doctor</h3>
                <Link className="btn btn-primary mb-4" to={"/"}>Back</Link>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={handleChange}
                            id="name"
                            name="name"
                            value={doctor.name}
                            placeholder="Enter Name"
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            onChange={handleChange}
                            id="password"
                            name="password"
                            value={doctor.password}
                            placeholder="Enter Password"
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="specialization">Specialization:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={handleChange}
                            id="specialization"
                            name="specialization"
                            value={doctor.specialization}
                            placeholder="Enter Specialization"
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="phone_number">Phone Number:</label>
                        <input
                            type="number"
                            className="form-control"
                            onChange={handleChange}
                            id="phone_number"
                            name="phone_number"
                            value={doctor.phone_number}
                            placeholder="Enter Phone Number"
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="location">Location:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={handleChange}
                            id="location"
                            name="location"
                            value={doctor.location}
                            placeholder="Enter Location"
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="hospital_name">Hospital Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={handleChange}
                            id="hospital_name"
                            name="hospital_name"
                            value={doctor.hospital_name}
                            placeholder="Enter Hospital Name"
                            required
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Edit;