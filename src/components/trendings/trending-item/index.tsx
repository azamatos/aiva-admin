import { ChangeEvent } from "react";

// material ui
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";

// types
import { Trending } from "types/trending";

interface Props {
  item: Trending;
  isChecked: boolean;
  handleCheck: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const TrendingListItem = ({ item, handleCheck, isChecked }: Props) => {
  return (
    <MenuItem
      sx={{
        height: 80,
        width: 500,
        margin: "0 10px",
        padding: 0,
        borderRadius: "10px",
        gap: 1,
      }}
    >
      <Checkbox
        id={item?.youtubeId}
        checked={isChecked}
        onChange={handleCheck}
      />
      <img
        src={item?.thumbnail}
        width={100}
        height={50}
        alt={item?.title}
        style={{ borderRadius: 5 }}
      />
      <Box width="calc(100% - 150px)" paddingRight={1}>
        <Typography
          sx={{
            width: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {item?.title}
        </Typography>
        <Typography width="100%" color="secondary">
          {item?.channelTitle}
        </Typography>
      </Box>
    </MenuItem>
  );
};
