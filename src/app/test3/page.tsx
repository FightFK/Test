"use client";
import React from "react";
import Form from "../../../components/form"
import Table from "../../../components/table"
import { Layout } from "antd";
import LanguageSwitcher from "../../../components/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import '../i18n'
import { useRouter } from "next/navigation"; 


const { Header, Content } = Layout;



const Page: React.FC = () => {
    const { t } = useTranslation();
    const router = useRouter();
  return (
    <div>
      
     <Header style={{ background: "transparent", boxShadow: "none", padding: "10px 20px", display: "flex", justifyContent: "flex-end" }}>
     
     <LanguageSwitcher />
     <button onClick={() => router.push('/')}>
        Home
     </button>
     </Header>
     <h1>{t('form')}</h1>
     
     
      <Form />
      <Table />
    </div>
  );
};

export default Page;
