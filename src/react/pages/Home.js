import React, { Component } from "react";
import LoginForm from "../components/LoginForm";

import "./Home.css";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <>
        <div className="header">
          <h1 style={{ fontFamily: "Orbitron" }}>Welcome To GamerTagged!</h1>
        </div>
        <div style={{ marginTop: "30px" }}>
          <LoginForm />
        </div>
        <h4>
          Don't have an account? <Link to="/Register">Register Here!</Link>
        </h4>
      </>
    );
  }
}

export default Home;
