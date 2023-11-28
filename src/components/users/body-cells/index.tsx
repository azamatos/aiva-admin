import { FC, Fragment } from "react";

// material ui
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import { Avatar, Box } from "@mui/material";

// project imports
import {
  AccessClosedIcon,
  AccessOpenedIcon,
  AccessRestrictedIcon,
} from "components/SvgComponents/content";

// constants
import { ACCESS_TYPES } from "api/constants";

// types
import { ContentAccessType } from "types/content";
import { User } from "types/users";

const getAccessIcon = (accessType: ContentAccessType) => {
  switch (accessType) {
    case ContentAccessType.CLOSED:
      return <AccessClosedIcon />;
    case ContentAccessType.OPENED:
      return <AccessOpenedIcon />;
    default:
      return <AccessRestrictedIcon />;
  }
};

interface Props {
  type: PageType;
  row: User;
}

const UsersBodyCells: FC<Props> = ({ row }) => (
  <Fragment>
    <TableCell sx={{ userSelect: "none" }}>
      <Avatar sx={{ backgroundColor: row.avatarColor }} alt={row.firstName}>
        {row?.firstName?.charAt(0)}
      </Avatar>
    </TableCell>
    <TableCell sx={{ userSelect: "none" }}>
      <Typography
        sx={{
          overflow: "hidden",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: "1",
          whiteSpace: "pre-wrap",
        }}
      >
        {row.firstName}&nbsp;{row.lastName}
      </Typography>
    </TableCell>
    <TableCell sx={{ userSelect: "none" }} align="left">
      {row.role}
    </TableCell>
    <TableCell sx={{ userSelect: "none" }} align="left">
      <Box display="flex" alignItems="center" gap={1}>
        {getAccessIcon(row.state)}
        <Typography>{ACCESS_TYPES[row.state as ContentAccessType]}</Typography>
      </Box>
    </TableCell>
  </Fragment>
);

export default UsersBodyCells;
