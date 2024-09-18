import React from "react";
import Button from "@mui/joy/Button";

export default function SendButton() {
  return (
    <Button
      sx={{
        background: "rgb(108, 182, 255)",
        background:
          "linear-gradient(90deg, rgba(108,182,255,1) 0%, rgba(115,157,255,1) 35%, rgba(121,133,255,1) 100%)",
        width: "90%",
      }}
    >
      Send
    </Button>
  );
}
