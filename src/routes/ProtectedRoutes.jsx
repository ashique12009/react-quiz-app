import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../auth/auth";

const ProtectedRoutes = () => {
  const auth = isAuthenticated();

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;