import React from "react";
import "antd/dist/antd.css";
import { Card, Icon } from "antd";
import UploadImage from "../components/UploadImage";
import { withAsyncAction } from "../HOCs";
import { Spinner } from ".";

class UserCard extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.username);
  }
  componentDidUpdate(prevProps) {
    if (this.props.username !== prevProps.username) {
      this.props.getUser(this.props.username);
    }
  }
  render() {
    if (this.props.result === null) {
      return <Spinner />;
    }

    const user = this.props.result.user;
    const { Meta } = Card;
    return (
      <div id="container">
        <div className="container">
          <Card
            style={{ maxWidth: "300px" }}
            cover={
              <img
                className="cardImg"
                alt="example"
                src={
                  user.pictureLocation
                    ? "https://kwitter-api.herokuapp.com" + user.pictureLocation
                    : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                }
              />
            }
          >
            <Meta title="Username" description="Tagline" />
            <UploadImage username={this.props.username} classname="uploadImg" />
          </Card>
        </div>
      </div>
    );
  }
}

export default withAsyncAction("users", "getUser")(UserCard);
