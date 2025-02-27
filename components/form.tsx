import React from 'react'
import { Button, Cascader, Checkbox, ColorPicker, DatePicker, Form, Input, InputNumber, Radio, Rate, Select, Slider, Switch, TreeSelect, Upload, } from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const form = () => {
  return (
    <div style={{border:'solid',width:'1000px',height:'500px'}}>
         <Form layout="inline">
        {/* Line1 Title + Firstname + lastname*/}
        <Form.Item label="Title">
            <Select>
                <Select.Option value="demo">Demo</Select.Option>
            </Select>
        </Form.Item>

        <Form.Item label="First Name">
            <Input />
        </Form.Item>

        <Form.Item label="Last Name">
            <Input />
        </Form.Item>

        {/* //Line2 Birthday + Nationality */}
        <div style={{ width: "100%" , display:'flex', marginTop:'20px'}}>
            <Form.Item label="BirthDay">
                <DatePicker />
            </Form.Item>

            <Form.Item label="Nationality">
                <DatePicker />
            </Form.Item>
        </div>
        {/* Line3 CizitenID */}
        <div style={{ width: "100%" , display:'flex', marginTop:'20px'}} > 
            <Form.Item label="Citizen ID:">
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
            <Form.Item label="Gender">
                <Radio.Group>
                    <Radio value="Male"> Male </Radio>
                    <Radio value="Female"> Feamale </Radio>
                    <Radio value="Unsex"> Unsex </Radio>
                </Radio.Group>
            </Form.Item>
        </div>

    {/* Line5 Mobilephone */}
    <div style={{ width: "100%", display: "flex", marginTop: "20px" }}>
        <Form.Item label="Mobile Phone" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Select style={{ width: 80 }}>
            <Select.Option value="+66">+66</Select.Option>
            </Select>
            <span>-</span>
            <Input style={{ width: 150 }} maxLength={10} />
        </Form.Item>
    </div>
    {/* Line 6 Passport */}
    <div style={{ width: "100%", display: "flex", marginTop: "20px" }} >
       <Form.Item label="Passport No:">
          <Input style={{ width: 200, textAlign: "center" }} />
       </Form.Item>
    </div>
    {/* Line 7  Expected Salary + Reset Submit Buttons */}
    <div style={{ width: "100%", display: "flex", marginTop: "20px" }} >
       <Form.Item label="Expected Salary">
          <Input style={{ width: 60, textAlign: "center" }} />
       </Form.Item>
       <Button type="default" htmlType="reset">Reset</Button>
        <Button type="primary" htmlType="submit">Submit</Button>
    </div>
    </Form>

    </div>

   
  )
}

export default form