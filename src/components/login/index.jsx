import React, { useState } from "react";
import styles from "./login.modiule.scss";
import { BiRightArrowAlt } from "react-icons/bi";
import { Icon } from "@iconify/react";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-form">
      <div className="heading">
        <Icon icon="entypo:login" color="#7979ff" width="30" height="30" />
        <h1>welcome!</h1>Sign in to your account</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail </label>
        <div className="d-flex">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Icon
            icon="ic:baseline-email"
            color="#b3b3b3"
            width="14"
            height="14"
          />
        </div>
        <label htmlFor="password">Password</label>
        <div className="d-flex">
          <input
            type="password"
            id="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <Icon 
            icon="mdi:eye"
            color="#b3b3b3" 
            width="14" 
            height="14" />
        </div>
        <div className="login-pass">
        <div>
            <input type="checkbox" />
            <label>remember me</label>
           </div>
            <a href="">forgot password?</a>
        </div>
        <button type="submit">
          Log In <BiRightArrowAlt size={20} />
        </button>
      </form>
      <button
        className="switch-btn"
        onClick={() => props.onFormSwitch("register")}>
        Don't have an account?
      </button>
    </div>
  );
};
