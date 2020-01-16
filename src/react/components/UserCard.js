import React from "react";
import { Card, Icon } from "antd";
import UploadImage from "../components/UploadImage";

class UserCard extends React.Component {
  render() {
    const { Meta } = Card;
    return (
      <div id="container">
        <Card
          style={{ maxWidth: "300px", margin: "auto" }}
          cover={
            <img
              className="cardImg"
              alt="example"
              src="https://vignette.wikia.nocookie.net/spongebob/images/5/5f/Larry_the_Lobster_in_A_Day_in_a_Life-77.png/revision/latest/top-crop/width/150/height/150?cb=20150322050144"
            />
          }
          actions={[
            <Icon type="setting" key="setting" />,
            <Icon type="edit" key="edit" />,
            <Icon type="ellipsis" key="ellipsis" />
          ]}
        >
          <Meta title="Username" description="Tagline" />
          <UploadImage classname="uploadImg" />
        </Card>
      </div>
    );
  }
}

export default UserCard;
