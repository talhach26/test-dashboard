import { useState } from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";

const CasesChart = () => {
  const totalCases = 7123;
  const [toggle, setToggle] = useState(false);
  const [dateType, setDateType] = useState("monthly");
  const handleToggle = (e) => {
    setToggle((prev) => !prev);
    setDateType(e.target.value);
  };

  const config = {
    series: [
      {
        name: "Performance",
        data: [5, 10, 20, 10, 50, 15, 40, 90, 30],
      },
    ],
    options: {
      chart: {
        type: "area",
        stacked: false,
        height: 350,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          show: true,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.7,
          opacityTo: 0,
          stops: [0, 10, 100],
        },
      },
      dataLabels: {
        enabled: false,
      },

      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
    },
  };

  return (
    <Card>
      <CardBody>
        <Row>
          <Col className="mt-3 d-flex flex-row justify-content-between">
            <div className="caseChartHead">
              <h3>Total cases</h3>
              <h4>{totalCases}</h4>
            </div>
            <Row className="caseChartDate d-flex mx-2">
              <Col md={6} sm={12} className="switch-field d-flex">
                <div className="mx-1">
                  <input
                    type="radio"
                    id="switch_left"
                    name="monthly"
                    value="monthly"
                    onChange={handleToggle}
                    checked={dateType === "monthly"}
                  />
                  <label htmlFor="switch_left">Monthly</label>
                </div>
                <div className="mx-1">
                  <input
                    type="radio"
                    id="switch_right"
                    name="yearly"
                    value="yearly"
                    onChange={handleToggle}
                    checked={dateType === "yearly"}
                  />
                  <label htmlFor="switch_right">Yearly</label>
                </div>
              </Col>
              <Col  md={6} sm={12}>
              <div className="mx-1">
                <input type="date" name="date" />
              </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <ReactApexChart
          options={config.options}
          series={config.series}
          type="area"
        />
      </CardBody>
    </Card>
  );
};

export default CasesChart;
