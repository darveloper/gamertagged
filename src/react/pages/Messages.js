import React from "react";
import Messaging from "../components/Messaging";
import { Button } from "antd";
import { Link } from "react-router-dom";

class Messages extends React.Component {
  render() {
    return (
      <div>
        <Messaging />
        <Link to="/matches">
          <Button type="primary">Go Back</Button>
        </Link>
      </div>
    );
  }
}

export default Messages;
