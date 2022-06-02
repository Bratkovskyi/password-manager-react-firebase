import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../API/Firebase";
import PasswordsList from "../../components/PasswordsList/PasswordsList";

import "./PasswordPage.scss";

const PasswordPage = () => {
  const [user] = useAuthState(auth);
  const [passwords, setPasswords] = useState([]);

  const passwordColection = collection(db, `passswords-${user.displayName}`);

  useEffect(() => {
    onSnapshot(passwordColection, (snapshot) => {
      setPasswords(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            viewing: false,
            ...doc.data(),
          };
        })
      );
    });
  }, []);
  return passwords.length === 0 ? (
    <div className="PasswordPage">
      <div className="container">
        <h1>You don't have any passwords yet</h1>
      </div>
    </div>
  ) : (
    <div className="PasswordPage">
      {passwords.map((data, key) => (
        <PasswordsList
          key={key}
          title={data.title}
          password={data.password}
          id={data.id}
        />
      ))}
    </div>
  );
};

export default PasswordPage;
