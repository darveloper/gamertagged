import React from "react";
import RegisterForm from "../components/RegisterForm";
import "./Home.css";



class Register extends React.Component {
  render() {
    return (
      <>
        
        <h1>GamerTagged</h1>
        <h2>Register for a New Account</h2>
        <RegisterForm />

      </>
    );
  }
}

// export default userIsNotAuthenticated(Register);
export default Register;
