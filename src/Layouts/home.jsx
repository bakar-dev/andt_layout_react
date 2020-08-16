import React from "react";
import { Row, Col } from "antd";

import Feeds from "../Containers/Feeds/feeds";

import Navbar from "../Components/Navbar/navbar";
import Menu from "../Components/Menu/menu";
import SideBarLeft from "../Components/SideBarLeft/sidebarLeft";
import SideBarRight from "../Components/SideBarRight/sidebarRight";

import "../assets/Style/styles.scss";

import "react-perfect-scrollbar/dist/css/styles.css";

const TOP_MENU_ITEMS = [
  { label: "Global", key: "global" },
  { label: "Following" },
  { label: "My Activities" },
  { label: "Purchases" },
];

const FEED_COL_STYLE = {
  paddingLeft: "10px",
  paddingRight: "none",
  borderLeft: "1px solid lightgray",
  borderRight: "1px solid lightgray",
};

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
          <Row>
            <Col xs={0} sm={0} md={2} lg={3} xl={3}></Col>
            <Col
              xs={0}
              sm={0}
              md={0}
              lg={4}
              xl={4}
              style={{
                paddingRight: "none",
              }}
            >
              <SideBarLeft />
            </Col>
            <Col xs={24} sm={24} md={20} lg={10} xl={10} style={FEED_COL_STYLE}>
              <Menu
                items={TOP_MENU_ITEMS}
                selectedKeys={["global"]}
                mode="horizontal"
              />
              <Feeds />
            </Col>
            <Col className="ml-4 pl-4" xs={0} sm={0} md={0} lg={4} xl={4}>
              <SideBarRight />
            </Col>
            <Col xs={0} sm={0} md={2} lg={3} xl={3}></Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Home;
