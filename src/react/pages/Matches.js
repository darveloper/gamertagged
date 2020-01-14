import React from "react";
import MatchCard from "../components/MatchCard";
import "./Matches.css";
import 'antd/dist/antd.css';

class Matches extends React.Component {
  render() {
    return (
      <div>
        <h1>Matches</h1>
        <div className="container" style={{ height: "100vh" }}>
          <div className="UserCard">
            <MatchCard className="MatchCard" />
          </div>
        </div>
      </div>
    );
  }
}

export default Matches;
