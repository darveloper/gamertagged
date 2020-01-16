import React from "react";
import UserCard from "../components/UserCard";
import SideMenu from "../components/SideMenu";
import GameUpload from "../components/GameUpload";
import "./Profile.css";
import { userIsAuthenticated } from "../HOCs";
import { PageHeader } from "antd";

class Profile extends React.Component {
  render() {
    return (
      <SideMenu>
        <PageHeader
          style={{
            border: "1px solid rgb(235, 237, 240)"
          }}
          onBack={() => window.history.back()}
          title="Profile"
        />
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "flex-start"
          }}
        >
          <div style={{ marginLeft: "50px" }}>
            <UserCard />
          </div>
          <div
            style={{
              marginTop: "120px",
              marginLeft: "100px",
              display: "flex",
              flexDirection: "row"
            }}
          >
            <GameUpload className="gameUpload" />
            <GameUpload className="gameUpload" />
            <GameUpload className="gameUpload" />
          </div>
        </div>
      </SideMenu>
    );
  }
}

export default userIsAuthenticated(Profile);
