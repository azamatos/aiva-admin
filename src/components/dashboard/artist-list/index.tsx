import { FC } from "react";

// material ui
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import Box from "@mui/material/Box";

// project imports
import ChannelBlockItem from "./artist-item";

// constants
import { dashboardTitles } from "api/data/dashboard";

// types
import { AutoLoadData, AutoloadType } from "types/dashboard";

interface Props {
  handleSelect: (jobId: number) => void;
  title: AutoloadType;
  item: AutoLoadData[];
}

const ArtistList: FC<Props> = ({ handleSelect, item, title }) => {
  const theme = useTheme();

  return (
    <Box
      minWidth={400}
      maxWidth={600}
      sx={{
        backgroundColor: theme.palette.background.paper,
        border: "1px solid #aaaaaa1a",
        borderRadius: 2,
        p: 2,
      }}
    >
      <Typography
        fontSize={22}
        color="aquamarine"
        fontWeight={500}
        sx={{ pb: 2 }}
      >
        {dashboardTitles[title]}
      </Typography>
      <Box
        sx={{
          height: "calc(100% - 45px)",
          border: "1px solid #aaaaaa1a",
          borderRadius: 2,
        }}
      >
        <Box
          height="100%"
          className="perfect-scrollbar"
          style={{ overflow: "auto" }}
        >
          <List
            component="ul"
            sx={{
              py: 2,
            }}
          >
            {item.map((item, index) => (
              <ChannelBlockItem
                key={index}
                item={item}
                index={index}
                handleSelect={handleSelect}
              />
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default ArtistList;
