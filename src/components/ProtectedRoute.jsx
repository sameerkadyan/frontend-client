import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

  // Check token
  const token = localStorage.getItem("token");

  // Redirect if not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Allow access
  return children;
};

export default ProtectedRoute;