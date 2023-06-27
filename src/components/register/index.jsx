import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { BiRightArrowAlt } from "react-icons/bi";

export const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-form">
      <div className="heading">
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Icon icon="fa-solid:user" color="#b3b3b3" width="10" height="10" />
        </div>
        <label htmlFor="email">E-mail</label>
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
            icon="iconamoon:lock-fill"
            color="#b3b3b3"
            width="14"
            height="14"
          />
        </div>
        <button type="submit">
          Create <BiRightArrowAlt size={20} />
        </button>
      </form>
      <button
        className="switch-btn"
        onClick={() => props.onFormSwitch("login")}>
        Already have an accuont?
      </button>
    </div>
  );
};
