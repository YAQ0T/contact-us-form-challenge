import React from "react";
import Input from "@mui/joy/Input";

export default function TextField({ placeholder, value, type = "text" }) {
  return (
    <Input
      sx={{
        "&::before": {
          "box-shadow":
            "var(--Input-focusedInset, inset) 0 0 0 calc(var(--Input-focused)* var(--Input-focusedThickness)) #7985FF",
        },
        "&.Mui-focused .MuiInput-input": {
          color: "#7985FF",
        },
        width: "63%",
        height: "60px",
      }}
      placeholder={placeholder}
      type={type}
      required
      value={value}
      onChange={() => {}}
    />
  );
}
