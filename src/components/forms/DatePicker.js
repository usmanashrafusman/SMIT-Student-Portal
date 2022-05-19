import * as React from "react";
import TextField from "@mui/material/TextField";

function DatePicker(props) {
  // TODO : Disable Future Date
  return (
    <TextField
      name={props.name}
      onChange={props.onChange}
      value={props.value}
      variant="standard"
      type="date"
      required={props.required}
      maxDate={new Date()} //maxDate
    />
  );
}

export default DatePicker;
