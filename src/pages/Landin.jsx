import React from "react";
import "./templates/landing.css";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigator = useNavigate();
  return (
    <div className="body">
      <div className="loginBar">
        <button id="btn-md" onClick={()=>navigator('/login')}>SignIn</button>
        <button id="btn-md">SignUp</button>
      </div>
      <div className="content">
        <img src="https://www.creativeboom.com/uploads/articles/29/293b41149838f40357161da13536bbdee05d4cc3.gif"></img>
        <p id="appNm">ParkMe</p>
      </div>
    </div>
  );
}
