import React from "react";
import "./templates/login.css";
import { Player } from "@lottiefiles/react-lottie-player";
import animationEffect from "../components/animation_lmip8qge.json";

export default function Login() {
  return (
    <div className="wrapper">
      <div>
        <Player
          src={animationEffect}
          className="player"
          loop
          autoplay
          speed={"2"}
          style={{ height: "600px", width: "600px" }}
        />
        <div className="loginBtnDiv">
          <button className="googleBtn">Login with google</button>
          <button className="phoneBtn">Login with Phone Number</button>
        </div>
      </div>
    </div>
  );
}
