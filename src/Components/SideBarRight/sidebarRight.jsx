import React from "react";
import { Input, Select, DatePicker } from "antd";

import { CONTENT_TYPES } from "../../Constants/commonValues";

const { Option } = Select;
const { RangePicker } = DatePicker;

const SidebarRight = () => {
  return (
    <div className="mt-4">
      <b>Content Filters</b>
      <Input placeholder="keywords" className="mt-2" />
      <Select
        placeholder="Content Type"
        className="mt-2 mb-2"
        style={{ width: "100%" }}
      >
        {CONTENT_TYPES.map(({ value, label }) => (
          <Option value={value}>{label}</Option>
        ))}
      </Select>

      <RangePicker />
    </div>
  );
};

export default SidebarRight;
