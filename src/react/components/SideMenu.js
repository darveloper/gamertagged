import React from "react";
import { NavLink, Route } from "react-router-dom";
import { Menu, Icon, Layout } from "antd";
// import { withAsyncAction, connect } from "../HOCs";
import "./SideMenu.css";
import Home from "../pages/Home";
const {  Sider } = Layout;

class SideMenu extends React.Component {
//   handleLogout = event => {
//     event.preventDefault();
//     this.props.logout();
//   };

  render() {
    return (
      <React.Fragment>
        {/* {this.props.isAuthenticated && ( */}
          <Sider>
            <div className="logo">
              <img
                alt="user"
                style={{ width: "35%", objectFit: "contain" }}
                src="https://i.imgur.com/FuOIVry.png"
              />
            </div>
            <Menu
              theme="dark"
              onClick={this.handleClick}
              style={{ width: 200 }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
            >
              <Menu.Item key="2">
                <NavLink to={`/questionnaire/`} activeClassName="chosen">
                  <Icon type="home" />
                  Home
                </NavLink>
                <Route
                    path="/"
                    component={Home}
                    exact 
                />
              </Menu.Item>
              <Menu.Item key="1">
                <NavLink
                  to={`/profile/${this.props.username}`}
                  activeClassName="chosen"
                >
                  <Icon type="user" />
                  Profile
                </NavLink>
              </Menu.Item>

              <Menu.Item>
                <NavLink to="/" onClick={this.handleLogout}>
                  <Icon type="logout" />
                  Logout
                </NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
        // )}
      </React.Fragment>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     username: state.auth.login.result && state.auth.login.result.username
//   };
// };
// 
// export default connect(mapStateToProps)(
//   withAsyncAction("auth", "logout")(SideMenu)
// );
export default SideMenu;