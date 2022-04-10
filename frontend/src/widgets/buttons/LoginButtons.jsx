import React, { useState } from "react";
import Button from "./Button";
import { Navigate } from "react-router-dom";

const LoginButtons = () => {
  const [page, setPage] = useState();

  if (page) {
    return <Navigate to={`/${page}`} />;
  }
  return (
    <div>
      <Button onClick={() => setPage("signup")} name={"Sign Up"} />
      <Button onClick={() => setPage("connexion")} name={"Log In"} />
    </div>
  );
};

export default LoginButtons;
