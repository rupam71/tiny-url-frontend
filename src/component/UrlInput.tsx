import { TextField } from "@mui/material";
import React, { useState } from "react";

const UrlInput = () => {
  const [urlLink, seturlLink] = useState("");
  const handleOnKeyDown = () => {
    console.log({ urlLink });
  };
  return (
    <div className="url-input">
      <TextField
        onChange={(event) => seturlLink(event.target.value)}
        onKeyDown={(event) => event.key === "Enter" && handleOnKeyDown()}
        value={urlLink}
        sx={{ width: "800px" }}
        id="filled-basic"
        label="Input Url"
        placeholder="Place Your Big Url"
        variant="filled"
      />
    </div>
  );
};

export default UrlInput;
