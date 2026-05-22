import React from "react";
import { Outlet } from "react-router-dom";

import ProfileNavbar from "../components/ProfileNavbar";

const StudentLayout = () => {
  return (
    <div className="student-layout">

      <ProfileNavbar />

      <main className="student-content">
        <Outlet />
      </main>

    </div>
  );
};

export default StudentLayout;