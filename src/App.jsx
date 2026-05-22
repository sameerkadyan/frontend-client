import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
// import ProfileNavbar from "./components/profile/ProfileNavbar";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import VerifyOTP from "./pages/auth/VerifyOTP";
import StudentLayout from "./layouts/StudentLayout";

// import Dashboard from "./pages/student/Dashboard";
// import Profile from "./pages/student/Profile";
// import Students from "./pages/student/Students";

import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";

return App()(
  <BrowserRouter>
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="verify-otp" element={<VerifyOTP />} />

      <Route
      path="/students"
      element={
        <ProtectedRoute>

        </ProtectedRoute>
      }
      />


    </Router>
  </BrowserRouter>
);

export default App;