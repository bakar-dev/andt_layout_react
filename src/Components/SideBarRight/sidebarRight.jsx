import React from "react";
import { Input, Select, DatePicker } from "antd";

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
        <Option value="paid">Paid Content</Option>
        <Option value="free">Free Content</Option>
        <Option value="all">All Content</Option>
      </Select>

      <RangePicker />
    </div>
  );
};

export default SidebarRight;
