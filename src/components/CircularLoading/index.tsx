import { FC } from "react";
import Box from "@mui/material/Box";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";

const CircularLoading: FC<CircularProgressProps> = (props) => (
  <Box
    width="100%"
    height="100%"
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <CircularProgress {...props} />
  </Box>
);

export default CircularLoading;
