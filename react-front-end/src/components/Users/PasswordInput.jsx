import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import "./PasswordInput.scss";

export default function PasswordInput(props) {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (input) => (event) => {
    setValues({ ...values, [input]: event.target.value });
    props.setInput(values);
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="password-input--container">
      <FormControl variant="outlined">
        <InputLabel
          htmlFor="outlined-adornment-password"
          required={props.required}
        >
          {props.children}
        </InputLabel>
        <OutlinedInput
          className="password-input--field"
          id="outlined-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          required={props.required}
          error={
            props.required &&
            props.validate &&
            (props.value === "" || props.value === null)
          }
          helperText={
            !props.value && props.validate && "This field cannot be blank."
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
    </div>
  );
}
