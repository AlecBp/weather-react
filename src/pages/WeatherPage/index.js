import { Box, Typography } from "@material-ui/core";
import React from "react";
import WeatherList from "../../components/WeatherList";

const WeatherPage = () => {
  const list = [1, 2, 3, 4];
  return (
    <Box>
      <Typography>Weather List</Typography>
      <WeatherList />
    </Box>
  );
};

export default WeatherPage;
