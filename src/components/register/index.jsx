import React, { useState } from "react";
import styles from "./register.module.scss"
import { Icon } from "@iconify/react";

export const Register = ({ onFormSwitch }) => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onChange = (e) =>
  setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));

  const handleSubmit = e => e.preventDefault();

  return (
    <div className={styles["auth-form"]}>
      <div className={styles["heading"]}>
        <Icon
          icon="mingcute:user-4-fill"
          color="#7979ff"
          width="30"
          height="30"
        />
        <h1>Create account!</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <div className="d-flex">
          <input
            type="text"
            id="name"
            name="name"
            value={inputs.name}
            onChange={onChange}
          />
          <Icon icon="fa-solid:user"
          color="#b3b3b3"
          width="10"
          height="10"
         />
         </div>
         <label htmlFor="email">E-mail</label>
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
            icon="iconamoon:lock-fill"
            color="#b3b3b3"
            width="14"
            height="14"
          />
        </div>
        <button type="submit">
          Create <Icon icon="heroicons-solid:arrow-sm-right" width="20" height="20" />
        </button>
      </form>
      <button
        className={styles["switch-btn"]}
        onClick={() => onFormSwitch("login")}>
        Already have an accuont?
      </button>
    </div>
  );
};
