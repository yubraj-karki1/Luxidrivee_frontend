import React, { useState } from "react";
import "../Styles/booking.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickup: "",
    destination: "",
    date: "",
    time: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details:", formData);
    alert("Booking Successful!");
  };

  return (
    <div className="container">
      <h1>LUXIDRIVE</h1>
      <form id="bookingForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="pickup">Pickup Location:</label>
          <input type="text" id="pickup" name="pickup" required value={formData.pickup} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="destination">Destination:</label>
          <input type="text" id="destination" name="destination" required value={formData.destination} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="date">Booking Date:</label>
          <input type="date" id="date" name="date" required value={formData.date} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="time">Booking Time:</label>
          <input type="time" id="time" name="time" required value={formData.time} onChange={handleChange} />
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
