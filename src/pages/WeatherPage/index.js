import { Box, Grid, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import PageLayout from "../../components/PageLayout";
import Spinner from "../../components/Spinner";
import WeatherList from "../../components/WeatherList";
import { useDebouncedSearch } from "../../hooks/useDebouncedSearch";

const api = {
  key: process.env.REACT_APP_API_KEY || process.env.API_KEY,
  base: "http://api.openweathermap.org/data/2.5/",
};

const getWeatherForecast = (city) =>
  new Promise((resolve, reject) => {
    if (city)
      axios
        .get(`${api.base}forecast/daily?q=${city.toLowerCase()}&mode=json&units=metric&cnt=10&appid=${api.key}`)
        .then((data) => resolve(data.data.list))
        .catch((err) => reject(err));
    else resolve([]);
  });

const useRequestWeatherData = () => useDebouncedSearch((text) => getWeatherForecast(text));

const WeatherPage = () => {
  const { inputText, setInputText, searchResults } = useRequestWeatherData();

  useEffect(() => {
    setInputText("Toronto");
  }, []);

  return (
    <PageLayout>
      <Box>
        <Typography variant="h2" align="center">
          Weather Forecast
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Box my={5}>
              <form onSubmit={(e) => e.preventDefault()}>
                <TextField
                  fullWidth
                  name="city"
                  label="City"
                  variant="outlined"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
              </form>
            </Box>
          </Grid>
        </Grid>
        {searchResults.loading && <Spinner fullscreen={true} />}
        {!searchResults.loading && <WeatherList data={searchResults.result} />}
      </Box>
    </PageLayout>
  );
};

export default WeatherPage;
