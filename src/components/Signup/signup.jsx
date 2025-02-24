import React from "react";
import "../styles/signup.css"; // Importing the CSS file

const SignUp = () => {
  return (
    <div>
      <div className="head">
        <h2>LUXIDRIVE</h2>
      </div>
      <div className="wrapper">
        <form action="">
          <h1>Register</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Email" required />
            <i className='bx bxs-envelope'></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className='bx bxs-lock-alt'></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Confirm Password" required />
            <i className='bx bxs-lock-alt'></i>
          </div>
          <button type="submit" className="btn">Sign up</button>
          <div className="register-link">
            <p>Already have an account? <a href="/Login">Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
