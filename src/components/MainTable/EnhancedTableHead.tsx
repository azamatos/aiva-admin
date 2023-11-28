import { FC, MouseEvent, memo } from "react";

// material ui
import TableSortLabel from "@mui/material/TableSortLabel";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

// constants
import {
  albumHeadCells,
  artistHeadCells,
  trackHeadCells,
} from "api/constants/tableConstants";

const getHeadCells = (pageType: PageType) => {
  switch (pageType) {
    case "artist":
      return artistHeadCells;
    case "album":
      return albumHeadCells;
    case "track":
      return trackHeadCells;
  }
};

interface EnhancedTableProps {
  onRequestSort: (event: MouseEvent<unknown>, property: string) => void;
  order: Order;
  orderBy: string;
  pageType: PageType;
}

const EnhancedTableHead: FC<EnhancedTableProps> = memo(
  ({ onRequestSort, order, orderBy, pageType }) => {
    const createSortHandler =
      (property: string) => (event: MouseEvent<unknown>) => {
        onRequestSort(event, property);
      };

    const headCells = getHeadCells(pageType);

    return (
      <TableHead>
        <TableRow>
          <TableCell />
          {headCells?.map((headCell, index) => (
            <TableCell
              key={headCell.id + String(index)}
              align={headCell.align}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
);

export default EnhancedTableHead;
