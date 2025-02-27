import React from "react";
import { Table, Checkbox, Button, Space } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  name: string;
  gender: string;
  mobile: string;
  nationality: string;
}

const data: DataType[] = [
  {
    key: "1",
    name: "test12 test12",
    gender: "Male",
    mobile: "+660123456789",
    nationality: "Thai",
  },
  {
    key: "2",
    name: "test12 test12",
    gender: "Male",
    mobile: "+660123456789",
    nationality: "Thai",
  },
];

const columns: ColumnsType<DataType> = [
  {
    title: <Checkbox />,
    dataIndex: "key",
    render: () => <Checkbox />,
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Gender",
    dataIndex: "gender",
  },
  {
    title: "Mobile Phone",
    dataIndex: "mobile",
  },
  {
    title: "Nationality",
    dataIndex: "nationality",
  },
  {
    title: "Manage",
    dataIndex: "manage",
    render: () => (
      <Space>
        <Button type="link">EDIT</Button>
        <Button type="link" danger>
          DELETE
        </Button>
      </Space>
    ),
  },
];

const CustomTable: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
        <Checkbox>Select All</Checkbox>
        <Button danger>DELETE</Button>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ position: ["bottomRight"], pageSize: 5 }}
      />
    </div>
  );
};

export default CustomTable;
