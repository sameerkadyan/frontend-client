import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/authApi";

export const useRegister = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const { response, data } = await registerUser(
        form.name,
        form.email,
        form.password
      );

      if (!response.ok) {
        throw new Error(data.message);
      }

      console.log(data);

      localStorage.setItem("verifyEmail", form.email);

      alert(data.message);

      navigate("/verify-otp");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return {
    form,
    handleChange,
    handleRegister,
  };
};