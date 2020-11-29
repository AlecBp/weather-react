import { Grid } from "@material-ui/core";
import React from "react";
import WeatherCard from "../WeatherCard";

const WeatherList = ({ data }) => {
  return (
    <Grid container spacing={5}>
      {data &&
        data.map((d, i) => (
          <Grid key={i} item xs={12} md={6}>
            <WeatherCard data={d} />
          </Grid>
        ))}
    </Grid>
  );
};

export default WeatherList;
