import React from "react";
import "antd/dist/antd.css";

import { Layout, Row, Col, Avatar } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import Logo from "../Logo/logo";
import SearchBox from "../SearchBox/searchBox";
import DropDown from "../Dropdown/dropdown";
const { Header } = Layout;

const Navbar = () => {
  const NAVBAR_ITEMS = [
    { item: <Logo /> },
    { item: <SearchBox /> },
    {
      item: (
        <div>
          <Avatar size="small" icon={<UserOutlined />} />{" "}
          <span className="mr-4">admin.com/jin </span>
          <DropDown items={[{ label: "Logout" }]}>
            <DownOutlined />
          </DropDown>
        </div>
      ),
    },
  ];

  return (
    <>
      <Header className="header">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {NAVBAR_ITEMS.map(({ item }, i) => (
            <Col className="gutter-row" key={i} span={8}>
              {" "}
              {item}
            </Col>
          ))}
        </Row>
      </Header>
    </>
  );
};

export default Navbar;
