import React from "react";
import Card from "@mui/material/Card";

const TextCard = ({ children }) => {
  return (
    <Card
      variant="outlined"
      className="border textcard"
      sx={{ bgcolor: "text.primary", color: "background.paper", mb: 3 }}
    >
      {children}
    </Card>
  );
};

export default TextCard;
