import React from "react";
import { Form, Icon, Input, Button } from "antd";
import "./LoginForm.css";


class RegisterForm extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Form className="login-form">
          <Form.Item htmlFor="username">
            Create a Username
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item htmlFor="password">
            Create a Password
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              href="/questionnaire"
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
