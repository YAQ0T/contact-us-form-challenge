import { Box, Input, Typography } from "@mui/joy";
import React from "react";
import { useForm } from "react-hook-form";
import SendButton from "../components/SendButton";
import TextField from "../components/TextField";
import TextArea from "../components/TextArea";

export default function MainForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <Box
      sx={{
        background:
          "linear-gradient(90deg, rgba(108,182,255,1) 0%, rgba(115,157,255,1) 35%, rgba(121,133,255,1) 100%)",
        width: "100%",
        height: "1027px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          width: "40%",
          borderRadius: "10px",
          paddingInline: "30px",
          paddingBlock: "40px",
        }}
      >
        <Typography
          variant="h2"
          component={"h2"}
          fontSize={"22px"}
          color="#202842"
          paddingBlock={"15px"}
        >
          Send me a message
        </Typography>

        <Typography
          variant="h3"
          component={"h3"}
          fontSize={"14px"}
          fontWeight={500}
          color="#242E4C"
          paddingBlock={"15px"}
        >
          Feel free to get in touch with me with anything related to CODINGSPACE
          or you can just say hi. I will get back to you as soon as i can.
        </Typography>
        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            register={register}
            placeholder="Full Name"
            registerName="fullName"
          />
          {errors.fullName && <p>full name is required.</p>}
          <TextField
            register={register}
            placeholder="Email"
            registerName="email"
            type="email"
          />

          {errors.email && <p>email is required.</p>}
          <TextField
            register={register}
            placeholder="Subject"
            registerName="subject"
          />
          {errors.subject && <p>subject is required.</p>}

          <TextArea
            register={register}
            placeholder="Message"
            registerName="message"
            height="125px"
          />
          {errors.message && <p>message is required.</p>}
          <SendButton />
        </form>
      </Box>
    </Box>
  );
}
