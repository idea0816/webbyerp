import React from "react";
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

const TestAdd = ({ isModalOpen, setIsModalOpen }) => {
  // Model Setting
  // let [isModalOpen, setIsModalOpen] = useState(false);

  let showModal = () => {
    setIsModalOpen(true);
  };

  let handleOk = () => {
    setIsModalOpen(false);
  };
  let handleCancel = () => {
    setIsModalOpen(false);
  };

  // tempList
  let tempList = [
    {
      title: "材料代號",
      dataIndex: "dglb",
    },
    {
      title: "中文品名",
      dataIndex: "dgname",
    },
    {
      title: "數量",
      dataIndex: "count",
    },
  ];

  const handleAdd = () => {
    // const newData = {
    //   dglb: "Edward King",
    //   dgname: "32",
    //   count: "London, Park Lane no.",
    // };
    // setMyDataSource([...mydataSource, newData]);
    // setCount(count + 1);
    alert("test");
  };

  return (
    <div>
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
            <Button type="primary" onClick={handleAdd}>
              <PlusCircleTwoTone />
            </Button>
          </Input.Group>
        </div>
        <Table
          columns={tempList}
          // dataSource={mydataSource}
          // rowKey="ksdh"
          style={{ padding: "0.5rem 0rem" }}
        />
      </Modal>
    </div>
  );
};

export default TestAdd;
