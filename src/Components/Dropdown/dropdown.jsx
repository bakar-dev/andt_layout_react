import React from "react";
import { Dropdown } from "antd";
import MenuItems from "../Menu/menu";

const DropdownMenu = ({ children, items, selectedKeys }) => {
  const menu = <MenuItems items={items} selectedKeys={selectedKeys} />;

  return <Dropdown overlay={menu}>{children}</Dropdown>;
};

export default DropdownMenu;
