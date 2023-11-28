import { FC } from "react";

// material-ui
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

interface Props {
  children: JSX.Element;
}

const AuthWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.primary.dark[800]
      : theme.palette.primary.light,
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
}));

const AuthLayout: FC<Props> = ({ children }) => {
  return (
    <AuthWrapper>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ height: "70vh" }}
      >
        {children}
      </Grid>
    </AuthWrapper>
  );
};

export default AuthLayout;
