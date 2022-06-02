import React from "react";
import ShowAndHidePassword from "../ShowAndHidePassword/ShowAndHidePassword";
import "./PasswordsList.scss";

const PasswordsList = (props) => {
  return (
    <div className="PasswordsList">
      <h3>{props.title}</h3>
      <ShowAndHidePassword value={props.password} id={props.id} />
    </div>
  );
};

export default PasswordsList;
