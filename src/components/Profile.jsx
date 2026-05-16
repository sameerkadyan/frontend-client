import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authFetch, logout } from "../utils/auth";
import "../style/profile.css";

const Profile = () => {
  const [showImage, setShowImage] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const fileInputRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await authFetch(
          "https://backend-server-arp0.onrender.com/api/auth/profile"
        );

        if (!res.ok) {
          throw new Error("Unauthorized");
        }

        const data = await res.json();

        setUser(data.user);
      } catch (error) {
        console.log(error);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  // Upload profile image
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("profilePhoto", file);

    try {
      const res = await authFetch(
        "https://backend-server-arp0.onrender.com/api/auth/upload-profile",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (res.ok) {
        setUser((prev) => ({
          ...prev,
          profilePhoto: data.profilePhoto,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (loading) return <p className="loading">Loading...</p>;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="logo">Sameer Kadyan</h2>

        {user ? (
          <div className="profile-navbar">
            {/* Avatar */}
            <div
              className="profile-avatar-wrapper"
              onClick={() => setOpen(!open)}
            >
              {user.profilePhoto ? (
                <img
                  src={user.profilePhoto}
                  alt="profile"
                  className="profile-avatar-img"
                />
              ) : (
                <div className="profile-avatar">
                  {user.name.charAt(0)}
                </div>
              )}
            </div>

            {/* Dropdown */}
            {open && (
              <div className="profile-dropdown">
                <div className="dropdown-header">
                  <div className="dropdown-profile">
                    {user.profilePhoto ? (
                      <img
                        src={user.profilePhoto}
                        alt="profile"
                        className="dropdown-avatar"
                        onClick={() => setShowImage(true)}
                      />
                    ) : (
                      <div className="dropdown-avatar fallback-avatar">
                        {user.name.charAt(0)}
                      </div>
                    )}

                    <div>
                      <h4 className="profile-name">{user.name}</h4>
                      <p className="profile-email">{user.email}</p>
                    </div>
                  </div>
                </div>

                {/* Upload Button */}
                <button
                  className="upload-btn"
                  onClick={() => fileInputRef.current.click()}
                >
                  Change Profile Photo
                </button>

                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                />

                <button
                  className="logout-btn"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <p className="no-user">No user</p>
        )}
      </div>

      {/* Full Image Preview */}
      {showImage && (
        <div
          className="image-modal"
          onClick={() => setShowImage(false)}
        >
          <img
            src={user.profilePhoto}
            alt="Full Profile"
            className="full-image"
          />
        </div>
      )}


    </nav>
  );
};

export default Profile;