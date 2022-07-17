import React from "react";
import { useDispatch } from "react-redux";
import { Button, Row, Col, Form, Input, Checkbox } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./index.less";

function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (payload) => {
    dispatch({ type: "POST_UserLogin", payload });
  };
  return (
    <div id="login">
      <Row justify="center" align="middle" className="wrapper">
        <Col span={24}>
          <Row justify="center" className="loginBlock">
            <Col xs={24} md={12}>
              <h2>
                登入
                <br />
                Login
              </h2>
            </Col>
          </Row>
          <Row justify="center" className="signupBlock">
            <Col xs={24} md={12}>
              <h2>您有帳戶了嗎?</h2>
            </Col>
          </Row>
          <Row justify="center" className="loginForm">
            <Col xs={12} md={6}>
              <Form name="basic" onFinish={handleLogin}>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "請輸入帳號!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
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
                <Form.Item>
                  <Button htmlType="submit" className="loginButton">
                    登入
                  </Button>
                </Form.Item>
                <Row justify="center" align="middle" className="actionBlock">
                  <Col xs={12}>
                    <Form.Item name="remember" valuePropName="checked">
                      <Checkbox>記住我</Checkbox>
                    </Form.Item>
                  </Col>
                  <Col xs={12} className="forgetLink">
                    <Link to="/forget">
                      <h4>忘記密碼</h4>
                    </Link>
                  </Col>
                </Row>
                <Row>
                  <Col className="signupLink">
                    <Link to="/signUp">
                      <h4>－ 立即註冊 －</h4>
                    </Link>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
