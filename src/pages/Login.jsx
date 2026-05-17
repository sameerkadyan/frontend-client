// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import Card from "../components/Card";
// import "../style/login.css";

// const Login = () => {

//   const navigate = useNavigate();

  
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async () => {
//     if (!form.email || !form.password) {
//       alert("Please fill all field!");
//       return;
//     }

//     setLoading(true)

//     try {

//       const response = await fetch("https://backend-server-arp0.onrender.com/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: form.email,
//           password: form.password,
//         }),
//       });

//       const data = await response.json();

//       console.log(data);

//       if (response.ok) {
//         alert("Login Successful 🎉");

//         // Optional: store token
//         localStorage.setItem("token", data.token);

//         navigate("/students");


//       } else {
//         alert(data.message || "Login failed ❌");
//       }

//     } catch (error) {
//       console.log(error);
//       alert("Something went wrong!")
//     } finally {
//       setLoading(false)
//     }
//   };

//   return (
//     <div className="login-wrapper">
//       <Card title="Welcome Back 👋" description="Login to your account">

//         <input
//           type="email"
//           name="email"
//           placeholder="Enter your email"
//           value={form.email}
//           onChange={handleChange}
//           className="login-input"
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Enter your password"
//           value={form.password}
//           onChange={handleChange}
//           className="login-input"
//         />

//         <button className="login-btn" onClick={handleLogin} disabled={loading}>
//           {loading ? "Logging in ..." : "Login"}
//         </button>

//         <p className="login-footer">
//           Don't have an account? <span><Link to="/register">Register</Link></span>
//         </p>

//       </Card>
//     </div>
//   );
// };

// export default Login;