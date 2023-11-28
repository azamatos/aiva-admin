import { FC, memo } from "react";

// material ui
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";

// project imports
import ArtistBodyCells from "components/navigation/artists/bodyCells";
import AlbumBodyCells from "components/navigation/albums/bodyCells";
import TrackBodyCells from "components/navigation/tracks/bodyCells";

const getBodyCells = (pageType: PageType) => {
  switch (pageType) {
    case "artist":
      return ArtistBodyCells;
    case "album":
      return AlbumBodyCells;
    case "track":
      return TrackBodyCells;
  }
};

interface Props {
  visibleRows: any[];
  handleCellClick: (id: string | number) => void;
  pageType: PageType;
}

const EnhancedTableBody: FC<Props> = memo(
  ({ visibleRows, handleCellClick, pageType }) => {
    const BodyContent = getBodyCells(pageType);

    return (
      <TableBody>
        {visibleRows.map((row, index) => {
          return (
            <TableRow
              onClick={() => handleCellClick(row[pageType + "_id"])}
              hover
              key={index}
              sx={{ cursor: "pointer", height: 70 }}
            >
              <BodyContent row={row} />
            </TableRow>
          );
        })}
      </TableBody>
    );
  }
);

export default EnhancedTableBody;
