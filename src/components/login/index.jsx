import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
      <button onClick={() => props.onFormSwitch("register")}>
        Don't have an account?
      </button>
    </>
  );
};
