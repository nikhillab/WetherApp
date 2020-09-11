import React from "react";
import DataCard from "./card";
import ComfortLevel from "./ComfortLevel";
import Wind from "./Wind";

const WetherData = (props) => {
  return (
    <>
      <DataCard weatherData={props.weatherData} />
      <ComfortLevel weatherData={props.weatherData} />
      <Wind weatherData={props.weatherData} />
    </>
  );
};

export default WetherData;
