import React from "react";
import { Form, Icon, Input, Button } from "antd";
import "antd/dist/antd.css";
import "./LoginForm.css";

import { withAsyncAction } from "../HOCs";

class LoginForm extends React.Component {
  state = { username: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <img
          className="Logo"
          src="https://i.imgur.com/I3PbSAq.png"
          alt="logo"
        />
        <h1 style={{ color: "white", fontFamily: "Orbitron" }}> Sign In</h1>
        <Form className="login-form" onSubmit={this.handleLogin}>
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
              required
              type="text"
              autoFocus
              onChange={this.handleChange}
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="password"
              type="password"
              required
              onChange={this.handleChange}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              href="/profile"
            >
              {" "}
              Submit{" "}
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              type="secondary"
              htmlType="submit"
              className="login-form-button"
              href="/Register"
            >
              {" "}
              New User? Register Here{" "}
            </Button>
          </Form.Item>
        </Form>
      </React.Fragment>
    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm);
