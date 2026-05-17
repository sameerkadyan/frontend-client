import React from "react";

const ProfileNavbar = ({
  user,
  open,
  setOpen,
  showImage,
  setShowImage,
  fileInputRef,
  handleImageUpload,
  handleLogout,
  loading,
}) => {
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

                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <p className="no-user">No user</p>
        )}
      </div>

      {/* Full Image */}
      {showImage && (
        <div className="image-modal" onClick={() => setShowImage(false)}>
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

export default ProfileNavbar;