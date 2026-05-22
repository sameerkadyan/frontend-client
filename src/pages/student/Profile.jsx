import React from "react";
import { useProfile } from "../../hooks/useProfile";

import "../../style/profile.css";

const Profile = () => {
  const profile = useProfile();

  return (
    <div className="profile-page">
      <h1>Profile Page</h1>
    </div>
  );
};

export default Profile;