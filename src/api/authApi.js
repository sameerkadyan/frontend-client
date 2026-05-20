export const loginUser = async (email, password) => {
  const response = await fetch("https://backend-server-arp0.onrender.com/api/auth/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  return { response, data };
};



// Register API


export const registerUser = async (name, email, password) => {
  const response = await fetch(
    "https://backend-server-arp0.onrender.com/api/auth/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    }
  );

  const data = await response.json();

  return { response, data };
};