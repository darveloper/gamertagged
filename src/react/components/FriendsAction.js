import React from "react";
import "antd/dist/antd.css";
import { Card, Icon } from "antd";

const { Meta, Grid } = Card;
class FriendsAction extends React.Component {
  render() {
    return (
      <>
        <Grid style={{ width: 290 }}>
          <Card
            hoverable
            style={{ width: 240 }}
            size="default"
            cover={<img alt="example" src="http://placehold.it/150x150" />}
            actions={[<Icon type="user-add" />]}
          >
            <Meta title="Username" description="90% Gamer Match" />
          </Card>
        </Grid>
      </>
    );
  }
}

export default FriendsAction;
