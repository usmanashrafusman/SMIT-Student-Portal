import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import { IoChevronDownOutline } from "react-icons/io5";
function SelectBox(props) {
  return (
    <>
      {props.labelTag && (
        <Typography variant="body1" component="label" className="labelTag">
          {props.labelTag}
        </Typography>
      )}
      <FormControl
        className={props.classes}
        fullWidth={props.autoWidth ? false : true}
        disabled={props.disabled ? true : false}
      >
        <InputLabel>{props.inputLabel}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={props.value}
          defaultValue={props.defaultValue}
          label={props.label}
          name={props.name}
          onChange={props.onChange}
          inputProps={props.inputProps}
          IconComponent={IoChevronDownOutline}
          autoWidth={props.autoWidth ? true : false}
          placeholder={props.placeholder}
          required={props.required}
        >
          {props.options.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectBox;
