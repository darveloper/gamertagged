import React from "react";
import UserCard from "../components/UserCard";
import SideMenu from "../components/SideMenu";
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
        <div className="UserCard">
          <UserCard />
        </div>
      </SideMenu>
    );
  }
}

export default userIsAuthenticated(Profile);
