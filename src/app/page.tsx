"use client";
import React from "react";
import { Layout, Card, Row, Col, Button } from "antd";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { useRouter } from "next/navigation"; 
import "./i18n";
import { useTranslation } from "react-i18next";

const { Header, Content } = Layout;

export default function Home() {
  const { t } = useTranslation();
  const router = useRouter(); // ✅ ใช้ router เพื่อนำทาง

  const cardData = [
    { title: t("title"), description: t("description1"),link: "/test1"},
    { title: t("title2"), description: t("description2"),link: "/test2" },
    { title: t("title3"), description: t("description3") ,link: "/test3"},
  ];

  return (
    <div style={{ height: "100vh", width: "100vw", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <Header style={{ background: "transparent", boxShadow: "none", padding: "10px 20px", display: "flex", justifyContent: "flex-end" }}>
        <LanguageSwitcher />
      </Header>

      {/* Main Content */}
      <Content
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        <Row gutter={16} justify="center">
          {cardData.map((item, index) => (
            <Col key={index}>
              <Card 
              hoverable
              onClick={() => router.push(item.link)}
              style={{ width: 250, borderRadius: 0 }}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Card>
            </Col>
          ))}
        </Row>

  
   
      </Content>
    </div>
  );
}
