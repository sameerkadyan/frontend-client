import React from "react";
import RegisterForm from "../../components/auth/RegisterForm";
import { useRegister } from "../../hooks/useRegister";

import "../../style/register.css";

const Register = () => {
  const { form, handleChange, handleRegister } = useRegister();

  return (
    <RegisterForm
      form={form}
      handleChange={handleChange}
      handleRegister={handleRegister}
    />
  );
};

export default Register;