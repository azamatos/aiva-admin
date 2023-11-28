import { FC, ReactNode } from "react";

// material ui
import { styled, Theme, CSSObject, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";

// constants
import { LEFT_DRAWER_WIDTH } from "api/constants";

// redux
import { useAppSelector } from "store/hooks/redux";
import { isSidebarOpen } from "store/reducers/main";

const openedMixin = (theme: Theme): CSSObject => ({
  width: LEFT_DRAWER_WIDTH,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: theme.spacing(9),
  },
});

const MuiDrawer = styled(Drawer)(({ theme, open }) => ({
  width: LEFT_DRAWER_WIDTH,
  "& .MuiPaper-root": {
    borderRight: "1px solid #FFFFFF1A",
  },
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

interface Props {
  children: ReactNode;
}

const MiniDrawer: FC<Props> = ({ children }) => {
  const isDrawerOpen = useAppSelector(isSidebarOpen);
  const theme = useTheme();

  return (
    <MuiDrawer variant="permanent" theme={theme} open={isDrawerOpen}>
      {children}
    </MuiDrawer>
  );
};

export default MiniDrawer;
