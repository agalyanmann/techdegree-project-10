import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

export const UserSignUp = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
    errors: [],
  });
  let history = useHistory();

  const clickHandler = (e) => {
    e.preventDefault();
    if (e.target.innerText === "Cancel") {
      history.push("/courses");
    } else if (e.target.innerText === "Sign Up") {
      console.log("handle sign up");
      console.log(state)
    }
  };

  const change = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <main>
      <div className="form--centered">
        <h2>Sign Up</h2>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={state.firstName}
            onChange={change}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={state.lastName}
            onChange={change}
          />
          <label htmlFor="emailAddress">Email Address</label>
          <input
            id="emailAddress"
            name="emailAddress"
            type="email"
            value={state.emailAddress}
            onChange={change}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={state.password}
            onChange={change}
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={state.confirmPassword}
            onChange={change}
          />
          <div id="signup handler" onClick={clickHandler}>
            <button className="button" type="submit">
              Sign Up
            </button>
            <button className="button button-secondary">Cancel</button>
          </div>
        </form>
      </div>
    </main>
  );
};
