import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import "../../assets/Style/styles.scss";

const SearchBox = () => {
  return (
    <Input
      prefix={<SearchOutlined style={{ backgroundColor: "4e4e4e" }} />}
      className="searchBox"
      placeholder="Search"
      size="small"
    />
  );
};

export default SearchBox;
