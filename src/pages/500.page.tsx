import { useRouter } from "next/router";

// material ui
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

function Custom500() {
  const theme = useTheme();
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };

  return (
    <div
      style={{
        height: "calc(100vh - 450px)",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 12,
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.primary.dark[800]
            : theme.palette.primary.light,
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Typography
          fontSize={24}
          paddingRight={2}
          marginRight={2}
          borderRight="1px solid #ffffff"
        >
          500
        </Typography>
        <Divider />
        <Typography variant="h4">Что то пошло не так.</Typography>
      </div>

      <Button
        onClick={handleClick}
        color="primary"
        sx={{
          "&:hover": { backgroundColor: "#282828" },
          textTransform: "none",
        }}
      >
        Вернутся на главную страницу
      </Button>
    </div>
  );
}

export default Custom500;
