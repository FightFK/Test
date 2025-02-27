"use client";

import React from "react";
import { Button, DatePicker, Form, Input, Radio, Select } from "antd";
import { useDispatch } from "react-redux";
import { addForm, resetForm } from "../src/app/redux/formSlice";
import { nanoid } from "@reduxjs/toolkit";
const { Option } = Select;

const FormComponent = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log(values.mobileNumber)
    const fullMobile = `${values.mobilePrefix}${values.mobileNumber}`; // Prefix + Mobile Number
    const newEntry = {
      key: nanoid(),
      name: `${values.title} ${values.firstName} ${values.lastName}`,
      gender: values.gender,
      mobile: fullMobile, 
      nationality: values.nationality,
      passport: values.passport,
      salary: values.salary
    };

    dispatch(addForm(newEntry));
    form.resetFields();
  };
  

  const handleReset = () => {
    form.resetFields();
  };

  return (
    <div style={{ border: "solid", width: "1000px", padding: "20px",borderRadius:'20px' }}>
      <Form layout="inline" form={form} onFinish={handleSubmit}>
        {/* Line1 Title + Firstname + lastname*/}
        <Form.Item label="Title" name="title" rules={[{ required: true }]}>
          <Select style={{width:'100px'}}>
            <Option value="Mr.">Mr.</Option>
            <Option value="Ms.">Ms.</Option>
          </Select>
        </Form.Item>

        <Form.Item label="First Name" name="firstName" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Last Name" name="lastName" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        {/* //Line2 Birthday + Nationality */}
        <div style={{ width: "100%" , display:'flex', marginTop:'20px'}}>
            <Form.Item label="BirthDay" name="birthday">
            <DatePicker />
            </Form.Item>

            <Form.Item label="Nationality" name="nationality" rules={[{ required: true }]}>
            <Select>
                <Option value="Thai">Thai</Option>
                <Option value="American">American</Option>
            </Select>
            </Form.Item>
        </div>

        {/* Line3 CizitenID */}

        <div style={{ width: "100%" , display:'flex', marginTop:'20px'}}>
            <Form.Item label="Citizen ID:" rules={[{ required: true }]}>
                <Input.Group compact>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                        <Input style={{ width: 60, textAlign: "center" }} maxLength={1} />
                        <span>-</span>
                        <Input style={{ width: 60, textAlign: "center" }} maxLength={4} />
                        <span>-</span>
                        <Input style={{ width: 60, textAlign: "center" }} maxLength={5} />
                        <span>-</span>
                        <Input style={{ width: 60, textAlign: "center" }} maxLength={2} />
                        <span>-</span>
                        <Input style={{ width: 60, textAlign: "center" }} maxLength={1} />
                    </div>
                </Input.Group>
            </Form.Item>
        </div>

        {/* Line 4 Gender */}
        <div style={{ width: "100%" , display:'flex', marginTop:'20px'}} >
        <Form.Item label="Gender" name="gender" rules={[{ required: true }]}>
          <Radio.Group>
            <Radio value="Male"> Male </Radio>
            <Radio value="Female"> Female </Radio>
            <Radio value="Unsex"> Unsex </Radio>
          </Radio.Group>
        </Form.Item>

        </div>
     

   {/* Line5 Mobilephone */}
    <div style={{ width: "100%", display: "flex", marginTop: "20px" }}>
        <Form.Item label="Mobile Phone" required>
            <Input.Group compact>
            <Form.Item name="mobilePrefix" noStyle>
                <Select style={{ width: 80 }}>
                <Select.Option value="+66">+66</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item name="mobileNumber" noStyle>
              <Input style={{ width: 150 }} maxLength={9} name="mobileNumber" />
            </Form.Item>
           
            </Input.Group>
        </Form.Item>
    </div>

          {/* Line 6 Passport */}
    <div style={{ width: "100%", display: "flex", marginTop: "20px" }} >
       <Form.Item label="Passport No:" name="passport">
          <Input style={{ width: '200px' }} name="passport" />
       </Form.Item>
    </div>

    {/* Line 7  Expected Salary + Reset Submit Buttons */}
    <div style={{ width: "100%", display: "flex", marginTop: "20px" , marginBottom:'20px'}} >
       <Form.Item label="Expected Salary" name="salary">
          <Input style={{ width: 60 }} name="salary" />
       </Form.Item>

    </div>
        <Form.Item>
          <Button type="default" onClick={handleReset}>
            Reset
          </Button>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormComponent;
