import React from "react";
import { Layout } from "antd";
import SideMenu from "./SideMenu";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
const { Content } = Layout;

const LayoutWithRoute = ({ children }) => {
  return (
    <Layout>
      <SideMenu />
      <Layout>
        <Content>
          <Outlet />
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default LayoutWithRoute;
