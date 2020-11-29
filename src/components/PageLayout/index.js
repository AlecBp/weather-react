import { Box, Container } from "@material-ui/core";
import React from "react";

const PageLayout = (props) => {
  return (
    <Container maxWidth="md">
      <Box my={3}>{props.children}</Box>
    </Container>
  );
};

export default PageLayout;
