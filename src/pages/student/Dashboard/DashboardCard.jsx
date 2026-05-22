import React from "react";

const dashboardData = [
  {
    title: "Enrolled Courses",
    value: 6,
  },
  {
    title: "Assignments",
    value: 12,
  },
  {
    title: "Completed Courses",
    value: 3,
  },
  {
    title: "Quiz Score",
    value: "85%",
  },
];

const DashboardCards = () => {
  return (
    <div className="dashboard-cards">

      {dashboardData.map((item, index) => (
        <div className="dashboard-card" key={index}>

          <h3>{item.title}</h3>

          <p>{item.value}</p>

        </div>
      ))}

    </div>
  );
};

export default DashboardCards;