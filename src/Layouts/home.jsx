import React, { useState } from "react";
import { Row, Col, Layout } from "antd";

import Feeds from "../Containers/Feeds/feeds";

import Navbar from "../Components/Navbar/navbar";
import Menu from "../Components/Menu/menu";
import SideBarLeft from "../Components/SideBarLeft/sidebarLeft";
import SideBarRight from "../Components/SideBarRight/sidebarRight";

import "react-perfect-scrollbar/dist/css/styles.css";

const TOP_MENU_ITEMS = [
  { label: "Global", key: "global" },
  { label: "Following" },
  { label: "My Activities" },
  { label: "Purchases" },
];

const Home = () => {
  return (
    <>
      <Row className="mb-2">
        <Col span={24}>
          <Navbar />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={3}></Col>
            <Col
              className="gutter-row"
              span={4}
              style={{
                paddingRight: "none",
              }}
            >
              <SideBarLeft />
            </Col>
            <Col
              className="gutter-row"
              span={10}
              style={{
                paddingLeft: "10px",
                paddingRight: "none",
                borderLeft: "1px solid lightgray",
                borderRight: "1px solid lightgray",
              }}
            >
              <Menu
                items={TOP_MENU_ITEMS}
                selectedKeys={["global"]}
                mode="horizontal"
              />
              <Feeds />
            </Col>
            <Col className="gutter-row" span={4}>
              <SideBarRight />
            </Col>
            <Col className="gutter-row" span={3}></Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Home;
