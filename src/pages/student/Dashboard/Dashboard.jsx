import React from "react";
import DashboardCards from "./DashboardCard";
// import ProfileNavbar from "../../../components/profile/ProfileNavbar";
import "../../../style/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <h1>Student Dashboard</h1>
        <p>Welcome back 👋</p>
      </div>

      <DashboardCards />

    </div>
  );
};

export default Dashboard;