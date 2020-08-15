import React from "react";
import { Dropdown } from "antd";
import MenuItems from "../Menu/menu";

const DropdownMenu = ({ children, items }) => {
  const menu = <MenuItems items={items} />;

  return <Dropdown overlay={menu}>{children}</Dropdown>;
};

export default DropdownMenu;
