import React from "react";
import "antd/dist/antd.css";
import { Card, Icon } from "antd";


class MatchCard extends React.Component {
  render() {
    const { Meta } = Card;
    return (
      <div id="container">
        <div className="container">
          <Card
            size="small"
            style={{ maxWidth: "300px" }}
            cover={
              <img
                className="cardImg"
                alt="example"
                src="http://placehold.it/150x150"
              />
            }
            actions={[<Icon type="user" />]}
          >
            <Meta title="Username" description="Tagline" />
          </Card>
        </div>
      </div>
    );
  }
}

export default MatchCard;
