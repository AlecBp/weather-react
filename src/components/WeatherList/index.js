import { Box } from "@material-ui/core";
import React from "react";
import WeatherCard from "../WeatherCard";

const WeatherList = () => {
  const list = [1, 2, 3, 4];
  return (
    <Box>
      {list.map((i) => (
        <WeatherCard key={i} />
      ))}
    </Box>
  );
};

export default WeatherList;
