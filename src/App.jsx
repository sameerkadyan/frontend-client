import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import VerifyOTP from "./pages/auth/VerifyOTP";

import Dashboard from "./pages/student/Dashboard";
import Profile from "./pages/student/Profile";
import Students from "./pages/student/Students";

import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/verify-otp" element={<VerifyOTP />} />

        {/* Protected Routes */}
        <Route
          path="/student/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/students"
          element={
            <ProtectedRoute>
              <Students />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;