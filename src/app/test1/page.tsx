"use client";
import React, { useState } from "react";
import "./shapes.css";
import "../i18n";
import { useTranslation } from "react-i18next";
import { Layout, Card } from "antd";
import LanguageSwitcher from "../../../components/LanguageSwitcher";
const { Header, Content } = Layout;

const initialShapes = [
  "square",
  "circle",
  "oval",
  "trapezoid",
  "rectangle",
  "parallelogram",
];

export default function ShapesPage() {
  const [shapes, setShapes] = useState(initialShapes);
  const [isSwapped, setIsSwapped] = useState(false);
  const { t } = useTranslation();

  const shuffleAllShapes = () => {
    // ฟังก์ชันสุ่มตำแหน่งของทุกๆ shape
    setShapes((prevShapes) => {
      const newShapes = [...prevShapes];
      
      // ฟังก์ชันสุ่มตำแหน่งแบบ Fisher-Yates Shuffle
      for (let i = newShapes.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [newShapes[i], newShapes[randomIndex]] = [newShapes[randomIndex], newShapes[i]];
      }

      return newShapes;
    });
  };

  const prevPage = () => {
    setShapes((prevShapes) => {
      const lastItem = prevShapes[prevShapes.length - 1];
      return [lastItem, ...prevShapes.slice(0, -1)];
    });
  };

  const nextPage = () => {
    setShapes((prevShapes) => {
      const firstItem = prevShapes[0];
      return [...prevShapes.slice(1), firstItem];
    });
  };

  const upRow = () => {
    setShapes((prevShapes) => {
      if (prevShapes.length < 6) return prevShapes;
      const topRow = prevShapes.slice(0, 3);
      const bottomRow = prevShapes.slice(3, 6);
      setIsSwapped(!isSwapped);
      return [...bottomRow, ...topRow];
    });
  };

  const downRow = () => {
    setShapes((prevShapes) => {
      if (prevShapes.length < 6) return prevShapes;
      const topRow = prevShapes.slice(0, 3);
      const bottomRow = prevShapes.slice(3, 6);
      setIsSwapped(!isSwapped); // สลับค่า true/false
      return [...bottomRow, ...topRow];
    });
  };

  return (
    <div style={{ width: "100vw" }}>
      <Header
        style={{
          background: "transparent",
          boxShadow: "none",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <LanguageSwitcher />
      </Header>
      <h2>{t("layout")}</h2>
      <Content
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Navigation */}
        <div className="navigation">
          <Card onClick={nextPage} style={{ cursor: "pointer" }}>
            <div className="arrow left"></div>
          </Card>

          <Card>
            <div style={{ display: "flex" }}>
              <div
                className="arrow up"
                onClick={upRow}
                style={{ cursor: "pointer" }}
              ></div>
              <div
                className="arrow down"
                onClick={downRow}
                style={{ cursor: "pointer" }}
              ></div>
            </div>
          </Card>

          <Card onClick={prevPage} style={{ cursor: "pointer" }}>
            <div className="arrow right"></div>
          </Card>
        </div>

        {/* Shapes Lists */}
        <div className="shapes-grid">
          {/* แถวแรก */}
          <div className={`row-1 ${isSwapped ? "left" : "right"}`}>
            {shapes.slice(0, 3).map((shape, index) => (
              <Card
                key={index}
                className="shape-card"
                onClick={shuffleAllShapes} // เรียกใช้ฟังก์ชันที่สุ่มตำแหน่งทุกตัว
              >
                <div className={`shape ${shape}`} />
              </Card>
            ))}
          </div>

          {/* แถวที่สอง */}
          <div className={`row-2 ${isSwapped ? "right" : "left"}`}>
            {shapes.slice(3, 6).map((shape, index) => (
              <Card
                key={index + 3}
                className="shape-card"
                onClick={shuffleAllShapes} // เรียกใช้ฟังก์ชันที่สุ่มตำแหน่งทุกตัว
              >
                <div className={`shape ${shape}`} />
              </Card>
            ))}
          </div>
        </div>
      </Content>
    </div>
  );
}
