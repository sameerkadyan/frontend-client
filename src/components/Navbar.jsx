import { Link } from "react-router-dom";
import "../style/navbar.css";

export default function Navbar() {

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="logo">Sameer kadyan</div>

        <div className="nav-right">

          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>


          <Link to="/register">
            <button className="register-btn">Register</button>
          </Link>

        </div>
      </div>
    </nav>
  );
}