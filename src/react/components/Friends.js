import React from "react";
import "antd/dist/antd.css";
import { Card, Icon, Descriptions } from "antd";
import ".././pages/FriendsPage.css"
class Friends extends React.Component {
  render() {
   
    return (
      <div id="container">
        <div className="container">
          <Card 
            size="small"
            style={ { maxWidth: "300px" } }
            actions={ [<Icon type="user" />] }
          >
           <Descriptions className='usercardFP'><Descriptions.Item label="UserName">DARVELOPER</Descriptions.Item>
              <Descriptions.Item label="Telephone:">1810000000</Descriptions.Item>
              <Descriptions.Item label="Live:">Offline</Descriptions.Item>
              <Descriptions.Item label="GamerTag(s):" span={2}>
               Darveloper
              </Descriptions.Item>
</Descriptions>
          </Card>
         </div>
         </div>
    );
  }
}
export default Friends;