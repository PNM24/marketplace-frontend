import React from "react";
import { Container, Paper, Box } from "@mui/material";

function PageWrapper({ children, maxWidth = "md" }) {
  return (
    <Container maxWidth={maxWidth}>
      <Paper elevation={3} sx={{ p: { xs: 2, sm: 3, md: 4 }, mt: { xs: 3, md: 6 }, borderRadius: 3 }}>
        <Box>{children}</Box>
      </Paper>
    </Container>
  );
}
export default PageWrapper;