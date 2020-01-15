import React, { Component } from "react";
import LoginForm from "../components/LoginForm";
import "./Home.css";
import { go } from "connected-react-router";
import GoogleLogin from "../components/GoogleLogin";

class Home extends Component {
  render() {
    return (
      <>
        <div className="header">
          <h1 style={{ fontFamily: "Orbitron" }}>Welcome To GamerTagged!</h1>
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
