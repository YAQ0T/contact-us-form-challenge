import React from "react";
import Input from "@mui/joy/Input";
import { Textarea } from "@mui/joy";
export default function TextArea({
  placeholder,
  register,
  registerName = "text",
  width = "63%",
  height = "125px",
}) {
  return (
    <Textarea
      sx={{
        "&::before": {
          "box-shadow":
            "var(--Textarea-focusedInset, inset) 0 0 0 calc(var(--Textarea-focused)* var(--Textarea-focusedThickness)) #7985FF",
        },
        "&.Mui-focused .MuiTextarea-textarea": {
          color: "#7985FF",
        },
        width: { width },
        height: { height },
        marginBlock: "15px",
        fontSize: "14px",
      }}
      placeholder={placeholder}
      required
      {...register(registerName, { required: true })}
    />
  );
}
