// material ui
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";

// project imports
import DrawerListItem from "./list-item";

const tabs = [
  { id: "dashboard" as TabName, title: "Главная" },
  { id: "navigation" as TabName, title: "Навигация" },
  { id: "settings" as TabName, title: "Настройки" },
];

const DrawerList = () => {
  return (
    <Stack height="100%" justifyContent="space-between">
      <List>
        {tabs?.map((item) => {
          return <DrawerListItem key={item.id} item={item} />;
        })}
      </List>
    </Stack>
  );
};

export default DrawerList;
