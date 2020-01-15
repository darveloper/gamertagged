import React, { Component } from "react";
import "./Home.css";
import LoginForm from "../components/LoginForm";
import GoogleLoginForm from "../components/GoogleLogin";

class Home extends Component {
  render() {
    return (
      <>
        <div className="header">
          <h1 style={{ fontFamily: "Orbitron", color: "white" }}>
            Welcome To GamerTagged!
          </h1>
        </div>
        <div className="login_container" style={{ marginTop: "5%" }}>
          <LoginForm />
          <GoogleLoginForm />
        </div>
      </>
    );
  }
}

export default Home;
