import { FC, Fragment } from "react";

import Typography from "@mui/material/Typography";
import TableCell from "@mui/material/TableCell";
import Box from "@mui/material/Box";

// project imports
import {
  AccessClosedIcon,
  AccessOpenedIcon,
  AccessRestrictedIcon,
} from "components/SvgComponents/content";

// utils
import { getLocaleDate } from "utils";

// constants
// import { ACCESS_TYPES } from "api/constants";

// types

// const getAccessIcon = (accessType: ContentAccessType) => {
//   switch (accessType) {
//     case ContentAccessType.CLOSED:
//       return <AccessClosedIcon />;
//     case ContentAccessType.OPENED:
//       return <AccessOpenedIcon />;
//     default:
//       return <AccessRestrictedIcon />;
//   }
// };

interface Props {
  row: BasicTrack;
}

const TrackBodyCells: FC<Props> = ({ row }) => (
  <Fragment>
    <TableCell>
      <div style={{ display: "flex" }}>
        <img
          // width={type === "video" ? 80 : 45}
          width={45}
          height={45}
          src={row.thumbnail}
          style={{ borderRadius: "25px" }}
          // style={{ borderRadius: type === "video" ? "4px" : "25px" }}
          alt={row.title}
        />
      </div>
    </TableCell>
    <TableCell>
      <Typography
        sx={{
          overflow: "hidden",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: "1",
          whiteSpace: "pre-wrap",
        }}
      >
        {row.title}
      </Typography>
    </TableCell>
    <TableCell align="left">
    <Typography>{row.video_id}</Typography>
    </TableCell>
    {/* <TableCell align="left">
      <Box display="flex" alignItems="center" gap={1}>
        {getAccessIcon(row.accessType)}
        <Typography>{ACCESS_TYPES[row.accessType]}</Typography>
      </Box>
    </TableCell> */}
    <TableCell align="left">{getLocaleDate(row.created_at)}</TableCell>
  </Fragment>
);

export default TrackBodyCells;
