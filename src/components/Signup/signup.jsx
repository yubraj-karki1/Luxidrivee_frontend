import React, { useState } from "react";
import "../styles/signup.css"; // Importing the CSS file
import { useNavigate } from 'react-router';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const SERVER_ROOT = import.meta.env.VITE_SERVER_ROOT;

const SignUp = () => {
  const navigate = useNavigate();

  // State for handling form inputs
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
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
      const response = await axios.post("http://localhost:5000/user/signup", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Signup successful:", response.data);

      // Display success toast
      toast.success("Signup successful!");

      // If successful, navigate to login or dashboard
      setTimeout(() => {
        navigate("/login");
      }, 2000); // Delay navigation to allow the toast to be visible
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);

      // Handle server-side errors
      setErrors((prev) => ({
        ...prev,
        serverError: error.response?.data?.error || "Signup failed. Please try again.",
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
          <h1>Register</h1>
          
          <div className="input-box">
            <input
              type="text"
              name="username"
              value={formData.username}
              placeholder="Username"
              onChange={handleChange}
              required
            />
            <i className="bx bxs-user"></i>
            {errors.username && <p className="error-message">{errors.username}</p>}
          </div>

          <div className="input-box">
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <i className="bx bxs-envelope"></i>
            {errors.email && <p className="error-message">{errors.email}</p>}
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
            <i className="bx bxs-lock-alt"></i>
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>

          <div className="input-box">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              placeholder="Confirm Password"
              onChange={handleChange}
              required
            />
            <i className="bx bxs-lock-alt"></i>
            {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
          </div>

          {errors.serverError && <p className="error-message">{errors.serverError}</p>}

          <button type="submit" className="btn" disabled={isLoading}>
            {isLoading ? "Signing up..." : "Sign up"}
          </button>

          <div className="register-link">
            <p>Already have an account? <a href="/Login">Login</a></p>
          </div>
        </form>
      </div>
      <ToastContainer /> {/* Add ToastContainer to render toasts */}
    </div>
  );
};

export default SignUp;
