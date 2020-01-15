import React from "react";
import FriendsAction from "../components/FriendsAction";
import "./Matches.css";
import 'antd/dist/antd.css';
// import Sidemenu from "../components/SideMenu"

class Friends extends React.Component {
  render() {
    return (
      <div>
        {/* <Sidemenu /> */}
        <h1>Friends</h1>
      
        <div className="container" style={{ height: "100vh" }}>
          <div className="UserCard">
            <FriendsAction className="MatchCard" />
          </div>
        </div>
      </div>
    );
  }
}

export default Friends;
