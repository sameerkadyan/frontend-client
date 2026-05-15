import React, { useState } from "react";
import Card from "./Card";
import "../style/contactNewsletter.css";

const ContactNewsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <section className="contact-newsletter">
      <h2 className="section-title">Stay Connected</h2>

      <div className="contact-container">
        
        {/* Newsletter Card */}
        <Card title="Subscribe to our Newsletter">
          <input
            type="email"
            placeholder="Enter your email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn primary" onClick={handleSubmit}>
            Subscribe
          </button>
        </Card>

        {/* Contact Card */}
        <Card title="Contact Us">
          <input type="text" placeholder="Your Name" className="input" />
          <input type="email" placeholder="Your Email" className="input" />
          <textarea placeholder="Your Message" className="input textarea" />

          <button className="btn primary">
            Send Message
          </button>
        </Card>

      </div>
    </section>
  );
};

export default ContactNewsletter;