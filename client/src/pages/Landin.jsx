import React from "react";
import "./templates/landing.css";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigator = useNavigate();
  return (
    <div className="body">
      <div className="loginBar">
        <button className="btn-md" onClick={()=>navigator('/login')}>SignIn</button>
        <button className="btn-md">SignUp</button>
      </div>

      <div className="content">
        <div className="logo">
          <img src="https://cdn.dribbble.com/users/1287580/screenshots/5410442/dribbble_2.gif"></img>
        </div>

        <div className="title">
          <p id="appNm">ParkMe</p>
          <p>Only solution for parking in India</p>
          <button className="trial"> Get Free Trial</button>
        </div>
      </div>
    </div>
  );
}
