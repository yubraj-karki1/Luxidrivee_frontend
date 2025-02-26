import React, { useState } from 'react';
import '../styles/AddVehicle.css';

const AddVehicle = ({ onAdd }) => {
  const [vehicle, setVehicle] = useState({ img: '', title: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle({ ...vehicle, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(vehicle);
    setVehicle({ img: '', title: '' });
  };

  return (
    <form className="add-vehicle-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="img"
        value={vehicle.img}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />
      <input
        type="text"
        name="title"
        value={vehicle.title}
        onChange={handleChange}
        placeholder="Vehicle Title"
        required
      />
      <button type="submit" className="btn">Add Vehicle</button>
    </form>
  );
};

export default AddVehicle;
