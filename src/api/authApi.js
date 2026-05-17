export const loginUser = async (email, password) => {
  const response = await fetch("https://backend-server-arp0.onrender.com/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  return { response, data };
};