import React from "react";
import "antd/dist/antd.css";
import { Card, Icon, Col, Row, notification } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;
const openNotification = () => {
  notification.open({
    message: "Friend Requested!",

    onClick: () => {
      console.log("Notification Clicked!");
    }
  });
};
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
              cover={
                <img
                  alt="example"
                  src="https://i.pinimg.com/170x/21/06/4c/21064c8984bfbf924408fdf8c0283966.jpg"
                />
              }
              actions={[
                <Icon onClick={openNotification} type="user-add" />,
                <Link to="/messages">
                  <Icon type="message" />
                </Link>
              ]}
            >
              <Meta title="Spongebob" description="90% Gamer Match" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              size="default"
              cover={
                <img
                  alt="example"
                  src="https://i.etsystatic.com/19992745/d/il/8f1ddd/1913247275/il_150x150.1913247275_o47r.jpg?version=0"
                />
              }
              actions={[
                <Icon onClick={openNotification} type="user-add" />,
                <Link to="/messages">
                  <Icon type="message" />
                </Link>
              ]}
            >
              <Meta title="Patrick" description="89% Gamer Match" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              size="default"
              cover={
                <img alt="example" src="https://i.imgflip.com/2/v1sj7.jpg" />
              }
              actions={[
                <Icon onClick={openNotification} type="user-add" />,
                <Link to="/messages">
                  <Icon type="message" />
                </Link>
              ]}
            >
              <Meta title="Sandy" description="85% Gamer Match" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              size="default"
              cover={
                <img
                  alt="example"
                  src="https://i.pinimg.com/originals/92/f2/84/92f284836339a3e6937dde9f49a46905.png"
                />
              }
              actions={[
                <Icon onClick={openNotification} type="user-add" />,
                <Link to="/messages">
                  <Icon type="message" />
                </Link>
              ]}
            >
              <Meta title="MrKrabs" description="82% Gamer Match" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              size="default"
              cover={
                <img
                  alt="example"
                  src="http://totallynailedit.com/wp-content/uploads/2015/03/fyi-squidward-from-quotspongebobquot-isnt-a-squid-1425496818784-150x150.gif"
                />
              }
              actions={[
                <Icon onClick={openNotification} type="user-add" />,
                <Link to="/messages">
                  <Icon type="message" />
                </Link>
              ]}
            >
              <Meta title="Squidward" description="82% Gamer Match" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              size="default"
              cover={
                <img alt="example" src="https://i.imgflip.com/2/3061zr.jpg" />
              }
              // actions={[<Icon type="user-add" />, <Icon type="message" />]}
              actions={[
                <Icon onClick={openNotification} type="user-add" />,
                <Link to="/messages">
                  <Icon type="message" />
                </Link>
              ]}
            >
              <Meta title="GaryDaSnail" description="80% Gamer Match" />
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default FriendsAction;
