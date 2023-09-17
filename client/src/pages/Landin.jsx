import React from "react";
import "./templates/landing.css";
import { useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import animationEffect from "../components/lottie/animation_lmk5pwtx.json";

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
        <Player
          src={animationEffect}
          className="player"
          loop
          autoplay
          speed={"2"}
          style={{ height: "600px", width: "600px" }}
        />
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
