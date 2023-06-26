import { Col, Row } from "reactstrap";
import CasesChart from "../components/dashboard/CasesChart";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import DashboardCard from "../components/dashboard/DashboardCard";
import {
  Warning,
  Suggestion,
  Complaint,
  AskQuestion,
} from "../assets/images/logos";
import PieChart from "../components/dashboard/PieChart";
import BarChart from "../components/dashboard/BarChart";
import DashboardCalendar from "../components/dashboard/DashboardCalendar";
import Events from "../components/dashboard/Events";

const Dashboard = () => {
  const dailyIssue = 4.5;
  const day = "Wed";
  return (
      <Row>
        <Col md="8" sm="12">
          <Row className="p-3 bg-white rounded">
            <Col md="6" sm="12">
              <div className="dashboardHead">
                <h3>Hello!</h3>
                <p>
                  This is where you see your impact helping your city become a
                  smarter one.
                </p>
              </div>
            </Col>
            <Col md="6" sm="12">
              <div className="d-flex align-items-centerjustify-content-end my-auto mx-auto">
                <div className="w-50 my-auto justify-content-center">
                  <div
                    style={{ width: "62px", height: "62px" }}
                    className="mx-auto"
                  >
                    <CircularProgressbar
                      value={dailyIssue}
                      text={dailyIssue}
                      minValue={0}
                      maxValue={5}
                      styles={buildStyles({
                        trailColor: "#fff",
                        textSize: "18px !important",
                        fontWeight: "600",
                        strokeWidth: "62px",
                        transformOrigin: "center center",
                        pathColor: "#D0B67A",
                        textColor: "black",
                      })}
                    />
                  </div>
                  <p className="text-center mt-2">Avg Daily Issues</p>
                </div>
                <div className="w-50 my-auto justify-content-center">
                  <div
                    style={{ width: "62px", height: "62px" }}
                    className="mx-auto"
                  >
                    <CircularProgressbar
                      value={dailyIssue}
                      text={day}
                      minValue={0}
                      maxValue={10}
                      styles={buildStyles({
                        trailColor: "#fff",
                        textSize: "18px !important",
                        fontWeight: "600",
                        pathColor: "#9552AD",
                        textColor: "black",
                      })}
                    />
                  </div>
                  <p className="text-center mt-2">Top Active Day</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="py-3">
            <Col xl={3} md={6} sm={12}>
              <DashboardCard
                cardImg={Warning}
                title="problems"
                noOfSolve={34}
                noOfProb={33221}
                incomming={4}
              />
            </Col>
            <Col xl={3} md={6} sm={12}>
              <DashboardCard
                cardImg={Suggestion}
                title="Suggestions"
                noOfSolve={34}
                noOfProb={33221}
                incomming={4}
              />
            </Col>
            <Col xl={3} md={6} sm={12}>
              <DashboardCard
                cardImg={Complaint}
                title="Complaints"
                noOfSolve={34}
                noOfProb={33221}
                incomming={4}
              />
            </Col>
            <Col xl={3} md={6} sm={12}>
              <DashboardCard
                cardImg={AskQuestion}
                title="Questions"
                noOfSolve={34}
                noOfProb={33221}
                incomming={4}
              />
            </Col>
          </Row>
          <Row>
            <Col className="p-0">
              <CasesChart />
            </Col>
          </Row>
          <Row className="p-0 mb-2">
            <PieChart />
            <BarChart />
          </Row>
          <Row className="p-0 mb-2">
            <PieChart />
            <BarChart />
          </Row>
        </Col>
        <Col md="4" sm="12" className="rightDashboard">
          <DashboardCalendar />
          <Events />
        </Col>
      </Row>
  );
};

export default Dashboard;
