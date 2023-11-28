import { FC, type ReactNode } from "react";
import dynamic from "next/dynamic";

// material ui
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

// project imports
const DrawerHeader = dynamic(() => import("./drawer/header"));
const Header = dynamic(() => import("./header"));
const Drawer = dynamic(() => import("./drawer"));

import Loader from "../loader";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <Box display="flex">
      <CssBaseline />
      <Header />
      <Loader />
      <Drawer />
      <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
