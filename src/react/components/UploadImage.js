import React from "react";
import { Upload, message, Button, Icon } from "antd";
import "antd/dist/antd.css";

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

class UploadImage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Upload {...props}>
          <Button size="small" style={{ margin: "10px" }} type="ghost">
            <Icon type="upload" /> Click to Upload
          </Button>
        </Upload>
      </React.Fragment>
    );
  }
}

export default UploadImage;