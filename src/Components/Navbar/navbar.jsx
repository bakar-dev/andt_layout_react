import React from "react";
import "antd/dist/antd.css";
import { Layout, Row, Col, Avatar } from "antd";
import {
  DownOutlined,
  UserOutlined,
  UnorderedListOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import Logo from "../Logo/logo";
import SearchBox from "../SearchBox/searchBox";
import DropDown from "../Dropdown/dropdown";
import Drawer from "../Drawer/drawer";
import SideBarLeft from "../SideBarLeft/sidebarLeft";
import Profile from "../Profile/profile";
import "../../assets/Style/styles.scss";
import { USER } from "../../Constants/commonValues";

const { Header } = Layout;

const Navbar = () => {
  return (
    <>
      <Header className="header">
        <Row>
          <Col xs={0} sm={0} md={0} lg={8} xl={8}>
            <Logo />
          </Col>
          <Col xs={3} sm={3} md={4} lg={0} xl={0}>
            <Drawer>
              {" "}
              <Profile user={USER} />
              <br />
              <SideBarLeft />{" "}
            </Drawer>
          </Col>
          <Col xs={18} sm={18} md={16} lg={8} xl={8}>
            <SearchBox />
          </Col>
          <Col xs={3} sm={3} md={4} lg={0} xl={0}>
            <span>
              {" "}
              <UnorderedListOutlined style={{ fontSize: "18px" }} />
            </span>
          </Col>
          <Col xs={0} sm={0} md={0} lg={8} xl={8}>
            <Avatar size="small" icon={<UserOutlined />} />{" "}
            <span className="mr-4">admin.com/jin </span>
            <DropDown
              items={[
                { label: "Logout", key: "logout", icon: <LogoutOutlined /> },
              ]}
              selectedKeys={["logout"]}
            >
              <DownOutlined />
            </DropDown>
          </Col>
        </Row>
      </Header>
    </>
  );
};

export default Navbar;
