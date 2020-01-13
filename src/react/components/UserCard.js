import React from "react";
import "antd/dist/antd.css";
import { Card, Icon } from "antd";
import UploadImage from "../components/UploadImage";

class UserCard extends React.Component {
  render() {
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
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
              />
            }
            actions={[
              <Icon type="setting" key="setting" />,
              <Icon type="edit" key="edit" />,
              <Icon type="ellipsis" key="ellipsis" />
            ]}
          >
            <Meta
              title="Username"
              description="Tagline"
            />
            <UploadImage classname="uploadImg"/>
          </Card>
        </div>
      </div>
    );
  }
}

export default UserCard;
