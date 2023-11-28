import { FC } from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

interface Props extends ButtonProps {
  loading: boolean;
}

const LoadingButton: FC<Props> = (props) => {
  const { loading, ...other } = props;

  if (loading) {
    return (
      <Button {...other}>
        <CircularProgress />
      </Button>
    );
  } else {
    return <Button {...other} />;
  }
};

export default LoadingButton;
