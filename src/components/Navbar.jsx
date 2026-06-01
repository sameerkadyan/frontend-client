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

          {/* LOGIN DROPDOWN */}
          <div className="dropdown">
            <button className="dropdown-btn">
              Login ▾
            </button>

            <div className="dropdown-content">
              <Link to="/student/login">Student Login</Link>
              <Link to="/teacher/login">Teacher Login</Link>
            </div>
          </div>

          {/* REGISTER DROPDOWN */}
          <div className="dropdown">
            <button className="dropdown-btn register">
              Register ▾
            </button>

            <div className="dropdown-content">
              <Link to="/student/register">Student Register</Link>
              <Link to="/teacher/register">Teacher Register</Link>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}