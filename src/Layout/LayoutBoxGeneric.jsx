import { Box } from "@mui/material";
import React from "react";

export default function LayoutBoxGeneric({ children }) {
  return (
    <Box marginLeft={6} marginRight={6} marginTop={1} gap={2} display="flex" justifyContent={"center"} alignItems={"center"}>
      {children}
    </Box>
  );
}
