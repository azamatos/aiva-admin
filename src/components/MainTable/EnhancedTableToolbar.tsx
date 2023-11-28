import { memo, FC, ChangeEvent } from "react";
import { useRouter } from "next/router";

// material-ui
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

// project imports
import { ReturnBackIcon } from "components/svg-icons/others/ReturnBackIcon";
import SearchBox from "components/SearchBox";

const pages = {
  artist: {
    title: "Список артистов",
    searchPlaceholder: "Поиск артиста",
    hasReturnBack: false,
  },
  album: {
    title: "Список альбомов",
    hasReturnBack: true,
    searchPlaceholder: "Поиск альбома",
  },
  track: {
    title: "Список треков",
    hasReturnBack: true,
    searchPlaceholder: "Поиск трека",
  },
};

interface EnhancedTableToolbar {
  value: string;
  onValueChange: (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  clearSearch: () => void;
  pageType: PageType;
}

const EnhancedTableToolbar: FC<EnhancedTableToolbar> = memo(
  ({ onValueChange, value, clearSearch, pageType }) => {
    const { back } = useRouter();

    const pageData = pages[pageType];

    const returnBack = () => {
      back();
    };

    return (
      <Toolbar
        sx={{
          height: 75,
          borderBottom: "1px solid #AAAAAA1F",
          justifyContent: "space-between",
        }}
      >
        <Box width={250} sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          {pageData.hasReturnBack && (
            <IconButton onClick={returnBack}>
              <ReturnBackIcon />
            </IconButton>
          )}

          <Typography
            fontSize={22}
            fontWeight={500}
            id="tableTitle"
            component="div"
          >
            {pageData.title}
          </Typography>
        </Box>

        <SearchBox
          value={value}
          onChange={onValueChange}
          clearSearch={clearSearch}
          placeholder={pageData.searchPlaceholder}
        />

        <Box
          width={250}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        ></Box>
      </Toolbar>
    );
  }
);

export default EnhancedTableToolbar;
