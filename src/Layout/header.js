/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Dropdown, Layout, Menu, Avatar, Button, Drawer } from "antd";
import "./GlobalLayout.less";
import images from "../config/images";
import {
  FaUserAlt,
  FaEdit,
  FaCog,
  FaSignInAlt,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";

const { Header } = Layout;

function HeaderComponent(props) {
  const { windowSize } = props;
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const servicesMenu = (
    <Menu
      className="servicesMenu"
      items={[
        {
          label: <a href="/">即時影像</a>,
          key: "liveImage",
        },
        {
          label: <a href="/">溫度偵測</a>,
          key: "temperatureSensing",
        },
        {
          label: "人數提醒",
          key: "personAlert",
        },
      ]}
    />
  );
  const userMenu = (
    <Menu
      className="userDropdown"
      items={[
        {
          icon: <FaEdit />,
          label: "修改密碼",
          key: "editPassword",
        },
        {
          icon: <FaCog />,
          label: "帳戶設定",
          key: "accountSet",
        },
        {
          icon:
            localStorage.getItem("token") === null ? (
              <FaSignInAlt />
            ) : (
              <FaSignOutAlt />
            ),
          label: (
            <a href="/login">
              {localStorage.getItem("token") === null ? "登入" : "登出"}
            </a>
          ),
          key: "signin",
        },
      ]}
    />
  );
  const items = [
    {
      label: "關於我們",
      key: "about",
    },
    {
      label: (
        <Dropdown overlay={servicesMenu} className="servicesMenu">
          <a onClick={(e) => e.preventDefault()}>服務內容</a>
        </Dropdown>
      ),
      key: "services",
    },
    {
      label: "會議室查詢",
      key: "become",
    },
    {
      label: "常見問題",
      key: "question",
    },
    {
      label: "聯絡我們",
      key: "contact",
    },
  ];
  return (
    <div>
      <Header style={{ padding: "30px" }}>
        <a href="/" className="logoBlock">
          <img src={images.logo} alt="logo" width={130} height={40} />
        </a>
        <Menu mode="horizontal" items={items} className="menuBar" />
        <Dropdown
          overlay={userMenu}
          trigger={["click"]}
          id={windowSize.width > 992 ? "hide" : "show"}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Avatar size={36} icon={<FaUserAlt />} />
          </a>
        </Dropdown>
        <Button
          type="primary"
          onClick={showDrawer}
          className={windowSize.width > 992 ? "hide barIcon" : "show barIcon"}
        >
          <FaBars />
        </Button>
        <Drawer
          title={
            <a href="/" className="logoBlock">
              <img
                src={images.logo}
                alt="logo"
                width={100}
                height={40}
                className="logoImage"
              />
            </a>
          }
          placement="right"
          onClose={onClose}
          visible={visible}
        >
          <Menu mode="vertical" items={items} className="menuBarList" />
        </Drawer>
      </Header>
    </div>
  );
}

export default HeaderComponent;
