import React, { useState } from "react";
import "./LoginScreen.css";
import SignInScreen from "./SignInScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign in
        </button>

        <div className="loginScreen__gradient" />

        <div className="loginScreen__body">
          {signIn ? (
            <SignInScreen />
          ) : (
            <>
              <h1>Unlimited films, tv programes and more</h1>
              <h2>Watch anywhere. Cancel anytime</h2>
              <h3>
                Ready to watch? enter your email to create or restart your
                membership
              </h3>
              <div className="loginScreen__input">
                <form>
                  <input type="eamil" placeholder="Email Address" />
                  <button
                    onClick={() => setSignIn(true)}
                    className="loginScreen__getStarted"
                  >
                    get started
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
