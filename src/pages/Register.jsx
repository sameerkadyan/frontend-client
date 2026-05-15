import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Card from "../components/Card";

import "../style/register.css";

const Register = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async () => {

    // Password Match Check
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {

      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: form.name,
            email: form.email,
            password: form.password,
          }),
        }
      );

      const data = await response.json();

      // Check Backend Errors
      if (!response.ok) {
        throw new Error(data.message);
      }

      console.log(data);

      // Save Email for OTP Verification
      localStorage.setItem(
        "verifyEmail",
        form.email
      );

      alert(data.message);

      // Navigate to OTP Page
      navigate("/verify-otp");

    } catch (error) {

      console.log(error);

      alert(error.message);

    }
  };

  return (
    <div className="register-wrapper">

      <Card
        title="Create Account 🚀"
        description="Join us today"
      >

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
          className="register-input"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          className="register-input"
        />

        <input
          type="password"
          name="password"
          placeholder="Create password"
          value={form.password}
          onChange={handleChange}
          className="register-input"
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={form.confirmPassword}
          onChange={handleChange}
          className="register-input"
        />

        <button
          className="register-btn"
          onClick={handleRegister}
        >
          Register
        </button>

        <p className="register-footer">
          Already have an account?
          {" "}
          <span>
            <Link to="/login">
              Login
            </Link>
          </span>
        </p>

      </Card>

    </div>
  );
};

export default Register;