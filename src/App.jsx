import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/auth/Login";

import StudentRegister
from "./pages/student/StudentRegister";

import TeacherRegister
from "./pages/teacher/TeacherRegister";

import VerifyOTP
from "./pages/auth/VerifyOTP";

import StudentLayout
from "./layouts/StudentLayout";

import TeacherLayout
from "./layouts/TeacherLayout";

import ProtectedRoute
from "./components/ProtectedRoute";

import Home from "./pages/Home";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* STUDENT REGISTER */}
        <Route
          path="/student/register"
          element={<StudentRegister />}
        />

        {/* TEACHER REGISTER */}
        <Route
          path="/teacher/register"
          element={<TeacherRegister />}
        />

        {/* VERIFY OTP */}
        <Route
          path="/verify-otp"
          element={<VerifyOTP />}
        />

        {/* STUDENT DASHBOARD */}
        <Route
          path="/student"
          element={
            <ProtectedRoute>
              <StudentLayout />
            </ProtectedRoute>
          }
        />

        {/* TEACHER DASHBOARD */}
        <Route
          path="/teacher"
          element={
            <ProtectedRoute>
              <TeacherLayout />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;