import React from "react";
import SideMenu from "../components/SideMenu";
import { Input, Card, Col, Row, Button } from "antd";
import "./FriendsPage.css";
const { Search } = Input;
const { Meta } = Card;

class FriendsPage extends React.Component {
  render() {
    return (
      <>
        <SideMenu>
          <Search
            className="searchbar"
            placeholder="Search Gamers"
            onSearch={value => console.log(value)}
            style={{ width: 200, marginLeft: "41%", marginTop: "15px" }}
          />
          <h1>Requests</h1>
          <div style={{ padding: "30px" }}>
            <Row gutter={16}>
              <Col span={8}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  size="default"
                  cover={
                    <img
                      alt="example"
                      src="https://ca.hellomagazine.com/imagenes/travel/2018012645793/tom-myspace-founder-travel-photographer/0-230-700/myspace-tom-now-t.jpg?filter=w600&interpolation=lanczos-normal&downsize=0.75xw:*&output-format=progressive-jpeg&output-quality=70"
                    />
                  }
                  actions={[
                    <Button type="primary">Accept</Button>,
                    <Button type="danger">Decline</Button>
                  ]}
                >
                  <Meta title="Tom" description="90% Gamer Match" /> Tom wants
                  to play Fortnite!
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  size="default"
                  cover={
                    <img alt="example" src="https://i.imgur.com/aiiJMqI.png" />
                  }
                  actions={[
                    <Button type="primary">Accept</Button>,
                    <Button type="danger">Decline</Button>
                  ]}
                >
                  <Meta title="Tom" description="90% Gamer Match" />
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
                      src="https://previews.123rf.com/images/kahovsky/kahovsky1709/kahovsky170900052/85504132-cheerful-happy-boy-young-man-hold-joystick-plays-video-game-in-vr-glasses-vector-flat-modern-style-i.jpg"
                    />
                  }
                  actions={[
                    <Button type="primary">Accept</Button>,
                    <Button type="danger">Decline</Button>
                  ]}
                >
                  <Meta title="Tom" description="90% Gamer Match" />
                </Card>
              </Col>
            </Row>
          </div>
        </SideMenu>
      </>
    );
  }
}

export default FriendsPage;
