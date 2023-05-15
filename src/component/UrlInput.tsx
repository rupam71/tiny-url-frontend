import { Button, Card, CardActions, CardContent, CardMedia, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const UrlInput = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [longUrl, setlongUrl] = useState("");
  const [result, setresult] = useState("");

  const handleOnKeyDown = () => {
    console.log({ longUrl });
    axios
      .post(`${process.env.NEXT_PUBLIC_URL}/api/tinyUrl`, {
        longUrl,
      })
      .then((res) => {
        if (res.data.statusCode === 200) setresult(res.data.result);
      });
  };
  return (
    <div className="url-input">
      <TextField
        onChange={(event) => setlongUrl(event.target.value)}
        onKeyDown={(event) => event.key === "Enter" && handleOnKeyDown()}
        value={longUrl}
        sx={{ width: "100%", maxWidth: "600px" }}
        id="filled-basic"
        label="Input Url"
        placeholder="Place Your Big Url"
        variant="filled"
      />

      {result && (
        <Card sx={{ maxWidth: 600, margin: "30px auto", backgroundColor:'#dde4ea' }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Your Link Is Ready
            </Typography>
            <Stack sx={{ margin: "10px 0" }} direction={"row"} justifyContent={"center"} alignItems={"center"}>
              <Typography gutterBottom variant="body1" component="div" sx={{ margin: "0 10px 0 0" }}>
                {`${process.env.NEXT_PUBLIC_URL}/${result}`}{" "}
              </Typography>
              <ContentCopyIcon
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_URL}/${result}`);
                  enqueueSnackbar("Link Copied To Clipboard", { variant: "success" });
                }}
              />
            </Stack>

            <Typography variant="body2" color="text.secondary">
              Your short link will be active for 2 Hours. Login with us to keep your link forever.
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default UrlInput;
