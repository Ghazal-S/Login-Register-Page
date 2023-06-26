import React, { useState } from "react";
import styles from "./login.modiule.scss";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="auth-form">
        <div className="heading">
          <div></div>
          <h1>welcome!</h1>Sign in to your account
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <div className="pass">
            <div>
              <input type="checkbox" />
              <label>remember me</label>
            </div>
            <a href="">forgot password?</a>
          </div>
          <button type="submit">Log In</button>
        </form>
        <button className="switch-btn" onClick={() => props.onFormSwitch("register")}>
          Don't have an account?
        </button>
      </div>
    </>
  );
};
