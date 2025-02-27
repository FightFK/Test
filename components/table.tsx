"use client";

import React, { useEffect, useState } from "react";
import { Table, Checkbox, Button, Space } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../src/app/redux/store";
import { resetForm } from "../src/app/redux/formSlice";

const LOCAL_STORAGE_KEY = "formData";

const CustomTable: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.form);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClearAll = () => {
    dispatch(resetForm());
    if (isClient) {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  };

  // **แสดง UI เฉพาะเมื่อเป็น client**
  if (!isClient) return null;

  const columns: ColumnsType<any> = [
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

  return (
    <div style={{ padding: "20px" }}>
      <Button onClick={handleClearAll} type="primary" danger style={{ marginBottom: "10px" }}>
        Delete
      </Button>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default CustomTable;
