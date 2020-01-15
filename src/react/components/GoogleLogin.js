import React, { Component } from 'react';
import './GoogleLogin.css';
import GoogleLogin from 'react-google-login';

class GoogleLogin extends Component {

    render() {
  
      const responseGoogle = (response) => {
        console.log(response);
      }

      return (
        <div className="App">
          <h1>LOGIN WITH GOOGLE</h1>
  
        <GoogleLogin
          clientId="869187170200-3dtdrjohk5k63ogj0roa8l9k4gpmjr88.apps.googleusercontent.com"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
  
        </div>
      );
    }
  }
  
  export default GoogleLogin;
