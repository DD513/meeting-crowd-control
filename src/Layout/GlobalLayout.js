/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import "./GlobalLayout.less";
import HeaderComponent from "./header";
const { Content, Footer } = Layout;

const LayoutWithRoute = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Layout id="global">
      <HeaderComponent windowSize={windowSize} />
      <Content>
        <Outlet />
      </Content>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#F0F0F0",
        }}
      >
        &copy; Digi+ Talent AI North No.2
      </Footer>
    </Layout>
  );
};

export default LayoutWithRoute;
