import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Square = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/password");
  };
  return (
    <div className="main">
      <div className="login">
        <p className="para">Sign in to Digital Stories</p>
        <div className="buttons">
          <button className="gmail">
            <FontAwesomeIcon icon={faGoogle} />
            <span class="button-text">Sign up with Gmail</span>
          </button>
          <button className="facebook">
            <FontAwesomeIcon icon={faFacebook} />
            <span class="button-text">Sign up with Facebook</span>
          </button>
        </div>

        <div className="separator">
          <div className="line"></div>
          <span className="or">Or</span>
          <div className="line"></div>
        </div>
        <div className="input-container">
          <input type="text" placeholder="Email or Username" />
        </div>
        <div className="additional-buttons">
          <button className="additional-button1" onClick={handleNextClick}>
            Next
          </button>
          <button className="additional-button2">Forgot Password?</button>
        </div>
        <div className="signup-link">
          Don't have an account?{" "}
          <a href="/signup" className="signup">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Square;
