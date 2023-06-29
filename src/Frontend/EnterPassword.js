import React from "react";
import "./EnterPassword.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const EnterPassword = () => {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate("/");
  };
  return (
    <div className="main">
      <div className="login1">
        <FontAwesomeIcon
          icon={faTimes}
          className="cross-icon"
          onClick={navigateBack}
        />
        <p className="para1">Enter Your Password</p>
        <div className="email-div">
          <div className="email-name">
            <p>Email</p>
          </div>
          <div className="email">
            <p>aroobmemon@gmail.com</p>
          </div>
        </div>
        <div className="pass-div">
          <div className="password-name">
            <p>Password</p>
          </div>
          <div className="password">
            <input type="password" placeholder="" />
          </div>
        </div>
        <div className="forgot-pass">
          <p>Forgot password?</p>
        </div>
        <button className="button">Log in</button>
        <div className="signup-link">
          Don't have an account?{" "}
          <span className="span-element">
            <a href="/signup" className="signup">
              Sign up
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default EnterPassword;
