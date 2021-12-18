import React from "react";
import "./Login.css";
export default function Login() {
  return (
    <form>
      <h1>Login/SignUp</h1>
      <label for="email">Enter your email</label>
      <br />
      <input type="email" id="email" name="email" value=""></input>
      <br />
      <label for="password">Enter your password</label>
      <br />
      <input type="password" id="password" name="password" value=""></input>
    </form>
  );
}
