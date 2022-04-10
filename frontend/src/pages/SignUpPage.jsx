import React from "react";
import { Navigate } from "react-router-dom";
import SignUpForm from "../widgets/forms/SignUpForm";

const SignUpPage = () => {
  if (
    sessionStorage.getItem("userToken") &&
    sessionStorage.getItem("userToken") !== undefined
  ) {
    return <Navigate to="/" />;
  }
  return <SignUpForm />;
};

export default SignUpPage;
