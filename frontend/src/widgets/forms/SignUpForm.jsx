import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const SignUpForm = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const [userData, setUserData] = useState({});

  const fetchCreateUser = async () => {
    const headers = new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${btoa(userData?.username + userData?.password)}`,
    });

    try {
      const response = await fetch(
        `http://localhost:2345/index.php/user/create`,
        {
          method: "POST",
          body: JSON.stringify(userData),
          headers: headers,
          mode: "cors",
          credentials: "include",
        }
      );
      if (response.status >= 200 && response.status <= 299) {
        const data = await response.json();
        console.log(data);
        sessionStorage.setItem("userToken", data?.token);
        setFormIsSubmitted(true);
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  const submit = () => {
    fetchCreateUser();
  };

  if (
    formIsSubmitted &&
    sessionStorage.getItem("userToken") &&
    sessionStorage.getItem("userToken") !== undefined
  ) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <section>
        <label>Username</label>
        <input
          placeholder="Enter username"
          id="username"
          type="text"
          onChange={(e) => handleChange(e)}
        ></input>
      </section>
      <section>
        <label>Email</label>
        <input
          placeholder="Enter email"
          type="text"
          id="email"
          onChange={(e) => handleChange(e)}
        ></input>
      </section>
      <section>
        <label>Password</label>
        <input
          placeholder="Enter password"
          id="password"
          type="password"
          onChange={(e) => handleChange(e)}
        ></input>
      </section>
      <button onClick={() => submit()}>Create Account</button>
    </>
  );
};

export default SignUpForm;
