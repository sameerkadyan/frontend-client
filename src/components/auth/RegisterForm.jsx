import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";

const RegisterForm = ({ form, handleChange, handleRegister }) => {
  return (
    <div className="register-wrapper">
      <Card title="Create Account 🚀" description="Join us today">

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

        <button className="register-btn" onClick={handleRegister}>
          Register
        </button>

        <p className="register-footer">
          Already have an account?{" "}
          <span>
            <Link className="login-register-btn" to="/login">Login</Link>
          </span>
        </p>

      </Card>
    </div>
  );
};

export default RegisterForm;