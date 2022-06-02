import { useState } from "react";
import "./ShowAndHidePassword.scss";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../API/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

function ShowAndHidePassword(props) {
  const [user] = useAuthState(auth);

  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState(props.value);

  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  async function changePassword(id) {
    updateDoc(doc(db, `passswords-${user.displayName}`, id), {
      password: passwordInput,
    });
  }

  const removePassword = (id) => {
    deleteDoc(doc(db, `passswords-${user.displayName}`, id));
  };

  return (
    <div className="ShowAndHidePassword">
      <div className="">
        <input
          type={passwordType}
          onChange={handlePasswordChange}
          value={passwordInput}
          name="password"
          className="form-control"
          placeholder="Password"
          required="required"
        />
        <div className="groupBtn">
          {passwordType === "password" ? (
            <button className="show" onClick={togglePassword}>
              <IoIosEye />
            </button>
          ) : (
            <button className="hide" onClick={togglePassword}>
              <IoIosEyeOff className="IoIosEyeOff" />
            </button>
          )}

          <button onClick={() => changePassword(props.id)}>Change</button>
          <button onClick={() => removePassword(props.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}
export default ShowAndHidePassword;
