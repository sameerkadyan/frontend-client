// ==============================
// AUTH UTILITY (JWT BASED)
// ==============================
export const setAuth = (token, role) => {
  localStorage.setItem("token", token);
  localStorage.setItem("role", role);
};


// 🔐 Get Token
export const getToken = () => {
  return localStorage.getItem("token");
};
export const getRole = () => {
  return localStorage.getItem("role");
}

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
}


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

  console.log("URL:", url);
  console.log("TOKEN:", getToken());
  console.log("ROLE:", getRole());
  console.log("HEADERS:", headers);

  // Only add JSON content-type if NOT FormData
  if (!(options.body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  console.log("STATUS:", response.status);

  return response;
};