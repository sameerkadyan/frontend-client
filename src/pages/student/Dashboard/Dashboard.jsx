import React from "react";
import DashboardCards from "./DashboardCard";
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