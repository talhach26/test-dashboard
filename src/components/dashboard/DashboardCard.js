import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const DashboardCard = ({ cardImg, title, noOfSolve, noOfProb, incomming }) => {
  return (
    <Row>
      <Col className="bg-white p-2 dashboardCard mx-1 mb-2">
        <div className="d-flex  justify-content-between">
          <img src={cardImg} alt="alt" />
          <p className="cardProb my-auto">{`${noOfSolve} Solved`}</p>
        </div>
        <div className="mt-3 d-flex flex-row justify-content-between">
          <div>
            <p className="fs-6 fw-bold">{title}</p>
            <p className="fs-4 fw-bolder">{noOfProb}</p>
          </div>
          <div className="align-self-end">
            <Link to="#">{`${incomming} New`}</Link>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default DashboardCard;
