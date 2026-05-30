import { Link } from "react-router-dom";

import "../style/navbar.css";

export default function Navbar() {

  return (

    <nav className="navbar">

      <div className="navbar-container">

        {/* LOGO */}
        <div className="logo">
          Sameer Kadyan
        </div>

        {/* RIGHT SIDE */}
        <div className="nav-right">

          {/* LOGIN */}
          <Link to="/login">
            <button className="login-btn">
              Login
            </button>
          </Link>

          {/* STUDENT REGISTER */}
          <Link to="/student/register">
            <button className="register-btn">
              Student Register
            </button>
          </Link>

          {/* TEACHER REGISTER */}
          <Link to="/teacher/register">
            <button className="register-btn">
              Teacher Register
            </button>
          </Link>

        </div>

      </div>

    </nav>
  );
}