import "./NewPassword.scss";
import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../API/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Button from "../../UI/Button/Button";
import UserDisplay from "../../components/UserDisplay/UserDisplay";

const NewPassword = () => {
  const [user] = useAuthState(auth);
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");
  const passwordColection = collection(db, `passswords-${user.displayName}`);

  const sendPassword = async () => {
    await addDoc(passwordColection, {
      displayName: user.displayName,
      uid: user.uid,
      photoURL: user.photoURL,
      title: title,
      password: password,
      createdAt: serverTimestamp(),
    }).then(alert("Password Has Been Added!"));
    setTitle("");
    setPassword("");
  };
  return (
    <div className="NewPassword">
      <UserDisplay />
      <div className="container">
        <div className="groupInput">
          <div>
            <label htmlFor="inputData">Someweb.com</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              placeholder="Someweb.com"
              id="inputData"
            />
          </div>
          <div>
            <label htmlFor="inputData">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="text"
              placeholder="Password"
              id="inputData"
            />
          </div>
        </div>

        <Button onClick={sendPassword}>Add New Password</Button>
      </div>
    </div>
  );
};

export default NewPassword;
