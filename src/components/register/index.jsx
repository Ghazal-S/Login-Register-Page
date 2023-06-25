import React, { useState } from "react";

export const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, pass, email)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button type="submit">Create</button>
      </form>
      <button onClick={() => props.onFormSwitch("login")}>
        Already have an accuont?
      </button>
    </>
  );
};
