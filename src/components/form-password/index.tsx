import { FC, useState } from "react";

// material ui
import OutlinedInput, { OutlinedInputProps } from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";

// project imports
import {
  AccessClosedIcon,
  AccessOpenedIcon,
} from "components/SvgComponents/content";

interface Props extends OutlinedInputProps {
  touchedTitle?: boolean | any[] | undefined;
  errorsTitle?: string | any[] | undefined;
}

export const FormPasswordInput: FC<Props> = ({
  touchedTitle,
  errorsTitle,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const hasError = Boolean(touchedTitle && errorsTitle);

  return (
    <FormControl fullWidth variant="outlined" error={hasError}>
      <InputLabel htmlFor="outslined-adornment-password">Пароль</InputLabel>
      <OutlinedInput
        {...rest}
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? (
                <AccessOpenedIcon fill="#aaaaaa" />
              ) : (
                <AccessClosedIcon fill="#aaaaaa" />
              )}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
      {hasError && (
        <FormHelperText error id="standard-password-error-wrapper">
          {errorsTitle}
        </FormHelperText>
      )}
    </FormControl>
  );
};
