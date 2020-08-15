import React from "react";
import "antd/dist/antd.css";
import { Layout, Row, Col, Avatar, Space } from "antd";
import { DownOutlined, UserOutlined, FilterOutlined } from "@ant-design/icons";

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
          <Col xs={0} sm={0} md={0} lg={8} xl={7}>
            <Logo />
          </Col>
          <Col xs={2} sm={2} md={2} lg={0} xl={0}>
            <Drawer>
              {" "}
              <Profile user={USER} />
              <br />
              <SideBarLeft />{" "}
            </Drawer>
          </Col>
          <Col xs={20} sm={20} md={20} lg={8} xl={10}>
            <SearchBox />
          </Col>
          <Col xs={2} sm={2} md={2} lg={0} xl={0}>
            <FilterOutlined />
          </Col>
          <Col xs={0} sm={0} md={0} lg={8} xl={7}>
            <Avatar size="small" icon={<UserOutlined />} />{" "}
            <span className="mr-4">admin.com/jin </span>
            <DropDown items={[{ label: "Logout" }]}>
              <DownOutlined />
            </DropDown>
          </Col>
        </Row>
      </Header>
    </>
  );
};

export default Navbar;
