import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

function Custom404() {
  const theme = useTheme();
  return (
    <div
      style={{
        height: "calc(100vh - 450px)",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.primary.dark[800]
            : theme.palette.primary.light,
      }}
    >
      <Typography
        fontSize={24}
        paddingRight={2}
        marginRight={2}
        borderRight="1px solid #ffffff"
      >
        404
      </Typography>
      <Divider />
      <Typography variant="h5">Страница не найдена.</Typography>
    </div>
  );
}

export default Custom404;
