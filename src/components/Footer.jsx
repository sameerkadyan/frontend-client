import React from "react";
import "../style/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo / About */}
        <div className="footer-section">
          <h2 className="logo">MyWebsite</h2>
          <p>
            Ye website meri yogayata darshane ke liye ye mere sabhi dosto ke liye free hai.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@mywebsite.com</p>
          <p>Phone: +91 8865818074</p>
          <p>Location: India</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">🌐</a>
            <a href="#">📘</a>
            <a href="#">🐦</a>
            <a href="#">📸</a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 MyWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;