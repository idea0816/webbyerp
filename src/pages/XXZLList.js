/**
 * @author CXY
 * @version Create Time:2023年4月11日
 * @Description 型体部位對照
 *
 */

import React, { useState } from "react";
import { Table, Modal, Button, Select } from "antd";
import BwBuild from "../pages/bwBuild";

const XXZLList = () => {
  // Table Setting
  const dataSource = [
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
  ];

  const columns = [
    { title: "" },
    {
      title: "部位代號",
      dataIndex: "name",
      key: "name",
      children: [
        {
          title: "部位類別",
          dataIndex: "age",
          key: "age",
        },
      ],
    },
    {
      title: "鞋廠部位",
      dataIndex: "age",
      key: "age",
      children: [
        {
          title: "底廠部位",
          dataIndex: "age",
          key: "age",
        },
      ],
    },
    {
      title: "部位說明",
      children: [
        {
          title: "項次",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "顏色",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "底模斬刀",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "花輪",
          dataIndex: "age",
          key: "age",
        },
      ],
    },
    {
      title: "斬刀",
      dataIndex: "age",
      key: "age",
      children: [
        {
          title: "寬度",
          dataIndex: "age",
          key: "age",
        },
      ],
    },
    {
      title: "楦頭編號",
      dataIndex: "age",
      key: "age",
      children: [
        {
          title: "厚度",
          dataIndex: "age",
          key: "age",
        },
      ],
    },
  ];

  // Modal
  let [isModalOpen, setIsModalOpen] = useState(false);
  let showModal = () => {
    setIsModalOpen(true);
    // <TestAdd isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />;
  };

  let handleOk = () => {
    setIsModalOpen(false);
  };
  let handleCancel = () => {
    setIsModalOpen(false);
  };

  // Select
  let testOption = [
    {
      value: "jack",
      label: "Jack",
    },
    {
      value: "lucy",
      label: "Lucy",
    },
    {
      value: "tom",
      label: "Tom",
    },
  ];

  return (
    <div>
      <Select
        showSearch
        allowClear
        placeholder="Select a ARTICLE"
        style={{ width: 120 }}
        options={testOption}
      />
      <Table
        columns={columns}
        dataSource={dataSource}
        rowKey="depNo"
        align="center"
        style={{ padding: "0.5rem 0rem" }}
        onRow={() => {
          return {
            onMouseEnter: (event) => {
              let tr = event.target.parentNode; //拿到tr标签
              tr.style.color = "#8be0f1";
            }, // Mouse 移入
            onMouseLeave: (event) => {
              let tr = event.target.parentNode; //拿到tr标签
              tr.style.color = "black";
            }, // Mouse 移出
          };
        }}
      />
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal-Table"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <BwBuild />
        </div>
      </Modal>
    </div>
  );
};

export default XXZLList;
