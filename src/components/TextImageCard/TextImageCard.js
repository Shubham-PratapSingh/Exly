import React from "react";
import { Avatar, Typography, Box, Button } from "@mui/material";
import Card from "@mui/material/Card";

const TextImageCard = ({ img, text, subtext }) => {
  return (
    <Card
      variant="outlined"
      className="border "
      sx={{ bgcolor: "text.primary", color: "background.paper", mb: 3 }}
    >
      <Box>
        <img
          alt="Fitness"
          src={img}
          style={{ width: "100%", height: "100%" }}
        />
        <Box className="textSection">
          <Typography sx={{ fontWeight: 600 }}> {text}</Typography>
          <Typography> {subtext}</Typography>
          <Button variant="contained">Book A Spot</Button>
        </Box>
      </Box>
    </Card>
  );
};

export default TextImageCard;
