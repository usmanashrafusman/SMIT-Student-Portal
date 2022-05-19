import { Typography, TextField } from "@mui/material";
const Input = (props) => {
  return (
    <>
      {props.labelTag && (
        <Typography variant="body1" component="label" className="labelTag">
          {props.labelTag}
        </Typography>
      )}
      <TextField
        fullWidth
        id="outlined-basic"
        className={props.className}
        label={props.placeholder}
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        inputRef={props.refer}
        required={props.required}
        disabled={props.disabled}
        sx={props.sx}
      />
    </>
  );
};
export default Input;
