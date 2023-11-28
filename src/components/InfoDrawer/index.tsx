import { FC } from "react";

// material ui
import { useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";

// constants
import { RIGHT_DRAWER_WIDTH } from "api/constants";

interface Props {
  children: JSX.Element;
  open: boolean;
  onClose: () => void;
}

const InfoDrawer: FC<Props> = ({ children, open, onClose }) => {
  const container =
    window !== undefined ? () => window.document.body : undefined;

  const theme = useTheme();

  return (
    <Drawer
      container={container}
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        zIndex: theme.zIndex.drawer + 2,
        "& .MuiDrawer-paper": {
          width: RIGHT_DRAWER_WIDTH,
          background: theme.palette.background.paper,
          color: theme.palette.text.primary,
          borderRight: "none",
        },
      }}
      ModalProps={{ keepMounted: true }}
      color="inherit"
    >
      <Grid
        container
        sx={{
          height: "inherit",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {children}
      </Grid>
    </Drawer>
  );
};

export default InfoDrawer;
