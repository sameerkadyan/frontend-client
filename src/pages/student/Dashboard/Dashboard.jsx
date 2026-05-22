import React from "react";
import "../../../style/dashboard.css";
import DashboardCards from "./DashboardCards";

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