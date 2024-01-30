import React from "react";
import { Button, styled, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

function App() {
  const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "#888",
    margin: 5,
    "&:hover": { backgroundColor: "lightblue" },
    "&:disabled": { backgroundColor: "gray", color: "white" },
  });
  return (
    <div>
      <Button startIcon={<AddIcon />} variant="text">
        Add New
      </Button>
      <Button
        startIcon={<SearchIcon />}
        variant="contained"
        color="secondary"
        size="large"
      >
        Contained
      </Button>
      <Button variant="outlined" disabled>
        Outlined
      </Button>

      <Typography variant="h1" component="p">
        It uses h1 style it's a p tag
      </Typography>
      <Button
        disabled
        variant="contained"
        sx={{
          backgroundColor: "skyblue",
          color: "#888",
          margin: 5,
          "&:hover": { backgroundColor: "lightblue" },
          "&:disabled": { backgroundColor: "gray", color: "white" },
        }}
      >
        My Unique Button
      </Button>
      <Button
        disabled
        variant="contained"
        sx={{
          backgroundColor: "skyblue",
          color: "#888",
          margin: 5,
          "&:hover": { backgroundColor: "lightblue" },
          "&:disabled": { backgroundColor: "gray", color: "white" },
        }}
      >
        My Unique Button
      </Button>
      <BlueButton>Blue Button</BlueButton>
      <BlueButton disabled>Blue Button disabled</BlueButton>
    </div>
  );
}

export default App;
