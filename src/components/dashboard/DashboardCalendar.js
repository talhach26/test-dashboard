import React, { useState } from "react";
import Calendar from "react-calendar";
import { DashCalendar, sunnyWeather } from "../../assets/images/logos";

const DashboardCalendar = () => {
  const [value, onChange] = useState(new Date());
  const getCurrentDateTime = () => {
    const options = {
      month: "short",
      day: "numeric",
      year: "2-digit",
      hour: "numeric",
      minute: "numeric",
    };
    const dateTime = new Date().toLocaleString("en-US", options);
    return dateTime;
  };
  return (
    <div className="dashboardCalendar p-3">
      <div className="d-flex justify-content-between">
        <div className="calendarTime">
          <h3>
            Calendar{" "}
            <span>
              <img src={DashCalendar} alt="calendar" />
            </span>
          </h3>
          <p>{getCurrentDateTime()}</p>
        </div>
        <div className="calendarWeather">
          <img src={sunnyWeather} alt="weather" />
          <p>23C - Sunny</p>
        </div>
      </div>
      <div className="calendarDivider my-1" />
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default DashboardCalendar;
