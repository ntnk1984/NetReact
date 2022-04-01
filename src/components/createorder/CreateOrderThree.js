import React, { useContext, useReducer, useState } from "react";
import { Card, Steps } from "antd";
import { Form, Input, Button, Row, Col, Dropdown, Menu, Collapse } from "antd";
import TotalOrder from "./DetailOrder/TotalOrder";
import InputOrderChild from "./DetailOrder/InputOrderChild";
import OrderChild from "./DetailOrder/OrderChild";
import { contextValue } from "../../pages/CreateOrder";
import Text from "antd/lib/typography/Text";

const { Panel } = Collapse;

export default function CreateOrderThree() {
  const context = useContext(contextValue);
  const { createOrder, dispatch } = context;

  const { listOrder, visibility } = context.createOrder;

  return (
    <Form
      layout="vertical"
      className="mt-4 rounded rounded-3 p-3 shadow-sm"
      style={{ background: "white" }}
    >
      <Row>
        <h4 className="text-secondary mx-2">THÔNG TIN BƯU GỬI</h4>
      </Row>
      <Row className="mb-3 px-2">
        <Col span={8} className="border p-2 mx-2">
        <Text  strong>Thông tin người gửi</Text><br></br>
        <Text>Phan tin tuong</Text> &nbsp;&nbsp;
        <Text>3454235423</Text><br></br>
        <Text>tintuong95@gmail.com</Text>&nbsp;&nbsp;
        <Text>345435 :</Text><br></br>
        <Text>Phú thứ tay hòa phu yên</Text><br></br>
       
        </Col>
        <Col span={8} className="border p-2 mx-2">
        <Text  strong>Thông tin người nhận</Text><br></br>
        <Text>Phan tin tuong</Text> &nbsp;&nbsp;
        <Text>3454235423</Text><br></br>
        <Text>tintuong95@gmail.com</Text>&nbsp;&nbsp;
        <Text>345435 :</Text><br></br>
        <Text>Phú thứ tay hòa phu yên</Text><br></br>
       
        </Col>
      </Row>
      {/* render card collpase */}
      <Collapse>
        {listOrder?.map((item, index) => {
          return (
            <Panel header={`THÔNG TIN BƯU GỬI ${++index}`} key={++index}>
              <TotalOrder />
              {
                /* render don hang */
                item?.map((val, ind) => {
                  return <OrderChild key={ind} value={{ val, ind }} />;
                })
              }
              <div className="text-center">
                <Button
                  type="text"
                  onClick={() => {
                    dispatch({ type: "SET_VISIBILITY" });
                  }}
                >
                 Thêm mặt hàng
                </Button>
              </div>
              {visibility ? "" : <InputOrderChild indexBuuGui={index} />}
            </Panel>
          );
        })}
      </Collapse>
      {/* render card collpase */}

      <Form.Item className="mt-4 mb-2 ">
        <Button
          className="mx-2"
          onClick={() => {
            dispatch({ type: "ADD_BUU_GUI" });
          }}
        >
          Tạo đơn bưu gửi
        </Button>
        <Button type="primary" onClick={()=>{dispatch({type:"POST_ORDER_API"})}}>Hoàn tất</Button>
      </Form.Item>
    </Form>
  );
}
