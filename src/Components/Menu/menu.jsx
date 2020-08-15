import React from "react";
import { Menu } from "antd";

const MenuItems = ({ items, mode, selectedKeys }) => {
  let style = "";

  const getStyle = (key) => {
    if (key === selectedKeys[0] && mode === "horizontal") {
      return (style = {
        color: "black",
        borderBottom: "2px solid black",
      });
    } else if (key === selectedKeys[0] && mode === "inline") {
      return (style = {
        color: "black",
        borderRight: "2px solid black",
        backgroundColor: "lightgray",
      });
    } else {
      return (style = { color: "black", borderBottom: "none" });
    }
  };

  return (
    <Menu
      mode={mode}
      selectedKeys={selectedKeys}
      style={{ alignSelf: "center" }}
    >
      {items.map(({ label, key, icon }, i) => (
        <Menu.Item
          key={key || i}
          icon={icon}
          onClick={() => console.log("menu item clicked")}
          style={getStyle(key)}
        >
          <span className="mt-2">{label}</span>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default MenuItems;
