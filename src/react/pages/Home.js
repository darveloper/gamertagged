import React, { Component } from "react";
import LoginForm from "../components/LoginForm";
import "./Home.css";
import {Link} from "react-router-dom"; 


class Home extends Component {
  render() {
    return (
      <>
      <h1>Welcome To GamerTagged!</h1>
      <LoginForm />
      <h4>Don't have an account? <Link to="/Register">Register Here!</Link></h4>
      </>
    );
  }
}

export default Home;
