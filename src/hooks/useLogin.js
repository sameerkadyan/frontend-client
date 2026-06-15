import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";
import { setAuth } from "../utils/auth";

export const useLogin = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async () => {
    if (!form.email || !form.password) {
      alert("Please fill all fields!");
      return;
    }

    setLoading(true);

    try {
      const { response, data } = await loginUser(
        form.email,
        form.password
      );

      console.log("Login Response:", data);

      if (!response.ok) {
        alert(data?.message || "Login failed ❌");
        return;
      }

      // Adjust this if your API structure is different
      const token = data?.data?.token;
      const role = data?.data?.role;

      console.log("Token:", token);
      console.log("Role:", role);

      if (!token || !role) {
        alert("Invalid login response from server");
        return;
      }

      // Save authentication data
      setAuth(token, role);

      alert("Login Successful 🎉");

      // Navigate based on actual user role
      if (role === "teacher") {
        navigate("/teacher");
      } else if (role === "student") {
        navigate("/student");
      } else {
        navigate("/");
      }

    } catch (error) {
      console.error("Login Error:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    loading,
    handleChange,
    handleLogin,
  };
};