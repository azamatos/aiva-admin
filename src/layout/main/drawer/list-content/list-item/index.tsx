import {
  FC,
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef,
} from "react";
import { useRouter } from "next/router";

// material ui
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";

// project imports
import ComponentWrapper from "components/svg-icons/layout/DynamicLoader";
import Link from "Link";

// redux
import { useAppSelector } from "store/hooks/redux";
import { isSidebarOpen } from "store/reducers/main";

interface Props {
  item: Tab;
}

const DrawerListItem: FC<Props> = ({ item }) => {
  const open = useAppSelector(isSidebarOpen);
  const { pathname } = useRouter();
  const url = `/${item.id}`;
  const isPageSelected = pathname.startsWith(url);

  let listItemProps: {
    component:
      | ForwardRefExoticComponent<RefAttributes<HTMLAnchorElement>>
      | string;
    href?: string;
    target?: LinkTarget;
  } = {
    component: forwardRef((props, ref) => (
      <Link ref={ref} {...props} href={url} />
    )),
  };

  const icon = ComponentWrapper({
    id: item.id,
    path: pathname,
    component: item.id,
  });

  return (
    <ListItemButton
      selected={isPageSelected}
      {...listItemProps}
      sx={{
        minHeight: 48,
        borderLeftWidth: 4,
        borderLeftStyle: "solid",
        borderLeftColor: isPageSelected ? "aquamarine" : "#282828",
        px: 2.5,
      }}
    >
      <Icon
        sx={{
          mr: open ? 3 : "auto",
          justifyContent: "center",
        }}
      >
        {icon}
      </Icon>
      <ListItemText
        primary={item.title}
        sx={{
          opacity: open ? 1 : 0,
          "& .MuiListItemText-primary": {
            fontSize: 15,
            fontWeight: 500,
            color: isPageSelected ? "#ff4e45" : "#aaaaaa",
          },
        }}
      />
    </ListItemButton>
  );
};

export default DrawerListItem;
