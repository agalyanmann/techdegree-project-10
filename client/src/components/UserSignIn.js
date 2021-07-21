import React from "react";
import { useHistory } from "react-router-dom";

export const UserSignIn = () => {
  let history = useHistory();

  const clickHandler = (e) => {
    e.preventDefault();
    if (e.target.innerText === "Cancel") {
      history.push("/courses");
    } else if (e.target.innerText === "Sign In") {
      console.log(e.target.innerText);
    }
  };

  return (
    <main>
      <div className="form--centered">
        <h2>Sign In</h2>
        <form>
          <label htmlFor="emailAddress">Email Address</label>
          <input id="emailAddress" name="emailAddress" type="email" />
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" />
          <div id="signup handler" onClick={clickHandler}>
            <button className="button" type="submit">
              Sign In
            </button>
            <button className="button button-secondary">Cancel</button>
          </div>
        </form>
      </div>
    </main>
  );
};
