import React from "react";
import "./templates/login.css";
import { Player } from "@lottiefiles/react-lottie-player";
import animationEffect from "../components/lottie/animation_lmip8qge.json";
import { FcGoogle,FcAndroidOs} from 'react-icons/fc';
import { MdKeyboardBackspace } from 'react-icons/md';

import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigator = useNavigate();
  return (
    <div className="wrapper">

      <div>
      <button className="backBtn" onClick={()=>navigator(-1)}><MdKeyboardBackspace className="bk-icon"/></button>
      {/* <button className="backBtn" onClick={()=>navigator('/')}>Home</button> */}
             
        <Player
          src={animationEffect}
          className="player"
          loop
          autoplay
          speed={"2"}
          style={{ height: "600px", width: "600px" }}
        />
        
        <div className="loginBtnDiv">
          <button className="googleBtn"><FcGoogle className="google"/> Login With Google</button>
          <button className="phoneBtn"><FcAndroidOs className="phone"/>Login With Phone</button>
        </div>
      </div>
    </div>
  );
}


