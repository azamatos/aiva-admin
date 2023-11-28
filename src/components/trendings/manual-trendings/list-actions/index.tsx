import { FC } from "react";

// material ui
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

// project imports
import AddIconButton from "components/add-icon-button";
import { DeleteIcon } from "components/svg-icons";

interface Props {
  handleDeleteFromList: () => void;
  handleOpenAddModal: () => void;
  isIconVisible: boolean;
}

export const ManualTrendingListActions: FC<Props> = ({
  handleDeleteFromList,
  handleOpenAddModal,
  isIconVisible,
}) => {
  return (
    <Box
      display="flex"
      justifyContent={isIconVisible ? "space-between" : "flex-end"}
      alignItems="center"
      padding="0 0 16px 10px"
    >
      {isIconVisible && (
        <IconButton onClick={handleDeleteFromList}>
          <DeleteIcon />
        </IconButton>
      )}
      <AddIconButton title="Добавить видео" handleClick={handleOpenAddModal} />
    </Box>
  );
};
