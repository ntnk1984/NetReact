import React from "react";
import { Table, Button } from "antd";


const columns = [
  {
    title: "STT",

    render: (text, record, index) => {
      return <p className="my-0">{++index}</p>;
    },
  },
  {
    title: "Tên công ty",
    dataIndex: "name",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Category 1",
        value: "Category 1",
        children: [
          {
            text: "Yellow",
            value: "Yellow",
          },
          {
            text: "Pink",
            value: "Pink",
          },
        ],
      },
      {
        text: "Category 2",
        value: "Category 2",
        children: [
          {
            text: "Green",
            value: "Green",
          },
          {
            text: "Black",
            value: "Black",
          },
        ],
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.name.includes(value),
  },
  {
    title: "Quận/Huyện",
    dataIndex: "age",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Thành phố",
    dataIndex: "address",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.startsWith(value),
    filterSearch: true,
  },
  {
    title: "Số điện thoại",
    dataIndex: "address",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.startsWith(value),
    filterSearch: true,
  },
  {
    title: "Fax",
    dataIndex: "address",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.startsWith(value),
    filterSearch: true,
  },
  {
    title: "Sửa ",
    render: (text, record, index) => (
      <Button type="link" primary>
        Sửa
      </Button>
    ),
  },
  {
    title: "Xóa ",
    render: (text, record, index) => (
      <Button type="link" danger>
        Xóa
      </Button>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];

export default function Home() {
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  return <Table columns={columns} dataSource={data} onChange={onChange} />;
}
