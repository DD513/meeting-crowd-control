import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import "./LoginLayout.less";

const { Content } = Layout;

const LayoutWithLogin = ({}) => {
  return (
    <Layout id="loginLayout">
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default LayoutWithLogin;
