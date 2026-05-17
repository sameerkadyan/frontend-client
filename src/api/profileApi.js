export const getProfile = async () => {

  const token = localStorage.getItem("token");

  return fetch(
    "https://backend-server-arp0.onrender.com/api/auth/profile",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const uploadProfilePhoto = async (file) => {

  const token = localStorage.getItem("token");

  const formData = new FormData();

  formData.append("profilePhoto", file);

  return fetch(
    "https://backend-server-arp0.onrender.com/api/auth/upload-profile",
    {
      method: "POST",

      headers: {
        Authorization: `Bearer ${token}`,
      },

      body: formData,
    }
  );
};