import { FC } from "react";

// material-ui
import MuiTextField, { TextFieldProps } from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

type CustomTextFieldProps = {
  touchedTitle?: boolean | any[] | undefined;
  errorsTitle?: string | any[] | undefined;
} & TextFieldProps;

const TextField: FC<CustomTextFieldProps> = ({
  touchedTitle = undefined,
  errorsTitle = undefined,
  ...props
}) => {
  const hasError = Boolean(touchedTitle && errorsTitle);
  return (
    <FormControl fullWidth error={hasError}>
      <MuiTextField {...props} />

      {hasError && (
        <FormHelperText error id="standard-weight-helper-text--register">
          {errorsTitle}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default TextField;
