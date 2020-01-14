import React from "react";
import { Menu, Icon } from "antd";
import { withAsyncAction, connect } from "../HOCs";
import {Link} from "react-router-dom"; 

class TopMenu extends React.Component {
  handleLogout = event => {
    // event.preventDefault();
    this.props.logout();
  };
  render() {
    return (
      <Menu onClick={this.handleLogout} mode="horizontal">
        <Menu.Item>
          <Link to="/">
            <Icon type="logout" />
            Logout
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}
const mapStateToProps = state => {
  return {
    username: state.auth.login.result && state.auth.login.result.username
  };
};

export default connect(mapStateToProps)(
  withAsyncAction("auth", "logout")(TopMenu)
);
