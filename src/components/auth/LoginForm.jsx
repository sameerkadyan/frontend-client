import React from "react";
import { Link } from "react-router-dom";

import "../../style/login.css";

const LoginForm = ({
  form,
  loading,
  handleChange,
  handleLogin,
  role,
}) => {
  return (
    <div className="login-wrapper">
      <div className="login-card">

        {/* TITLE */}
        <h2 className="login-title">
          Welcome Back {role} 👋
        </h2>

        <p className="login-description">
          Login to your account as {role}
        </p>

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          className="login-input"
        />

        {/* PASSWORD */}
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
          className="login-input"
        />

        {/* BUTTON */}
        <button
          className="login-btn"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* REGISTER */}
        <p className="login-footer">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="register-login-btn"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default LoginForm;