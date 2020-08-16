import React from "react";
import { Menu, Row, Col } from "antd";

const MenuItems = ({ items, mode, selectedKeys }) => {
  const getStyle = (key) => {
    if (key === selectedKeys[0] && mode === "horizontal") {
      return {
        color: "black",
        borderBottom: "3px solid black",
        textAlign: "center",
      };
    } else if (key === selectedKeys[0] && mode === "inline") {
      return {
        color: "black",
        border: "none",
        borderRight: "3px solid black",
        backgroundColor: "lightgray",
      };
    } else if (mode === "horizontal") {
      return {
        borderBottom: "none",
        textAlign: "center",
        color: "gray",
      };
    } else {
      return {
        borderBottom: "none",
        color: "gray",
      };
    }
  };

  //setting menu for horizontal mode and inline mode separatly
  let menu = null;
  if (mode === "horizontal") {
    menu = (
      <Menu mode={mode} selectedKeys={selectedKeys}>
        <Row>
          {items.map(({ label, key, icon }, i) => (
            <Col key={key || i} xs={6} sm={6} md={6} lg={6} xl={6}>
              <Menu.Item
                key={key || i}
                onClick={() => console.log("menu item clicked")}
                style={getStyle(key)}
              >
                <span className="mt-2">{label}</span>
              </Menu.Item>
            </Col>
          ))}
        </Row>
      </Menu>
    );
  } else {
    menu = (
      <Menu mode={mode}>
        {items.map(({ label, key, icon }, i) => (
          <Menu.Item
            key={key || i}
            onClick={() => console.log("menu item clicked")}
            style={getStyle(key)}
          >
            <Row>
              <Col>{icon}</Col>
              <Col className="mt-1">{label}</Col>
            </Row>
          </Menu.Item>
        ))}
      </Menu>
    );
  }

  return <>{menu}</>;
};

export default MenuItems;
