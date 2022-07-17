import React, { useState } from "react";

import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  DashboardOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import _ from "lodash";
import { Link, useLocation } from "react-router-dom";

const { Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const MenuList = [
    {
      menuIcon: <HomeOutlined />,
      menuTitle: "Home",
      menuLink: "/",
    },
    {
      menuIcon: <TeamOutlined />,
      menuTitle: "Login",
      menuLink: "/Login",
    },
    {
      menuIcon: <DashboardOutlined />,
      menuTitle: "Counter",
      menuLink: "/Counter",
    },
  ];

  const onCollapse = (collapsed) => setCollapsed(collapsed);
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
      >
        {_.map(MenuList, (item, index) => (
          <Menu.Item key={item.menuTitle}>
            <Link to={item.menuLink} key={index}>
              {item.menuIcon}
              <span>{item.menuTitle}</span>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default App;
