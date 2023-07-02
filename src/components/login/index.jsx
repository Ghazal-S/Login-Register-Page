import React, { useState } from "react";
import styles from "./login.module.scss";
import { Icon } from "@iconify/react";

export const Login = ({ onFormSwitch }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) =>
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => e.preventDefault();

  return (
    <div className={styles["auth-form"]}>
      <div className={styles["heading"]}>
        <Icon
        icon="entypo:login"
        color="#7979ff"
        width="30"
        height="30"
      />
      <h1>welcome!</h1>Sign in to your account
    </div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">E-mail </label>
      <div className="d-flex">
        <input
          type="email"
          id="email"
          name="email"
          value={inputs.email}
          onChange={onChange}
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
            name="password"
            value={inputs.password}
            onChange={onChange}
          />
          <Icon 
          icon="mdi:eye" 
          color="#b3b3b3" 
          width="14" 
          height="14"
          />
        </div>
        <div className={styles["login-pass"]}>
          <div>
            <input type="checkbox" />
            <label>remember me</label>
          </div>
          <a href="">forgot password?</a>
        </div>
        <button type="submit">
          Log In <Icon icon="heroicons-solid:arrow-sm-right" width="20" height="20" />
        </button>
      </form>
      <button
        className={styles["switch-btn"]}
        onClick={() => onFormSwitch("register")}
      >
        Don't have an account?
      </button>
    </div>
  );
};
