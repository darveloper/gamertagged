import React, { Component } from "react";
import "./Home.css";
import LoginForm from "../components/LoginForm";
import GoogleLogin from "../components/GoogleLogin";

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
          <GoogleLogin />
        </div>
      </>
    );
  }
}

export default Home;
