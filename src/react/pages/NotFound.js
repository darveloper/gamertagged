import React from "react";
import { Button } from "antd";
import pages from "../pages";

class NotFound extends React.Component {
  render() {
    return (
      <>
        <p style={{ textAlign: "center" }}>Page not found</p>
        <Button type="link" block href={pages.Home.path}>
          Go Home
        </Button>
      </>
    );
  }
}

export default NotFound;
