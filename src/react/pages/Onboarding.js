import React from "react";
import { Carousel } from "antd";
import "./Onboarding.css";
import { Link } from "react-router-dom";

function onChange(a, b, c) {
  console.log(a, b, c);
}
class Onboarding extends React.Component {
  render() {
    return (
   
        <Carousel afterChange={onChange}>
          <div>
            <h2>Welcome to GamerTagged!</h2>
          </div>
          <div>
            <h2>GamerTagged is a matching service tha pairs you with other gamers based on communication styles.</h2>
          </div>
          <div>
            <h2>With better communication comes better gaming. Take our quiz to find the best matches for you!</h2>
          </div>
          <div>
            <h2><Link to="/questionnaire">Click Here to Begin!</Link></h2>
          </div>
        </Carousel>
     
    );
  }
}

export default Onboarding;
