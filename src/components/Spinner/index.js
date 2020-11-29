import { Box } from "@material-ui/core";
import React from "react";
import HashLoader from "react-spinners/HashLoader";

const Spinner = (props) => {
  const { fullscreen, size, color } = props;

  if (fullscreen)
    return (
      <Box height={window.innerHeight * 0.4} display="flex" justifyContent="center" alignItems="center">
        <HashLoader size={size || 200} color={color || "#1abc9c"} />
      </Box>
    );

  return (
    <>
      <HashLoader size={size || 50} color={color || "#1abc9c"} />
    </>
  );
};

export default Spinner;
