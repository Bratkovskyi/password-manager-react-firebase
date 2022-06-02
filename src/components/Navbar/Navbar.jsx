import React from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Button/Button";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Navbar.scss";
import { auth } from "../../API/Firebase";

const Navbar = () => {
  const [user] = useAuthState(auth);
  return user ? (
    <nav>
      <div>
        <h2>Password Manager</h2>
        <Link to="/">Home</Link>
        <Link to="/addpassword">Add</Link>
      </div>

      <Button onClick={() => auth.signOut()}> Logout </Button>
    </nav>
  ) : (
    <nav>
      <h2 style={{ color: "#fff" }}>Password Manager</h2>
    </nav>
  );
};

export default Navbar;
