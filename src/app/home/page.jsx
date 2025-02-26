"use client";
import React from "react";
import { Layout, Menu, Card, Space, Dropdown ,Row,Col} from "antd";
import LanguageSwitcher from "../../../components/LanguageSwitcher";
const { Header, Content, Footer } = Layout;
const page = () => {
    const cardData = [
        { title: "Test 1", description: "Layout & Style" },
        { title: "Test 2", description: "Context API" },
        { title: "Test 3", description: "Form & Table" },
      ];

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>

      <Header    style={{ background: "transparent", boxShadow: "none" }}>
        <LanguageSwitcher />
      </Header>

      {/* Main Content */}
      <Content
        style={{
          flex:1,
          display: "flex",
          justifyContent: "center",
          alignItems:"center",
          gap: "20px",
          padding: "20px",
        }}
      >
        <Row gutter={16} justify="center">
        {cardData.map((item, index) => (
          <Col key={index}>
            <Card style={{ width: 250 }}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Card>
          </Col>
        ))}
      </Row>

      </Content>

    </div>
  );
};

export default page;
