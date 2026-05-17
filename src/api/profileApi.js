export const getProfile = async () => {
  return fetch(
    "https://backend-server-arp0.onrender.com/api/auth/profile"
  );
};

export const uploadProfilePhoto = async (file) => {
  const formData = new FormData();
  formData.append("profilePhoto", file);

  return fetch(
    "https://backend-server-arp0.onrender.com/api/auth/upload-profile",
    {
      method: "POST",
      body: formData,
    }
  );
};