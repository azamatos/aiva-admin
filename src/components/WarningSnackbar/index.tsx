// material ui
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import Alert from "@mui/material/Alert";

// redux
import { useAppDispatch, useAppSelector } from "store/hooks/redux";
import { closeSnackbar, snackbarMessage } from "store/reducers/main";

const AUTO_HIDE_DURATION = 3000;

const WarningSnackbar = ({}) => {
  const dispatch = useAppDispatch();
  const snackbarMsg = useAppSelector(snackbarMessage);

  const onClose = () => {
    dispatch(closeSnackbar());
  };

  return (
    <Snackbar
      open={snackbarMsg !== null}
      TransitionComponent={Slide}
      autoHideDuration={AUTO_HIDE_DURATION}
      onClose={onClose}
    >
      <Alert
        onClose={onClose}
        severity="warning"
        sx={{
          width: "100%",
        }}
      >
        <Typography sx={{ "&::first-letter": { textTransform: "capitalize" } }}>
          {snackbarMsg}
        </Typography>
      </Alert>
    </Snackbar>
  );
};

export default WarningSnackbar;
