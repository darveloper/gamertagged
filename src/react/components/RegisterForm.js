import React from "react";
import { Form, Icon, Input, Button } from "antd";
import "./LoginForm.css";
import "antd/dist/antd.css";
import { Spinner } from ".";
import { withAsyncAction } from "../HOCs";
import { Link } from "react-router-dom";
class RegisterForm extends React.Component {
  state = { username: "", password: "", displayName: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.postUser(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { loading, error } = this.props;
    return (
      <React.Fragment>
        <Form className="login-form" onSubmit={this.handleLogin}>
          <Form.Item htmlFor="username">
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
              required
              type="text"
              autoFocus
              onChange={this.handleChange}
            />
          </Form.Item>
          <Form.Item htmlFor="displayName">
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Display Name"
              type="text"
              autoFocus
              required
              onChange={this.handleChange}
            />
          </Form.Item>
          <Form.Item htmlFor="password">
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
              
              disable={loading}
            >
              <Link to="/questionnaire">Register</Link>
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              type="secondary"
              htmlType="submit"
              className="login-form-button"
              href="/"
              disable={loading}
            >
              Already a member? Login Here
            </Button>
          </Form.Item>
        </Form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && (
          <p id="error" style={{ color: "red" }}>
            {error.message}
          </p>
        )}
      </React.Fragment>
    );
  }
}

export default withAsyncAction("users", "postUser")(RegisterForm);
