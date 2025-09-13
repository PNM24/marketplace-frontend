import React from "react";
import { Navigate } from "react-router-dom";
import { getUser } from "../utils/auth";

// Wrapper pentru rute protejate
function PrivateRoute({ children }) {
  const user = getUser();

  if (!user) {
    // dacă nu există user --> redirect la login
    return <Navigate to="/login" replace />;
  }

  // dacă e logat --> poate accesa componenta
  return children;
}

export default PrivateRoute;