import { Box, Typography } from "@material-ui/core";
import React from "react";

// Custom icon + label
const MyIcon = ({ icon, label }) => {
  return (
    <Box display="flex" alignItems="center">
      <Box mr={3} display="flex">
        {icon}
      </Box>
      <Typography>{label}</Typography>
    </Box>
  );
};

export default MyIcon;
