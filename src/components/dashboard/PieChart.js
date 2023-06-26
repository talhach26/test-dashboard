import React from "react";
import { Pie } from "@ant-design/plots";
import { Col, Row } from "reactstrap";
import PiechartValue from "./PiechartValue";

const PieChart = () => {
  const data = [
    {
      type: "Events",
      value: 55,
    },
    {
      type: "Experiences",
      value: 25,
    },
    {
      type: "Swimming places",
      value: 15,
    },
    {
      type: "Culture and Libraries",
      value: 5,
    },
  ];
  const config = {
    // appendPadding: 10,
    data,
    height: 180,
    width: 180,
    // autoFit: true,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    legend: false,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}%",
      style: {
        textAlign: "center",
        fontSize: 10,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: "",
      },
    },
  };
  return (
    <Col md={12} lg={12} xl={6} className=" mb-2 p-0 d-flex flex-column">
      <div className="chartGap p-3 pieChart flex-grow-1">
        <p>Top visited pages</p>
        <h3>See & Do</h3>
        <div className="p-0 d-flex justify-content-center pieChartData ">
          <div>
            <Pie
              className="mt-4"
              {...config}
              color={({ type }) => {
                if (type === "Events") {
                  return "#2B659D";
                } else if (type === "Experiences") {
                  return "#7ACEE9";
                } else if (type === "Swimming places") {
                  return "#DC6B8D";
                } else return "#FFDB7F";
              }}
            />
          </div>
          <div className="  flex-colum my-auto  mx-3 p-0">
            <PiechartValue bgColor="#2B659D" title="Events" />
            <PiechartValue bgColor="#7ACEE9" title="Experiences" />
            <PiechartValue
              bgColor="#DC6B8D"
              rounded={true}
              title="Swimming places"
            />
            <PiechartValue
              bgColor="#FFDB7F"
              rounded={true}
              title="Culture and Libraries"
            />
          </div>
        </div>
      </div>
    </Col>
  );
};

export default PieChart;
