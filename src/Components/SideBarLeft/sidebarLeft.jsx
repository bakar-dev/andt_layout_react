import React from "react";
import {
  NotificationOutlined,
  HomeOutlined,
  MailOutlined,
  CalendarOutlined,
  UserOutlined,
  BookOutlined,
} from "@ant-design/icons";
import Menu from "../Menu/menu";
import { Button } from "antd";

const SIDE_MENU_ITEMS = [
  { label: "Home", key: "home", icon: <HomeOutlined /> },
  { label: "Dictionary", icon: <BookOutlined /> },
  { label: "Notifications", icon: <NotificationOutlined /> },
  { label: "Requests", icon: <MailOutlined /> },
  { label: "Calendar", icon: <CalendarOutlined /> },
  { label: "Profile", icon: <UserOutlined /> },
];
const buttonStyle = {
  background: "black",
  color: "White",
  width: "60%",
};

const Sidebar = () => {
  return (
    <>
      <Menu items={SIDE_MENU_ITEMS} selectedKeys={["home"]} mode="inline" />
      <Button style={buttonStyle} shape="round" size="small" className="m-4">
        <NotificationOutlined /> Post
      </Button>
    </>
  );
};

export default Sidebar;
