import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Toolbar, AppBar, Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="regular">
          <Typography variant="h6" color="inherit">
            React Weather App
          </Typography>
          <Box mx={3}>
            <Button onClick={() => history.push("/")} variant="contained">
              Home
            </Button>
          </Box>
          <Box mr={3}>
            <Button onClick={() => history.push("/weather")} variant="contained">
              Weather
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
