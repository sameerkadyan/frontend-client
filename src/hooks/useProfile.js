import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authFetch, logout } from "../utils/auth";
import { getProfile, uploadProfilePhoto } from "../api/profileApi";

export const useProfile = () => {
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
          await getProfile()
        );

        if (!res.ok) throw new Error("Unauthorized");

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

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const res = await authFetch(
        await uploadProfilePhoto(file)
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

  return {
    user,
    loading,
    open,
    setOpen,
    showImage,
    setShowImage,
    fileInputRef,
    handleImageUpload,
    handleLogout,
  };
};