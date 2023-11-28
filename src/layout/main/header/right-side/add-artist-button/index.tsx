import { FC } from "react";

// material ui
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

// components
import { AddArtistIcon } from "components/svg-icons/others/AddArtistIcon";

interface Props {
  handleOpen: () => void;
}

const AddChannelButton: FC<Props> = ({ handleOpen }) => (
  <IconButton
    sx={{
      display: "flex",
      height: 36,
      borderRadius: 2,
      flexDirection: "row",
      alignItems: "center",
      gap: 1,
      border: "1px solid #aaaaaa1a",
      px: 1,
    }}
    onClick={handleOpen}
  >
    <AddArtistIcon />
    <Typography
      textTransform="uppercase"
      whiteSpace="nowrap"
      overflow="hidden"
      textOverflow="ellipsis"
      fontWeight={500}
    >
      Новый артист
    </Typography>
  </IconButton>
);

export default AddChannelButton;
