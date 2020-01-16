import React from "react";
import FriendsAction from "../components/FriendsAction";
import SideMenu from "../components/SideMenu";
import "./Matches.css";
import { PageHeader } from "antd";

class Matches extends React.Component {
  render() {
    return (
      <SideMenu>
        <PageHeader
          style={{
            border: "1px solid rgb(235, 237, 240)"
          }}
          onBack={() => window.history.back()}
          title="Matches"
        />
        <div className="container">
          <FriendsAction className="MatchCard" />
        </div>
      </SideMenu>
    );
  }
}

export default Matches;
