import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function AutoCompleteComponent({
  data,
  handleChange,
  keyValue,
  placeHolder,
  value
}) {
  const onChange = (event, newValue) => {
    handleChange(newValue);
  };

  // console.log("data",data);
  // console.log("value",value);
  

  return (
    <div className="small-height">
      <Autocomplete
        id="combo-box-demo"
        options={data}
        getOptionLabel={(option) => {
          return option[keyValue];
        }}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={placeHolder} />}
        onChange={onChange}
        value={data?.find(city => city[keyValue] === value) || null}
      />
    </div>
  );
}
