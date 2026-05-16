import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/VerifyOTP.css"

const VerifyOTP = () => {

  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  const email = localStorage.getItem("verifyEmail");

  const handleVerify = async () => {

    try {

      const response = await fetch(
        "https://backend-server-arp0.onrender.com/api/auth/verify-otp",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            email,
            otp
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      alert(data.message);

      navigate("/login");

    } catch (error) {

      alert(error.message);

    }
  };

  return (
    <div className="otp-page">
      <div className="otp-card">

        <div className="otp-logo">
          🔐
        </div>

        <h2>Verify OTP</h2>

        <p className="otp-subtitle">
          Enter the verification code sent to your email
        </p>

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="otp-input"
        />

        <button onClick={handleVerify} className="verify-btn">
          Verify OTP
        </button>

      </div>
    </div>
  );
};

export default VerifyOTP;