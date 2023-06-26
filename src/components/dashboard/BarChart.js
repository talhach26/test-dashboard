import React from "react";
import { Col, Row } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import PiechartValue from "./PiechartValue";

const BarChart = () => {
  const barData = {
    series: [
      {
        data: [90, 50, 170, 200, 100],
      },
    ],
    options: {
      chart: {
        height: 190,
        type: "bar",
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          },
        },
      },
      colors: [
        "#2B659D",
        "#FFDB7F",
        "#7ACEE9",
        "#E48E8E",
        "#E594E7",
        "#73E87F",
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        labels: {
          style: {
            colors: [
              "#2B659D",
              "#FFDB7F",
              "#7ACEE9",
              "#E48E8E",
              "#E594E7",
              "#73E87F",
            ],
            fontSize: "12px",
          },
        },
      },
    },
  };

  return (
    <Col md={12} lg={12} xl={6} className="mb-2 p-0 d-flex flex-column">
      <div className="chartGap p-3 pieChart  ms-auto flex-grow-1">
        <p>Top visited Events</p>
        <h3>Events</h3>
        <div style={{ marginBottom: "-25px" }}>
          <ReactApexChart
            options={barData.options}
            series={barData.series}
            type="bar"
            height={200}
          />
        </div>
        <div className="d-flex justify-content-between px-4 ">
          <PiechartValue bgColor="#2B659D" title="43220" />
          <PiechartValue bgColor="#E48E8E" title="Zip Code" />
        </div>
        <div className="d-flex justify-content-between px-4 ">
          <PiechartValue bgColor="#FFDB7F" title="43220" />
          <PiechartValue bgColor="#73E87F" title="Zip Code" />
        </div>
      </div>
    </Col>
  );
};

export default BarChart;
