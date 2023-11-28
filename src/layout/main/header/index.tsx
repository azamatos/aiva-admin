import { useRouter } from "next/router";
import { deleteCookie } from "cookies-next";

// material ui
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";

// project imports
import { MainLogo, BurgerIcon } from "components/svg-icons/header";
import RightSideBlock from "./right-side";

// hooks
import { useAutoloadAddArtist } from "hooks/dashboard";

// redux
import { toggleSidebar } from "store/reducers/main";
import { useAppDispatch } from "store/hooks/redux";

// constants
import { HEADER_HEIGHT, TOKEN_ID } from "api/constants";

// types
// import { AddChannelParams } from "types/dashboard";

const Header = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { push } = useRouter();

  const { addArtist } = useAutoloadAddArtist();

  const handleSidebarClick = () => {
    dispatch(toggleSidebar());
  };

  const logoutClick = () => {
    deleteCookie(TOKEN_ID);
    push("/login");
  };

  const handleAddChannel = (channelId: string) => {
    addArtist(channelId);
  };

  const goToMainPage = () => {
    push("/");
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
      <Toolbar
        disableGutters
        sx={{
          minWidth: 450,
          pl: 2,
          pr: 3,
          height: HEADER_HEIGHT,
          justifyContent: "space-between",
        }}
      >
        <Stack direction="row" gap={2}>
          <IconButton onClick={handleSidebarClick}>
            <BurgerIcon fill={theme.palette.secondary.main} />
          </IconButton>
          <IconButton
            onClick={goToMainPage}
            sx={{ padding: 0, "&:hover": { backgroundColor: "inherit" } }}
          >
            <MainLogo width={130} height={40} fill="#fff" />
          </IconButton>
        </Stack>
        <RightSideBlock
          handleAddChannel={handleAddChannel}
          logoutClick={logoutClick}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
