import React from "react";
import "./form.less";
import { Button, Row, Col, Form, Input, DatePicker, Radio, Select } from "antd";

function UserForm() {
  const layout = {
    labelCol: {
      //   xs: 24,
      md: 4,
      lg: 6,
    },
    wrapperCol: {
      //   xs: 24,
      md: 20,
      lg: 14,
    },
  };
  /* eslint-disable no-template-curly-in-string */

  const validateMessages = {
    required: "請輸入${label}",
    types: {
      email: "請輸入${label}",
      number: "${label} 是無效的 ! ",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div id="userForm">
      <Row justify="center">
        <Col xs={24}>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}>
            <Form.Item
              name="name"
              label="暱稱"
              rules={[
                {
                  required: true,
                },
              ]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="信箱"
              rules={[
                {
                  required: true,
                },
                {
                  type: "email",
                },
              ]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="radio-button"
              label="性別"
              rules={[
                {
                  required: true,
                },
              ]}>
              <Radio.Group>
                <Radio value="female">女</Radio>
                <Radio value="male">男</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="生日">
              <DatePicker />
            </Form.Item>
            <Form.Item label="公司">
              <Input />
            </Form.Item>
            <Form.Item label="地址" className="addressItem">
              <Row>
                <Col xs={24} lg={12}>
                  <Select placeholder="縣市">
                    <Select.Option value="demo">南投縣</Select.Option>
                  </Select>
                </Col>
                <Col xs={24} lg={12}>
                  <Select placeholder="地區">
                    <Select.Option value="demo">南投市</Select.Option>
                  </Select>
                </Col>
              </Row>

              <Input />
            </Form.Item>

            <Form.Item
              wrapperCol={{ ...layout.wrapperCol, offset: 2 }}
              className="submitButton">
              <Button type="dashed" htmlType="submit">
                送出
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default UserForm;
