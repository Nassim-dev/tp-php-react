import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const ConnectionForm = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const [userData, setUserData] = useState(false);

  const submit = () => {
    fetchUser();
  };

  const fetchUser = async () => {
    const headers = new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${btoa(userData?.username + userData?.password)}`,
    });

    try {
      const response = await fetch(
        `http://localhost:2345/index.php/user/connect`,
        {
          method: "POST",
          headers: headers,
          mode: "cors",
          credentials: "include",
        }
      );
      if (response.status >= 200 && response.status <= 299) {
        console.log(response.status);
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
        <label>Password</label>
        <input
          placeholder="Enter password"
          id="password"
          type="password"
          onChange={(e) => handleChange(e)}
        ></input>
      </section>
      <button onClick={() => submit()}>Connect</button>
    </>
  );
};

export default ConnectionForm;
