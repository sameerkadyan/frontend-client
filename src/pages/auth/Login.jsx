import React from "react";
import LoginForm from "../../components/auth/LoginForm";
import { useLogin } from "../../hooks/useLogin";
import ".../style/Login.css"

const Login = () => {
  const { form, loading, handleChange, handleLogin } = useLogin();

  return (
    <LoginForm
      form={form}
      loading={loading}
      handleChange={handleChange}
      handleLogin={handleLogin}
    />
  );
};

export default Login;