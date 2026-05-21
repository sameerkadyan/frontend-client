import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./layouts/MainLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import VerifyOTP from "./pages/auth/VerifyOTP";

import Profile from "./pages/student/Profile";

import ProtectedRoute from "./components/ProtectedRoute";

import Students from "./pages/student/Students";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Public Routes */}
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/verify-otp"
          element={<VerifyOTP />}
        />

        {/* Protected Routes */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/students"
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