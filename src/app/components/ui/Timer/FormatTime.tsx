import { Typography } from "@mui/material";
import React from "react";

interface FormatTimeProps {
  value: number;
  unit: string;
}
export default function FormatTime({ value, unit }: FormatTimeProps) {
  return (
    <>
      <Typography variant="h2" sx={{ fontSize: "6vw" }}>
        {value}
        <Typography variant="body1" sx={{ fontSize: "2vh" }}>
          {value === 1 ? unit : `${unit}s`}
        </Typography>
      </Typography>
    </>
  );
}
