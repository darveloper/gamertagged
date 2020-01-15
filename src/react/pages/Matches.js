import React from "react";
import FriendsAction from "../components/FriendsAction";
import "./Matches.css";
import "antd/dist/antd.css";
import SideMenu from "../components/SideMenu";
// import Sidemenu from "../components/SideMenu"

class Matches extends React.Component {
  render() {
    return (
      <div>
        <SideMenu>
          <h1>Matches</h1>

          <div className="UserCard">
            <FriendsAction className="MatchCard" />
          </div>
        </SideMenu>
      </div>
    );
  }
}

export default Matches;
