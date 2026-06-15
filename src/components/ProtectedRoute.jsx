import { Navigate } from "react-router-dom";
import { getToken, getRole } from "../utils/auth";

const ProtectedRoute = ({ children, allowedRole }) => {
  const token = getToken();
  const role = getRole();

  if (!token) {
    return <Navigate to="/" replace />;
  }

  if (allowedRole && role !== allowedRole) {
    return role === "teacher"
      ? <Navigate to="/teacher" replace />
      : <Navigate to="/student" replace />;
  }

  return children;
};

export default ProtectedRoute;