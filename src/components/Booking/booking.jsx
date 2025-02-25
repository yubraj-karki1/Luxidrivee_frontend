import React, { useState } from "react";
import "../Styles/book.css";
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import axios from "axios";

const Booking = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        people: "",
        pickUpTime: "",
        dropTime: "",
        phoneNumber: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Booking Details:", formData);

        try {
            // Ensure the correct backend URL and port
            const response = await axios.post("http://localhost:5000/booking/create", formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            console.log("Booking successful:", response.data);

            // Display success toast
            toast.success("Booking submitted successfully!");

            // Reset form data
            setFormData({
                name: "",
                email: "",
                people: "",
                pickUpTime: "",
                dropTime: "",
                phoneNumber: ""
            });
        } catch (error) {
            console.error("Booking error:", error.response?.data || error.message);

            // Display error toast
            toast.error("Failed to submit booking. Please try again.");
        }
    };

    return (
        <div className="main_bg">
            <div className="form">
                <div className="form-text">
                    <h1>
                        <span><img src="art-1.png" alt="" /></span>
                        Book Now
                        <span><img src="art-1.png" alt="" /></span>
                    </h1>
                    <p>Your ride, your way – fast, safe, and hassle-free!</p>
                </div>
                <div className="main-form">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <span>Your full name?</span>
                            <input type="text" name="name" placeholder="Write your name here..." required value={formData.name} onChange={handleChange} />
                        </div>
                        <div>
                            <span>Your email address?</span>
                            <input type="email" name="email" placeholder="Write your email here..." required value={formData.email} onChange={handleChange} />
                        </div>
                        <div>
                            <span>How many people?</span>
                            <select name="people" required value={formData.people} onChange={handleChange}>
                                <option value="">---People---</option>
                                <option value="1">1 Person</option>
                                <option value="2">2 People</option>
                                <option value="3">3 People</option>
                                <option value="4">4 People</option>
                            </select>
                        </div>
                        <div>
                            <span>Pick Up Time?</span>
                            <input type="text" name="pickUpTime" placeholder="Time" required value={formData.pickUpTime} onChange={handleChange} />
                        </div>
                        <div>
                            <span>Drop Time?</span>
                            <input type="text" name="dropTime" placeholder="Time" required value={formData.dropTime} onChange={handleChange} />
                        </div>
                        <div>
                            <span>Your phone number?</span>
                            <input type="number" name="phoneNumber" placeholder="Write your number here..." required value={formData.phoneNumber} onChange={handleChange} />
                        </div>
                        <div id="submit">
                            <input type="submit" value="SUBMIT" />
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer /> {/* Add ToastContainer to render toasts */}
        </div>
    );
};

export default Booking;
