import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import SignInBg from "../assets/img/sign-in-bg.jpg";

const LoginSidebar = () => {
  return (
    <div id="login-sidebar">
      <img src={SignInBg} alt="Signin" className="w-100" />
      <Link to="/" className="back" style={{position: 'absolute', left: '10px'}}>
        <i style={{ fontSize: "32px", color: 'black' }}>
          <MdOutlineKeyboardBackspace />
        </i>
      </Link>
    </div>
  );
};

export default LoginSidebar;
