import React from 'react';
import './App.css';  // Importing global CSS
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from './components/Dashboard/Header';  // Importing Header component
import Login from './components/Login/login';
import SignUp from './components/signup/signup';
import Booking from './components/Booking/booking';
// import AddVehicle from './AddVehicles/AddVehicle';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Header />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path='/Booking' element={<Booking/>}/>
          {/* <Route path='/AddVehicle' element={<AddVehicle/>}/> */}

          
        </Routes>
      </Router>
    </>
  )
}

export default App;
