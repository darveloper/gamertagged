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
        <Form className="login-form" onSubmit={this.handleLogin}>
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
              value={this.state.username}
              htmlType="text"
              onChange={this.handleChange}
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
              value={this.state.password}
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
              Login{" "}
            </Button>
          </Form.Item>
          <Form.Item></Form.Item>
        </Form>
      </React.Fragment>
    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm);
