import React from "react";
import { Button } from "antd";
import pages from "../pages";

class NotFound extends React.Component {
  render() {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>Page not found</h1>
        <Button type="link" block href={pages.Home.path}>
          Go Back Home
        </Button>
      </>
    );
  }
}

export default NotFound;
