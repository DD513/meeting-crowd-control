import React from "react";
import "./index.less";
import { Image, Row, Col, Card, Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import UserForm from "../../components/Form/userForm";

function UserProfile() {
  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <div id="userProfile">
      <Row justify="center" align="middle" className="userProfile">
        <Col xs={20}>
          <div className="userCard">
            <Card title="編輯使用者資料" bordered={false}>
              <Row justify="center" align="middle">
                <Col xs={24} lg={12}>
                  <Image src="https://i.pravatar.cc/?img=20" />
                  <Upload {...props} className="uploadButton">
                    <Button icon={<UploadOutlined />}>上傳大頭貼</Button>
                  </Upload>
                </Col>
                <Col xs={24} lg={12} className="userBlock">
                  <UserForm />
                </Col>
              </Row>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default UserProfile;
