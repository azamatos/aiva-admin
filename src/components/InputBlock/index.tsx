import TextField, { TextFieldProps } from "@mui/material/TextField";
import { FC } from "react";

const InputBlock: FC<TextFieldProps> = (props) => (
  <TextField {...props} margin="normal" required fullWidth />
);

export default InputBlock;
