import React, { useState } from "react";
// import TestAdd from "../components/testAdd";
import {
  DatePicker,
  Button,
  Modal,
  Space,
  Table,
  message,
  Popconfirm,
  Input,
} from "antd";
import { DeleteOutlined, PlusCircleTwoTone } from "@ant-design/icons";
import axios from "axios";
let { RangePicker } = DatePicker;
// import RangePicker from "../components/rangepicker";

const Llzy = () => {
  // Popconfirm
  let confirm = (e) => {
    console.log(e);
    message.success("Click on Yes");
  };

  let cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };

  // Table Setting
  let columns = [
    {
      title: "單據類別",
      dataIndex: "dglb",
    },
    {
      title: "異動單號",
      dataIndex: "ksdh",
      render: (text) => <a onClick={showModal}>{text}</a>,
    },
    {
      title: "異動日期",
      dataIndex: "ksrq",
    },
    {
      title: "來源類別",
      dataIndex: "lylb",
    },
    {
      title: "來源單號",
      dataIndex: "lydh",
    },
    {
      title: "備註",
      dataIndex: "bz",
    },
    {
      title: "",
      key: "action",
      render: (record) => (
        // <Button
        //   onClick={() => {
        //     console.log("KSDH :", record.ksdh);
        //     alert(datePicker[0] + "," + datePicker[1]);
        //   }}
        //   icon={<DeleteOutlined />}
        //   type="link"
        // />
        <Popconfirm
          title="Are you sure to delete this task?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <DeleteOutlined />
        </Popconfirm>
      ),
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

  let [keyValue, setKeyValue] = useState("");
  let [datePicker, setDatePicker] = useState([]);
  let [data, setData] = useState([]);

  let rangePicker = (date, dateString) => {
    // console.log(date, dateString);
    // console.log(dateString[0] + " & " + dateString[1]);
    setDatePicker(dateString);
  };

  let List = () => {
    // console.log(datePicker[0] + " & " + datePicker[1]);
    axios({
      method: "get",
      baseURL: "http://localhost:9090",
      url: "/kc/getKSYD/" + datePicker[0] + "/" + datePicker[1],
      "Content-Type": "application/json",
    })
      .then((result) => {
        // console.log(result.data);
        setData(result.data);
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        setKeyValue(new Date());
      });
  };
  return (
    <div style={{ minHeight: "70vh", padding: "0.5rem 1rem" }}>
      <Space>
        <RangePicker
          format="YYYY-MM-DD"
          onChange={rangePicker}
          key={keyValue}
        />
        <Button onClick={List}>列表</Button>
        <Button type="primary" onClick={showModal}>
          新增
        </Button>
      </Space>

      <Table
        columns={columns}
        dataSource={data}
        rowKey="ksdh"
        style={{ padding: "0.5rem 0rem" }}
      />
      <Modal
        title="Basic Modal-Table"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <Input.Group compact>
            <Input style={{ width: "50%" }} placeholder="單號(自動)" disabled />
            <DatePicker />
            <Button type="primary">
              <PlusCircleTwoTone />
            </Button>
          </Input.Group>
        </div>
        <Table
          // dataSource={mydataSource}
          // rowKey="ksdh"
          style={{ padding: "0.5rem 0rem" }}
        />
      </Modal>
    </div>
  );
};

export default Llzy;
