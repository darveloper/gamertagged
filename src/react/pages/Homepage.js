import React from "react";
import SideMenu from "../components/SideMenu";

class HomePage extends React.Component {
    render() {
      return (
        <SideMenu>
        
            <div className="container">
              <Title title="Welcome to the GamerTagged HomePage" />
              <CardContent>Lorem ipsum sic dolor amet...</CardContent>
                <FriendsAction className="MatchCard" />
              
            </div>
        
        </SideMenu>
      );
    }
  }

export default Homepage;