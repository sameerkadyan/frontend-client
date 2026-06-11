import React from "react";
import "../../style/teacherDashboard.css";

const TeacherDashboard = () => {
  const stats = [
    { title: "Students", value: "245" },
    { title: "Classes", value: "12" },
    { title: "Assignments", value: "34" },
    { title: "Attendance", value: "92%" },
  ];

  const upcomingClasses = [
    {
      subject: "Mathematics",
      className: "Grade 10-A",
      time: "09:00 AM",
    },
    {
      subject: "Science",
      className: "Grade 9-B",
      time: "11:00 AM",
    },
    {
      subject: "Physics",
      className: "Grade 12-C",
      time: "02:00 PM",
    },
  ];

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">Teacher Portal</div>

        <nav>
          <ul>
            <li className="active">Dashboard</li>
            <li>Students</li>
            <li>Classes</li>
            <li>Assignments</li>
            <li>Attendance</li>
            <li>Grades</li>
            <li>Settings</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <div>
            <h1>Teacher Dashboard</h1>
            <p>Welcome back, Ms. Johnson 👋</p>
          </div>

          <div className="profile">
            <img
              src="https://i.pravatar.cc/100"
              alt="Teacher"
            />
          </div>
        </header>

        {/* Stats Cards */}
        <section className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="card stat-card">
              <h3>{stat.title}</h3>
              <h2>{stat.value}</h2>
            </div>
          ))}
        </section>

        {/* Content Grid */}
        <section className="content-grid">
          <div className="card">
            <h2>Upcoming Classes</h2>

            <table>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Class</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {upcomingClasses.map((item, index) => (
                  <tr key={index}>
                    <td>{item.subject}</td>
                    <td>{item.className}</td>
                    <td>{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card">
            <h2>Announcements</h2>
            <ul className="announcement-list">
              <li>📢 Staff meeting on Friday at 4 PM.</li>
              <li>📚 Mid-term exams begin next week.</li>
              <li>🎉 Science fair registrations are open.</li>
              <li>📝 Submit attendance reports by Friday.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TeacherDashboard;