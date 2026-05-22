import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import StudentLayout from "./layouts/StudentLayout";

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

      <Routes>

        {/* Public Layout */}
        <Route element={<MainLayout />}>

        <Route path="/" element={<Home />}/>

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/verify-otp" element={<VerifyOTP />} />

        </Route>

        {/* Student Protected Layout */}
        <Route
          element={
            <ProtectedRoute>
              <StudentLayout />
            </ProtectedRoute>
          }
        >

          <Route
            path="/student/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/student/profile"
            element={<Profile />}
          />

          <Route
            path="/student/students"
            element={<Students />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;