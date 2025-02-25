import React, { useState } from "react";
import "../styles/log.css";
import { useNavigate } from 'react-router';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const Login = () => {
  const navigate = useNavigate();

  // State for handling form inputs
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // State for errors and loading
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validate form data
  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) return;

    try {
      setIsLoading(true);

      console.log("Sending data:", formData); // Debugging

      // Ensure the correct backend URL and port
      const response = await axios.post("http://localhost:5000/user/login", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Login successful:", response.data);

      // Display success toast
      toast.success("Login successful!");

      // If successful, navigate to dashboard or home
      setTimeout(() => {
        navigate("/");
      }, 2000); // Delay navigation to allow the toast to be visible
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);

      // Handle server-side errors
      setErrors((prev) => ({
        ...prev,
        serverError: error.response?.data?.error || "Login failed. Please try again.",
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="head">
        <h2>LUXIDRIVE</h2>
      </div>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              name="username"
              value={formData.username}
              placeholder="Username"
              onChange={handleChange}
              required
            />
            {/* <i className='bx bxs-user'></i> */}
            {errors.username && <p className="error-message">{errors.username}</p>}
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="Password"
              onChange={handleChange}
              required
            />
            {/* <i className='bx bxs-lock-alt'></i> */}
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>
          {errors.serverError && <p className="error-message">{errors.serverError}</p>}
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />Remember Me
            </label>
          </div>
          <button type="submit" className="btn" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
          <div className="register-link">
            <p>
              Don't have an account? <a href="/signup">Register</a>
            </p>
          </div>
        </form>
      </div>
      <ToastContainer /> {/* Add ToastContainer to render toasts */}
    </div>
  );
};

export default Login;
