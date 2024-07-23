import React, { useEffect, useState, useMemo } from "react";
import Chart from "react-google-charts";
import "./LineChart.css";

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  const processData = useMemo(() => {
    let dataCopy = [["Date", "Prices"]];
    if (historicalData?.prices) {
      historicalData.prices.forEach((item) => {
        dataCopy.push([
          new Date(item[0]).toLocaleDateString().slice(0, -5),
          item[1],
        ]);
      });
    }
    return dataCopy;
  }, [historicalData]);

  useEffect(() => {
    setData(processData);
  }, [processData]);

  return (
    <Chart
      chartType="LineChart"
      data={data}
      height="400px"
      legendToggle
    />
  );
};

export default LineChart;
