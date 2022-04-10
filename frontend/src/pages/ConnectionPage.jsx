import React from "react";
import ConnectionForm from "./../widgets/forms/ConnectionForm";
import { Link } from "react-router-dom";

const ConnectionPage = () => {
  return (
    <>
      <ConnectionForm />;
      <p>
        Don't have an account ? <Link to="/signup">Sign Up</Link>
      </p>
    </>
  );
};

export default ConnectionPage;
