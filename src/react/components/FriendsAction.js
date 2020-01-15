import React from "react";
import "antd/dist/antd.css";
import { Card, Icon, Col, Row } from "antd";

const { Meta } = Card;
class FriendsAction extends React.Component {
  render() {
    return (
      <>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              size="default"
              cover={<img alt="example" src="http://placehold.it/150x150" />}
              actions={[<Icon type="user-add" />, <Icon type="message" />]}
            >
              <Meta title="Username" description="90% Gamer Match" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              size="default"
              cover={<img alt="example" src="http://placehold.it/150x150" />}
              actions={[<Icon type="user-add" />, <Icon type="message" />]}
            >
              <Meta title="Username" description="89% Gamer Match" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              size="default"
              cover={<img alt="example" src="http://placehold.it/150x150" />}
              actions={[<Icon type="user-add" />, <Icon type="message" />]}
            >
              <Meta title="Username" description="85% Gamer Match" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              size="default"
              cover={<img alt="example" src="http://placehold.it/150x150" />}
              actions={[<Icon type="user-add" />, <Icon type="message" />]}
            >
              <Meta title="Username" description="82% Gamer Match" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              size="default"
              cover={<img alt="example" src="http://placehold.it/150x150" />}
              actions={[<Icon type="user-add" />, <Icon type="message" />]}
            >
              <Meta title="Username" description="82% Gamer Match" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              size="default"
              cover={<img alt="example" src="http://placehold.it/150x150" />}
              actions={[<Icon type="user-add" />, <Icon type="message" />]}
            >
              <Meta title="Username" description="80% Gamer Match" />
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default FriendsAction;
