import { FC } from "react";

// material ui
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";

// types
import { SettingsType } from "types/settings";

// types

interface Props {
  items: { id: SettingsType; title: string }[];
  handleSelect: (id: SettingsType) => void;
  selectedBlock: SettingsType;
}

const SettingsList: FC<Props> = ({ items, handleSelect, selectedBlock }) => {
  return (
    <List
      sx={{
        minWidth: 280,
        borderRight: "1px solid #aaaaaa1a",
      }}
    >
      {items.map((item) => (
        <ListItemButton
          selected={item.id === selectedBlock}
          key={item.id}
          sx={{ px: 3, height: 48 }}
          onClick={() => handleSelect(item.id)}
        >
          <ListItemText
            primary={<Typography fontWeight={500}>{item.title}</Typography>}
          />
        </ListItemButton>
      ))}
    </List>
  );
};

export default SettingsList;
