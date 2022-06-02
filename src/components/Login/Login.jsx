import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { auth } from "../../API/Firebase";
import Button from "../../UI/Button/Button";
import "./Login.scss";

const Login = () => {
  const singInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Login">
      <h2>Password Manager</h2>
      <p>Connect with Google</p>
      <Button onClick={singInWithGoogle}>Login Google</Button>
    </div>
  );
};

export default Login;
