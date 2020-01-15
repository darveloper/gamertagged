import React from "react";
import UserCard from "../components/UserCard";
import SideMenu from "../components/SideMenu";
import "./Profile.css";
import { userIsAuthenticated } from "../HOCs";

class Profile extends React.Component {
  render() {
    return (
      <SideMenu>
        <div className="UserCard">
          <UserCard />
        </div>
      </SideMenu>
    );
  }
}

export default userIsAuthenticated(Profile);
