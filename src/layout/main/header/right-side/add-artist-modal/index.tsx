import { ChangeEvent, FC, useEffect, useRef, useState } from "react";

// material-ui
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

// project imports
import { CancelIcon } from "components/svg-icons";

interface Props {
  handleSubmit: (channelId: string) => void;
  open: boolean;
  handleClose: (value: boolean) => void;
}

const AddChannelBlock: FC<Props> = ({ open, handleSubmit, handleClose }) => {
  const channelIdRef = useRef<HTMLInputElement>(null);

  const [channelId, setChannelId] = useState<string>("");

  // autofocus works only on page load, so we need to focus element on modal open
  useEffect(() => {
    setTimeout(() => channelIdRef.current?.focus(), 0);
  }, [open]);

  // handlers
  const addChannel = () => {
    handleSubmit(channelId);
    setChannelId("");
  };

  const closeModal = () => {
    handleClose(false);
    setChannelId("");
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setChannelId(event.target.value);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          boxShadow: 24,
          borderRadius: 2,
          p: 2,
        }}
      >
        <Box
          id="responsive-dialog-title"
          sx={{
            p: 2,
            pt: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography fontSize={20}>Добавление артиста</Typography>
          <IconButton onClick={closeModal}>
            <CancelIcon height={30} width={30} fill="#fff" />
          </IconButton>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          sx={{ alignItems: "flex-start", py: 2, px: 3, gap: 2.5 }}
        >
          <TextField
            autoFocus
            inputRef={channelIdRef}
            fullWidth
            placeholder="Введите ID артиста"
            value={channelId}
            onChange={handleInput}
            label="Идентификатор артиста"
            sx={{ p: 0 }}
          />
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Button autoFocus variant="contained" onClick={addChannel}>
            Добавить
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
};

export default AddChannelBlock;
