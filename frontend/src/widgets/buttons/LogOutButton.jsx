import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Button from "./Button";

const LogOutButton = () => {
  const [redirect, setRedirect] = useState(false);

  const handleLogOut = () => {
    sessionStorage.removeItem("userToken");
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/" />;
  }
  return <Button onClick={() => handleLogOut()} name="Log Out" />;
};

export default LogOutButton;
