import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const menu = () => {
  let menuItems = [
    {
      label: (
        <Link to="/">
          <HomeOutlined />
        </Link>
      ),
      key: "home",
    },
    {
      label: "型体资料",
      key: "XXZL",
      children: [
        { label: <Link to="/llzy">部位规格建立</Link>, key: "" },
        { label: <Link to="/XXZLList">型体部位對照</Link>, key: "XXZLList" },
      ],
    },
    {
      label: "领料库存作业",
      key: "llkczy",
      children: [{ label: <Link to="/llzy">领料作业</Link>, key: "llzy" }],
    },
  ];

  let menuClick = (e) => {};
  return (
    <div>
      <Menu
        items={menuItems}
        onClick={menuClick}
        mode="horizontal"
        theme="dark"
      />
    </div>
  );
};

export default menu;
