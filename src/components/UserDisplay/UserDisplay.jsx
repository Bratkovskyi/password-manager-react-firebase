import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../API/Firebase";
import "./UserDisplay.scss";

const UserDisplay = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="UserDisplay">
      <h1>{user.displayName}</h1>
      <div>
        <img src={user.photoURL} alt="" />
      </div>
    </div>
  );
};

export default UserDisplay;
