import React from "react";
import { Sidebar } from "./components/Sidebar";
import { Rightbar } from "./components/Rightbar";
import { Feed } from "./components/Feed";
import { Box, Container } from "@mui/material";

const App = () => {
  return (
    <Container sx={{ backgroundColor: "red" }}>
      <Sidebar />
      <Feed />
      <Rightbar />
    </Container>
  );
};

export default App;
