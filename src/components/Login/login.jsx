import React from "react";
import "../styles/log.css";

const login = () => {
  return (
    <div>
      <div className="head">
        <h2>LUXIDRIVE</h2>
      </div>
      <div className="wrapper">
        <form>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            {/* <i className='bx bxs-user'></i> */}
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            {/* <i className='bx bxs-lock-alt'></i> */}
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />Remember Me
            </label>
          </div>
          <button type="submit" className="btn">Login</button>
          <div className="register-link">
            <p>
              Don't have an account? <a href="/signup">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;
