import React from "react";

const LoginButton = ({ SignUpUsingGoogle }) => (
  <button
    onClick={SignUpUsingGoogle}
    type="button"
    className="login-with-google-btn"
  >
    Sign in with Google
  </button>
);

export default LoginButton;
