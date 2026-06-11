import { authFetch, getRole, getToken } from "../utils/auth";

export const getProfile = async () => {
  const role = getRole();

  const endpoint =
    role === "teacher"
      ? "/api/teachers/profile"
      : "/api/students/profile";

  return authFetch(
    `https://backend-server-arp0.onrender.com${endpoint}`,
    {
      method: "GET",
    }
  );
};

export const uploadProfilePhoto = async (file) => {

  const token = localStorage.getItem("token");

  const formData = new FormData();

  formData.append("profilePhoto", file);

  return fetch(
    "https://backend-server-arp0.onrender.com/api/students/upload-profile",
    {
      method: "POST",

      headers: {
        Authorization: `Bearer ${token}`,
      },

      body: formData,
    }
  );
};