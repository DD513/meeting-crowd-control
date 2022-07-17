import React from "react";
import { Button, Row, Col, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { MailOutlined, UserOutlined, LockOutlined } from "@ant-design/icons";
import "./index.less";

function SignUp() {
  const dispatch = useDispatch();

  const handleSignUp = (payload) => {
    dispatch({ type: "POST_UserSignUp", payload });
    console.log(payload, "qe");
  };
  return (
    <div id="signup">
      <Row justify="center" align="middle" className="wrapper">
        <Col span={24}>
          <Row justify="center" className="loginBlock">
            <Col xs={24} md={12}>
              <h2>
                註冊
                <br />
                Sign Up
              </h2>
            </Col>
          </Row>
          <Row justify="center" className="loginForm">
            <Col xs={12} md={6}>
              <Form name="basic" onFinish={handleSignUp}>
                <Form.Item
                  hasFeedback
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "輸入的信箱無效!",
                    },
                    {
                      required: true,
                      message: "請輸入你的信箱!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="信箱"
                  />
                </Form.Item>
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "請輸入帳號!",
                    },
                  ]}
                >
                  <Input
                    prefix={<MailOutlined className="site-form-item-icon" />}
                    placeholder="帳號"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "請輸入密碼",
                    },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="密碼"
                  />
                </Form.Item>
                <Form.Item
                  name="confirm"
                  dependencies={["password"]}
                  rules={[
                    {
                      required: true,
                      message: "請確認密碼！",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error("輸入的密碼不符！"));
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="確認密碼"
                  />
                </Form.Item>
                <Form.Item>
                  <Button htmlType="submit" className="loginButton">
                    註冊
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default SignUp;
