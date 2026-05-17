import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";

const LoginForm = ({ form, loading, handleChange, handleLogin }) => {
  return (
    <div className="login-wrapper">
      <Card title="Welcome Back 👋" description="Login to your account">

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          className="login-input"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
          className="login-input"
        />

        <button className="login-btn" onClick={handleLogin} disabled={loading}>
          {loading ? "Logging in ..." : "Login"}
        </button>

        <p className="login-footer">
          Don't have an account?{" "}
          <span>
            <Link className="register-login-btn" to="/register">Register</Link>
          </span>
        </p>

      </Card>
    </div>
  );
};

export default LoginForm;