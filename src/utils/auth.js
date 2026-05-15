// ==============================
// AUTH UTILITY (JWT BASED)
// ==============================

// 🔐 Get Token
export const getToken = () => {
  return localStorage.getItem("token");
};

// 💾 Save Token
export const setToken = (token) => {
  localStorage.setItem("token", token);
};

// 🚪 Logout
export const logout = () => {
  localStorage.removeItem("token");
};

// ✅ Check if logged in
export const isLoggedIn = () => {
  return !!getToken();
};

// 📦 Get Auth Header
export const getAuthHeader = () => {
  const token = getToken();

  if (!token) return {};

  return {
    Authorization: `Bearer ${token}`,
  };
};

// 🔄 Auth Fetch (attach token automatically)
export const authFetch = async (url, options = {}) => {

  const headers = {
    ...getAuthHeader(),
    ...options.headers,
  };

  // Only add JSON content-type if NOT FormData
  if (!(options.body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  return response;
};