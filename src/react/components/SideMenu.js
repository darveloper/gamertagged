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
        <Header style={{ backgroundColor: "#001529" }}>
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
          <Sider width={256} style={{ backgroundColor: "#001529" }}>
            <Menu
              theme="dark"
              onClick={this.handleClick}
              style={{ width: 256 }}
              defaultSelectedKeys={["1"]}
              mode="inline"
            >
              <Menu.Item key="1">
                <NavLink to={`/matches/`} activeClassName="chosen">
                  <Icon type="heart" />
                  Matches
                </NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to={`/profile/`} activeClassName="chosen">
                  <Icon type="user" />
                  Profile
                </NavLink>
              </Menu.Item>

              <Menu.Item key="3">
                <NavLink to={`/friendspage/`} activeClassName="chosen">
                  <Icon type="team" />
                  Friends
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
