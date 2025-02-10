import React from "react";
import Kunal from "../assets/Kunal.jpg";
import "./Usercard.css";
const UserCard = (props) => {
  return (
    <>
      <div className="user-container" style={props.style}>
        <p id="user-name">{props.name}</p>
        <img id="user-image" src={props.image} alt={props.name}></img>
        <p id="user-description">{props.desc}</p>
      </div>
    </>
  );
};

export default UserCard;
