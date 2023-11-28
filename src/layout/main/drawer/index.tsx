// material ui
import Box from "@mui/material/Box";

// project imports
import DrawerList from "./list-content/index";
import MiniDrawer from "./mini-drawer";
import DrawerHeader from "./header";
import { MainLogo } from "components/svg-icons";

const Drawer = () => {
  return (
    <MiniDrawer>
      <DrawerHeader />
      <Box
        sx={{
          width: "100%",
          height: 100,
          padding: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MainLogo width="100%" height={120} />
      </Box>
      <DrawerList />
    </MiniDrawer>
  );
};

export default Drawer;
