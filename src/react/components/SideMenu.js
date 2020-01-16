import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Icon, Layout } from "antd";
import "./SideMenu.css";
import { connect, withAsyncAction } from "../HOCs";
const { Header, Footer, Sider, Content } = Layout;

class SideMenu extends React.Component {
  //   handleLogout = event => {
  //     event.preventDefault();
  //     this.props.logout();
  //   };

  render() {
    return (
      <React.Fragment>
        {/* {this.props.isAuthenticated && ( */}
        <div style={{ height: "100%" }}>
          <Header
            style={{
              backgroundColor: "#001529"
            }}
          >
            <h1
              style={{
                fontFamily: "Orbitron",
                color: "whitesmoke"
              }}
            >
              GamerTagged
            </h1>
          </Header>
          <Layout>
            <Sider
              width={256}
              style={{
                backgroundColor: "#001529"
              }}
            >
              <Menu
                theme="dark"
                onClick={this.handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={["1"]}
                mode="inline"
              >
                <Menu.Item key="1">
                  <NavLink to={`/homepage/`} activeClassName="chosen">
                    <Icon type="home" />
                    Home
                  </NavLink>
                </Menu.Item>

                <Menu.Item key="2">
                  <NavLink to={`/matches/`} activeClassName="chosen">
                    <Icon type="heart" />
                    Matches
                  </NavLink>
                </Menu.Item>

                <Menu.Item key="3">
                  <NavLink to={`/profile/`} activeClassName="chosen">
                    <Icon type="user" />
                    Profile
                  </NavLink>
                </Menu.Item>

                <Menu.Item key="4">
                  <NavLink to={`/friendspage/`} activeClassName="chosen">
                    <Icon type="team" />
                    Friends
                  </NavLink>
                </Menu.Item>

                <Menu.Item key="5">
                  <NavLink to={`/inbox/`} activeClassName="chosen">
                    <Icon type="mail" />
                    Inbox
                  </NavLink>
                </Menu.Item>

                <Menu.Item key="6">
                  <NavLink to={`/contact Us/`} activeClassName="chosen">
                    <Icon type="customer-service" />
                    Contact Us
                  </NavLink>
                </Menu.Item>

                <Menu.Item key="7">
                  <NavLink to={`/forums/`} activeClassName="chosen">
                    <Icon type="read" />
                    Forums
                  </NavLink>
                </Menu.Item>

                <Menu.Item key="8">
                  <NavLink to={`/settings/`} activeClassName="chosen">
                    <Icon type="setting" />
                    Settings
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
            <Layout>
              <Content>{this.props.children}</Content>
              <Footer style={{ backgroundColor: "#001529" }}></Footer>
            </Layout>
          </Layout>
        </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.auth.login.result && state.auth.login.result.username
  };
};

export default connect(mapStateToProps)(
  withAsyncAction("auth", "logout")(SideMenu)
);
// export default SideMenu;
