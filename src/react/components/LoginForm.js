import React from "react";
import { Form, Icon, Input, Button } from "antd";
import 'antd/dist/antd.css'
import "./LoginForm.css";

class LoginForm extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Form className="login-form">
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
