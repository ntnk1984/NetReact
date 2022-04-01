import React from "react";
import { Link, Route } from "react-router-dom";
import {
  Layout,
  Menu,
  Breadcrumb,
  Avatar,
  Row,
  Col,
  Popover,
  Button,
  Divider,
} from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function HomeLayout(props) {
  let { Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(propsRoute) => {
        return (
          <Layout style={{ minHeight: "100vh" }}>
            <Sider collapsible >
              <div className="logo flex my-3">
                <h2 className="text-white">INTEPOST</h2>
              </div>
              <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                  <Link to="/createorder">Tạo đơn hàng</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                  Option 2
                </Menu.Item>
                <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                  <Menu.Item key="3">Tom</Menu.Item>
                  <Menu.Item key="4">Bill</Menu.Item>
                  <Menu.Item key="5">Alex</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                  <Menu.Item key="6">Team 1</Menu.Item>
                  <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
                <Menu.Item key="9" icon={<FileOutlined />}>
                  Files
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header
                className="site-layout-background text-info "
                style={{ padding: 0 ,backgroundColor:"#e6fffb"}}
              >
                <Row align="end" className="text-end">
                  <Col span={21}></Col>
                  <Col span={3}>
                    Tin Tuong
                    <Popover
                      placement="bottom"
                      title={"Name"}
                      content={<Button>Đăng xuất</Button>}
                      trigger="click"
                    >
                      <Avatar
                        className="mx-3"
                        style={{ backgroundColor: "#87d068" }}
                        icon={<UserOutlined />}
                      />
                    </Popover>
                  </Col>
                </Row>
              </Header>
              
              <Content style={{ margin: "0 16px" }}>
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: 360 }}
                >
                  <Component {...propsRoute} />
                </div>
              </Content>
              <Footer style={{ textAlign: "center" }}>
                Ant Design ©2018 Created by Ant UED
              </Footer>
            </Layout>
          </Layout>
        );
      }}
    />
  );
}
