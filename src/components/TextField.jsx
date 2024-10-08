import React from "react";
import Input from "@mui/joy/Input";

export default function TextField({
  placeholder,
  type = "text",
  register,
  registerName = "text",
  width = "63%",
  height = "55px",
}) {
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
        width: { width },
        height: { height },
        marginBlock: "15px",
        fontSize: "14px",
      }}
      placeholder={placeholder}
      type={type}
      required
      {...register(registerName, { required: true })}
    />
  );
}
