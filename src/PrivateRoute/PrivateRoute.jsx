import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./../Provider/AuthProvider";

/* eslint-disable react/prop-types */

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen ">
        Loading...
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <div>
      <Navigate to="/login"></Navigate>
    </div>
  );
};

export default PrivateRoute;
