import React, { Component } from "react";
import LoginForm from "../components/LoginForm";
import "./Home.css";



class Home extends Component {
  render() {
    return (
      <>
      <h1>Welcome To GamerTagged!</h1>
      <LoginForm />
      </>
    );
  }
}

export default Home;
