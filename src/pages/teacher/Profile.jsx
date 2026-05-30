import React from "react";
import ProfileNavbar from "../../components/profile/ProfileNavbar";
import { useProfile } from "../../hooks/useProfile";

import "../../style/profile.css";

const Profile = () => {
  const profile = useProfile();

  return <ProfileNavbar {...profile} />;
};

export default Profile;