"use client";
import React, { useState } from "react";
import { Dropdown, MenuProps, Space } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const items: MenuProps["items"] = [
    { key: "en", label: "English" },
    { key: "th", label: "ภาษาไทย" },
  ];

  const handleChange = async ({ key }: { key: string }) => {
    await i18n.changeLanguage(key);
    setLanguage(key);
  };

  return (
    <Dropdown menu={{ items, onClick: handleChange }} trigger={["click"]}>
      <Space
        style={{
          cursor: "pointer",
          background: "white",
          padding: "5px 20px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          fontWeight: "bold",
        }}
      >
        {language === "en" ? "English" : "ภาษาไทย"}
      </Space>
    </Dropdown>
  );
};

export default LanguageSwitcher;
