import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Divider,
  Grid,
  Box,
  SvgIcon,
} from "@material-ui/core";
import React, { useState } from "react";
import { blue, red } from "@material-ui/core/colors";
import moment from "moment";
import clsx from "clsx";

import InvertColorsIcon from "@material-ui/icons/InvertColors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { FaTemperatureLow, FaTemperatureHigh } from "react-icons/fa";
import { FiSunrise, FiSunset } from "react-icons/fi";

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from "recharts";

import { makeStyles } from "@material-ui/core/styles";
import MyIcon from "../MyIcon";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    marginBottom: theme.spacing(4),
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    margin: "0 auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: blue[100],
  },
}));

const TempGraph = ({ temp, feelsLike }) => {
  const data = [
    { name: "Morning", temp: temp.morn, feelsLike: feelsLike.morn },
    { name: "Day", temp: temp.day, feelsLike: feelsLike.day },
    { name: "Evening", temp: temp.eve, feelsLike: feelsLike.eve },
    { name: "Night", temp: temp.night, feelsLike: feelsLike.night },
  ];

  return (
    <Box my={3}>
      <LineChart width={350} height={200} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="temp" stroke="#2980b9" strokeWidth={3} />
        <Line type="monotone" dataKey="feelsLike" stroke="#1abc9c" strokeWidth={3} />
        <Legend formatter={(value, entry, index) => (value === "temp" ? "Temperature" : "Feels like")} />
      </LineChart>
    </Box>
  );
};

const WeatherCard = ({ data }) => {
  const classes = useStyles();

  const {
    clouds,
    deg,
    dt,
    feels_like: feelsLike,
    humidity,
    pop,
    pressure,
    speed,
    sunrise,
    sunset,
    temp,
    weather,
  } = data;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            className={classes.avatar}
            src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt="weather icon"
          />
        }
        title={<Typography variant="h5">{`${weather[0].main}`}</Typography>}
        subheader={<Typography variant="h6">{moment(new Date(dt * 1000)).format("YYYY-MM-DD")}</Typography>}
      />

      <CardContent>
        <Box mb={3}>
          <Typography variant="h6">Condition: {weather[0].description}</Typography>
        </Box>
        <Grid container>
          <Grid item xs={4}>
            <MyIcon icon={FaTemperatureLow} label={`${temp.min}°C`} />
          </Grid>
          <Grid item xs={4}>
            <MyIcon icon={FaTemperatureHigh} label={`${temp.max}°C`} />
          </Grid>
          <Grid item xs={4}>
            <MyIcon icon={<InvertColorsIcon />} label={`${pop * 100}%`} />
          </Grid>
        </Grid>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="more details"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Grid container>
            <Grid item xs={6}>
              <MyIcon label={`${moment(new Date(sunrise * 1000)).format("h:mm:ss A")}`} icon={FiSunrise} />
            </Grid>
            <Grid item xs={6}>
              <MyIcon label={`${moment(new Date(sunset * 1000)).format("h:mm:ss A")}`} icon={FiSunset} />
            </Grid>
          </Grid>

          <Box>
            <TempGraph temp={temp} feelsLike={feelsLike} />
          </Box>

          <Box my={3}>
            <Typography variant="h6">Weather Description</Typography>
            <Grid container>
              <Grid xs={6} item>
                <Typography>Pressure: {pressure / 1000} atm</Typography>
              </Grid>
              <Grid xs={6} item>
                <Typography>Humidity: {humidity}%</Typography>
              </Grid>
              <Grid xs={6} item>
                <Typography>Clouds: {clouds}%</Typography>
              </Grid>
              <Grid xs={6} item>
                <Typography>Wind speed: {speed}km/h</Typography>
              </Grid>
            </Grid>
          </Box>

          <Box my={3}>
            <Typography variant="h6">Temperatures</Typography>
            <Grid container>
              <Grid xs={6} item>
                <Typography>Morning: {temp.morn}°C</Typography>
              </Grid>
              <Grid xs={6} item>
                <Typography>Day: {temp.day}°C</Typography>
              </Grid>
              <Grid xs={6} item>
                <Typography>Evening: {temp.eve}°C</Typography>
              </Grid>
              <Grid xs={6} item>
                <Typography>Night: {temp.night}°C</Typography>
              </Grid>
            </Grid>
          </Box>

          <Box my={3}>
            <Typography variant="h6">Feels like</Typography>
            <Grid container>
              <Grid xs={6} item>
                <Typography>Morning: {feelsLike.morn}°C</Typography>
              </Grid>
              <Grid xs={6} item>
                <Typography>Day: {feelsLike.day}°C</Typography>
              </Grid>
              <Grid xs={6} item>
                <Typography>Evening: {feelsLike.eve}°C</Typography>
              </Grid>
              <Grid xs={6} item>
                <Typography>Night: {feelsLike.night}°C</Typography>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default WeatherCard;
