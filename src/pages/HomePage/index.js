import { Box, Typography, Button } from "@material-ui/core";
import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import PageLayout from "../../components/PageLayout";

const HomePage = () => {
  return (
    <PageLayout>
      <Typography variant="h1">React Weather App</Typography>

      <Box my={3}>
        <Typography variant="h2">By: Alec Pagliarussi</Typography>
      </Box>

      <Box my={3}>
        <Button
          size="large"
          color="secondary"
          variant="contained"
          onClick={() => window.open("https://github.com/AlecBp/weather-react", "_blank")}
          startIcon={<GitHubIcon />}
        >
          GITHUB
        </Button>
      </Box>
    </PageLayout>
  );
};

export default HomePage;
