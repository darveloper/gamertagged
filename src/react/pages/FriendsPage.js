import React from "react";
import SideMenu from "../components/SideMenu";
import { Input, Card, Col, Row, Button, PageHeader, Icon } from "antd";
import "./Matches.css";
const { Search } = Input;
const { Meta } = Card;

class FriendsPage extends React.Component {
  render() {
    return (
      <>
        <div style={{ height: "100vh" }}>
          <SideMenu>
            <PageHeader
              style={{
                border: "1px solid rgb(235, 237, 240)",
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
              }}
              onBack={() => window.history.back()}
              title="Requests"
            >
              <Search
                className="searchbar"
                placeholder="Search Gamers"
                onSearch={value => console.log(value)}
                style={{ width: 200, marginRight: "50px", marginTop: "15px" }}
              />
            </PageHeader>
            <div className="container">
              <Row gutter={16}>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    size="default"
                    cover={
                      <img
                        alt="example"
                        src="https://www.moma.org/wp/inside_out/wp-content/uploads/2011/11/pixels_v29-e1320430247713-150x150.jpg"
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
                      <img
                        alt="example"
                        src="https://avatarfiles.alphacoders.com/260/thumb-260.jpg"
                      />
                    }
                    actions={[
                      <Button type="primary">Accept</Button>,
                      <Button type="danger">Decline</Button>
                    ]}
                  >
                    <Meta title="Tay Tay" description="86% Gamer Match" />
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
                        src="https://dynl.mktgcdn.com/p/sP70SPR7JthoWrEag1djZWqnMkX9QbB4eChpBjj74ew/150x150.png"
                      />
                    }
                    actions={[
                      <Button type="primary">Accept</Button>,
                      <Button type="danger">Decline</Button>
                    ]}
                  >
                    <Meta title="Mauricio" description="72% Gamer Match" />
                  </Card>
                </Col>
              </Row>
            </div>

            <PageHeader
              style={{
                border: "1px solid rgb(235, 237, 240)",
                textAlign: "center"
              }}
              title="My Friends"
            ></PageHeader>
            <div style={{ height: "50vh", marginBottom: "25px" }}>
              <div className="container">
                <Row gutter={16}>
                  <Col span={8}>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      size="default"
                      cover={
                        <img
                          alt="example"
                          src="https://avatarfiles.alphacoders.com/129/thumb-12947.jpg"
                        />
                      }
                      actions={[
                        <Icon type="mail" />,
                        <Icon type="star" />,
                        <Icon type="setting" key="setting" />
                      ]}
                    >
                      <Meta title="Bill" description="Ready to Rumble" />
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
                          src="https://avatarfiles.alphacoders.com/310/thumb-31046.jpg"
                        />
                      }
                      actions={[
                        <Icon type="mail" />,
                        <Icon type="star" />,
                        <Icon type="setting" key="setting" />
                      ]}
                    >
                      <Meta
                        title="Havalina"
                        description="On the planes of Old Sedona..."
                      />
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
                          src="http://www.avatars.com.au/avatars/cartoons/courage-the-cowardly-dog-150x150.jpg"
                        />
                      }
                      actions={[
                        <Icon type="mail" />,
                        <Icon type="star" />,
                        <Icon type="setting" key="setting" />
                      ]}
                    >
                      <Meta title="Rex" description="Lets do this!!" />
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </SideMenu>
        </div>
      </>
    );
  }
}

export default FriendsPage;
