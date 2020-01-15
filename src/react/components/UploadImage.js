import React from "react";
import { Upload, message, Button, Icon, Form, Input } from "antd";
import { connect, withAsyncAction } from "../HOCs";
import "antd/dist/antd.css";

class UploadImage extends React.Component {
  handleUpload = event => {
    event.preventDefault();
    console.log("uploaded!");
    const formData = new FormData(event.target);
    this.props.putUserImage(formData);
  };
  render() {
    return (
      <React.Fragment>
        {this.props.username === this.props.loggedInUsername && (
          <Form
            
            style={{ display: "flex", flexDirection: "row" }}
          >
            <Input
              style={{ borderRadius: "0", paddingTop: "10px" }}
              
              size="small"
              type="file"
              name="picture"
            />
            <Button
              shape="round"
              theme="primary"
              size="small"
              type="submit"
              value="Upload Picture"
              onSubmit={this.handleUpload}
            >
              <Icon type="upload" />{" "}
              Upload
            </Button>
          </Form>
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    loggedInUsername: state.auth.login.result.username
  };
};
export default connect(mapStateToProps)(
  withAsyncAction("users", "putUserImage")(UploadImage)
);
