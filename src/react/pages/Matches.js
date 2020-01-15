import React from "react";
import FriendsAction from "../components/FriendsAction";
import SideMenu from "../components/SideMenu";
import "./Matches.css";
import "antd/dist/antd.css";

class Matches extends React.Component {
  render() {
    return (
      <SideMenu>
        <div>
          <h1>Matches</h1>
          <div className="container" style={{ height: "100vh" }}>
            <div className="UserCard">
              <FriendsAction className="MatchCard" />
            </div>
          </div>
        </div>
      </SideMenu>
    );
  }
}

export default Matches;
