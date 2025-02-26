"use client";
import React, { useState } from "react";
import { Dropdown, Menu, Space } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const LanguageSwitcher = () => {
  const router = useRouter();
  const [language, setLanguage] = useState("EN");

  const menu = (
    <Menu
      onClick={(e) => {
        setLanguage(e.key);
      }}
    >
      <Menu.Item key="EN">English</Menu.Item>
      <Menu.Item key="TH">ภาษาไทย</Menu.Item>
    </Menu>
  );

  return (
    <div style={{ position: "absolute", top: 20, right: 20 }}>
      <Dropdown overlay={menu} trigger={["click"]}>
        <Space
          style={{
            cursor: "pointer",
            background: "white",
            padding: "1px 30px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            fontWeight: "bold",
          }}
        >

          {language}
        </Space>
      </Dropdown>
    </div>
  );
};

export default LanguageSwitcher;
