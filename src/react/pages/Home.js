import React, { Component } from "react";
// import "./Background.css";
import LoginForm from "../components/LoginForm";
import GoogleLoginForm from "../components/GoogleLogin";

class Home extends Component {
  render() {
    return (
      <>
        <div
          style={{
            background: "url(https://i.imgur.com/rAZzDml.jpg) no-repeat",
            backgroundColor: "#dae8f3",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100vh"
          }}
        >
          <div className="header">
            <h1 style={{ fontFamily: "Orbitron", color: "white" }}>
              Welcome To GamerTagged!
            </h1>
          </div>
          <div className="login_container" style={{ marginTop: "5%" }}>
            <LoginForm />
            <GoogleLoginForm />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
