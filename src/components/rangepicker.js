import React from "react";
import { Button, DatePicker, Space } from "antd";

let { RangePicker } = DatePicker;

const rangepicker = ({ getList }) => {
  return (
    <div>
      <Space>
        <RangePicker format="YYYY-MM-DD" />
        <Button onClick={getList}>getList</Button>
      </Space>
    </div>
  );
};

export default rangepicker;
