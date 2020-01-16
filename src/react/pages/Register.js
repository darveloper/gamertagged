import React from "react";
import RegisterForm from "../components/RegisterForm";
import "./Home.css";

class Register extends React.Component {
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
            <h1 style={{ fontFamily: "Orbitron" }}>Welcome To GamerTagged!</h1>
          </div>
          <div className="login_container">
            <h2
              style={{
                color: "whitesmoke",
                fontFamily: "Orbitron",
                marginTop: "25%",
                paddingTop: "15px"
              }}
            >
              Register a New Account
            </h2>
            <RegisterForm />
          </div>
        </div>
      </>
    );
  }
}

// export default userIsNotAuthenticated(Register);
export default Register;
