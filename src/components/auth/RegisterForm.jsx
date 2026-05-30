import React from "react";
import { Link } from "react-router-dom";

import "../../style/register.css";

const RegisterForm = ({
  form,
  handleChange,
  handleRegister,
  role,
}) => {

  return (
    <div className="register-wrapper">

      <div className="register-card">

        {/* TITLE */}
        <h2 className="register-title">
          Create {role} Account 🚀
        </h2>

        <p className="register-description">
          Join as a {role}
        </p>

        {/* NAME */}
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
          className="register-input"
        />

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          className="register-input"
        />

        {/* PASSWORD */}
        <input
          type="password"
          name="password"
          placeholder="Create password"
          value={form.password}
          onChange={handleChange}
          className="register-input"
        />

        {/* CONFIRM PASSWORD */}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={form.confirmPassword}
          onChange={handleChange}
          className="register-input"
        />

        {/* BUTTON */}
        <button
          className="register-btn"
          onClick={handleRegister}
        >
          Register as {role}
        </button>

        {/* LOGIN */}
        <p className="register-footer">
          Already have an account?{" "}

          <Link
            to="/login"
            className="login-register-btn"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
};

export default RegisterForm;