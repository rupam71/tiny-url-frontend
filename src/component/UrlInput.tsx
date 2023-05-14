import { TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const UrlInput = () => {
  const [longUrl, setlongUrl] = useState("");
  const [result, setresult] = useState("")

  const handleOnKeyDown = () => {
    console.log({ longUrl });
    axios.post(`${process.env.NEXT_PUBLIC_URL}/api/tinyUrl`,{
      longUrl
    })
    .then(res=>{
      if(res.data.statusCode===200) setresult(res.data.result)
    })
  };
  return (
    <div className="url-input">
      <TextField
        onChange={(event) => setlongUrl(event.target.value)}
        onKeyDown={(event) => event.key === "Enter" && handleOnKeyDown()}
        value={longUrl}
        sx={{ width:'100%',maxWidth:'600px' }}
        id="filled-basic"
        label="Input Url"
        placeholder="Place Your Big Url"
        variant="filled"
      />
      {
        result && <div>
          Your Short Code Is {`${process.env.NEXT_PUBLIC_URL}/${result}`}
          <button onClick={()=>navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_URL}/${result}`)}>copy to clipboard</button>
        </div>
      }
    </div>
  );
};

export default UrlInput;
