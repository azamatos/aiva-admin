import { FC } from "react";

// material ui
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

// project imports
import { PlusIcon } from "components/svg-icons";

interface Props {
  handleClick: () => void;
  title: string;
}

const AddIconButton: FC<Props> = ({ handleClick, title }) => (
  <IconButton
    onClick={handleClick}
    sx={{ gap: 1, padding: 1, borderRadius: 1 }}
  >
    <PlusIcon />
    <Typography>{title}</Typography>
  </IconButton>
);

export default AddIconButton;
