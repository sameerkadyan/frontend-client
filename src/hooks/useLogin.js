import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";
import { setToken } from "../utils/auth";

export const useLogin = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    if (!form.email || !form.password) {
      alert("Please fill all field!");
      return;
    }

    setLoading(true);

    try {
      const { response, data } = await loginUser(form.email, form.password);

      console.log(data);

      if (response.ok) {
        alert("Login Successful 🎉");

        // localStorage.setItem("token", data.token);
        setToken(data.data.token);

        navigate("/students");
      } else {
        alert(data.message || "Login failed ❌");
      }
    } catch (error) {
      console.log(error);
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