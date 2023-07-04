import React, { useState } from "react";
import styles from "./login.module.scss";
import { Icon } from "@iconify/react";

export const Login = ({ onFormSwitch }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    e.preventDefault();
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    const newEmail = inputs.email;
    const newPassword = inputs.password;
    const validateInput = (inputType, inputValue) => {
      switch (inputType) {
        case "email":
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(inputValue);
        case "password":
          const passwordRegex =
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
          return passwordRegex.test(inputValue);
        default:
          return false;
      }
    };

    validateInput("password", newPassword)
      ? console.log("Password input is valid")
      : console.log(
          "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        );

    if (validateInput("email", newEmail)) {
      console.log("Email input is valid");
    } else {
      console.log(" Email input is invalid");
    }
  };

  const onSubmit = (e) => e.preventDefault();

  return (
    <div className={styles["auth-form"]}>
      <div className={styles["heading"]}>
        <Icon icon="entypo:login" color="#7979ff" width="30" height="30" />
        <h1>welcome!</h1>Sign in to your account
      </div>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">E-mail </label>
        <div>
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
        <div>
          <input
            type="password"
            id="password"
            name="password"
            value={inputs.password}
            onChange={onChange}
          />
          <Icon icon="mdi:eye" color="#b3b3b3" width="14" height="14" />
        </div>
        <div className={styles["login-pass"]}>
          <div>
            <input type="checkbox" />
            <label>remember me</label>
          </div>
          <a href="">forgot password?</a>
        </div>
        <button type="submit" onClick={onChange}>
          Log In{" "}
          <Icon icon="heroicons-solid:arrow-sm-right" width="20" height="20" />
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
