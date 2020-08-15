import React, { useState } from "react";
import { Drawer } from "antd";
import { RightCircleOutlined } from "@ant-design/icons";

const DrawerNav = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div>
      <RightCircleOutlined onClick={showDrawer} />
      <Drawer
        title={new Date().toLocaleString()}
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        {children}
      </Drawer>
    </div>
  );
};

export default DrawerNav;
