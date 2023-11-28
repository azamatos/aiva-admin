import { FC } from "react";

// material ui
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

// project imports
import { LogoutIcon } from "components/svg-icons/header/LogoutIcon";

interface Props {
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  logoutClick: () => void;
}

const AuthMenu: FC<Props> = ({ anchorEl, handleClose, logoutClick }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={Boolean(anchorEl)}
      onClose={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          width: 300,
          borderRadius: 3,
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem
        sx={{ display: "flex", gap: 2, height: 40 }}
        onClick={logoutClick}
      >
        <LogoutIcon />
        <Typography>Выйти</Typography>
      </MenuItem>
    </Menu>
  );
};

export default AuthMenu;
