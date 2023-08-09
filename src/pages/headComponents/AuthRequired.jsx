import { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { auth } from "../../firebase";
import { UserAuth } from "../../context/AuthContext";

function AuthRequired() {
  // const navigate = useNavigate();
  const { user } = UserAuth();

  // if not send to login
  if (!user) {
    // navigate("/login");
    return (
      <Navigate to="/login" state={{ message: "You must login first!" }} />
    );
  }
  return <Outlet />;
  // if auth render home
}

export default AuthRequired;
