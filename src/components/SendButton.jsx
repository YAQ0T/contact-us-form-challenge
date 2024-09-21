import { Input } from "@mui/joy";
import React from "react";

export default function SendButton() {
  return (
    <Input
      sx={{
        background:
          "linear-gradient(90deg, rgba(108,182,255,1) 0%, rgba(115,157,255,1) 35%, rgba(121,133,255,1) 100%)",
        width: "63%",
        height: "55px",
        marginBlock: "15px",
        color: "#FFFFFF",
      }}
      type="submit"
      value={"Send"}
    />
  );
}
