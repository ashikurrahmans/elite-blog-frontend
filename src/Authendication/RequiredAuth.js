import React, { useContext } from "react";
import { toast } from "react-toastify";
import { Navigate, useLocation } from "react-router-dom";

const RequiredAuth = ({ children }) => {

    let location = useLocation();
    const {user} = useContext()

    if (!user) {
        return <Navigate to="hello/dashboards/login" state={{ from: location }} replace />;
      }

  return children;
};

export default RequiredAuth;
