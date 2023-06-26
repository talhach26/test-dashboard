import React from 'react'

const PiechartValue = ({bgColor, title, rounded}) => {
  return (
    <div className="d-flex justify-content-between my-2">
    <div className="d-flex align-items-center">
      <div    
        style={{
           backgroundColor: bgColor,
           width: rounded ? "11px" : "8px",
           height: rounded ? "8px" : "8px",
           borderRadius: "50%"
           }}
      />
      <span  className=" donut-graph-info mx-2">
        {title}
      </span>
    </div>
  </div>
  )
}

export default PiechartValue