import { FC, MouseEvent, useState } from "react";

// material-ui
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

// project imports
import AddChannelButton from "./add-artist-button";
import AddChannelBlock from "./add-artist-modal";
import UserAvatar from "components/UserAvatar";
import AuthMenu from "./auth-menu";

// types

interface Props {
  logoutClick: () => void;
  handleAddChannel: (channelId: string) => void;
}

const RightSideBlock: FC<Props> = ({ logoutClick, handleAddChannel }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [addChannelOpen, setAddChannelOpen] = useState(false);

  const handleAuthClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleAuthClose = () => {
    setAnchorEl(null);
  };

  const handleModalOpen = () => {
    setAddChannelOpen(true);
  };

  const handleModalClose = () => {
    setAddChannelOpen(false);
  };

  const addChannel = (channelId: string) => {
    handleAddChannel(channelId);
    handleModalClose();
  };

  return (
    <Stack direction="row" alignItems="center" gap={2}>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <AddChannelButton handleOpen={handleModalOpen} />
      </Box>
      <IconButton sx={{ p: 0 }} onClick={handleAuthClick}>
        <UserAvatar sx={{ width: 32, height: 32 }} />
      </IconButton>
      <AuthMenu
        anchorEl={anchorEl}
        handleClose={handleAuthClose}
        logoutClick={logoutClick}
      />
      <AddChannelBlock
        open={addChannelOpen}
        handleSubmit={addChannel}
        handleClose={handleModalClose}
      />
    </Stack>
  );
};

export default RightSideBlock;
