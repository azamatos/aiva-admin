import { FC, Suspense, lazy } from "react";

// material-ui
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { useTheme } from "@mui/material/styles";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";

// project imports
// const LoadingIcon = lazy(
//   () => import("components/svg-icons/others/LoadingIcon")
// );
// const ErrorIcon = lazy(() => import("components/svg-icons/others/ErrorIcon"));
// const CompleteIcon = lazy(
//   () => import("components/svg-icons/others/CompleteIcon")
// );
// const ThreeDotsLoader = lazy(() => import("components/ThreeDotsLoader"));

// types
import { AutoLoadData } from "types/dashboard";
import { Box } from "@mui/material";

// const getIcon = (status: DashboardStatus) => {
//   switch (status) {
//     case DashboardStatus.PENDING:
//       return <ThreeDotsLoader />;
//     case DashboardStatus.ACTIVE:
//       return <LoadingIcon />;
//     case DashboardStatus.ERROR:
//       return <ErrorIcon />;
//     case DashboardStatus.SUCCESS:
//       return <CompleteIcon />;
//   }
// };

interface Props {
  item: AutoLoadData;
  handleSelect: (jobId: number) => void;
  index: number;
}

const ChannelBlockItem: FC<Props> = ({ item, handleSelect, index }) => {
  const handleChannelSelect = () => handleSelect(item.job.id);

  return (
    <ListItem disableGutters disablePadding>
      <ListItemButton
        sx={{
          borderRadius: 2,
          border: "1px solid #aaaaaa1a",
          margin: "4px 8px",
        }}
        onClick={handleChannelSelect}
      >
        <ListItemAvatar>
          <Avatar src={item.artist.profile_image} />
        </ListItemAvatar>
        <ListItemText>
          <Box display="flex" justifyContent="space-between" marginBottom={1}>
            <Typography
              sx={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                WebkitLineClamp: "1",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                whiteSpace: "normal",
              }}
            >
              {item.artist.title}
            </Typography>
            <Typography
              sx={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                WebkitLineClamp: "1",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                whiteSpace: "normal",
              }}
            >
              {new Date(item.artist.created_at).toLocaleDateString("RU-ru")}
            </Typography>
          </Box>
          <Typography marginBottom={1} color="secondary">
            {item.artist.channel_id}
          </Typography>
          <Box width="100%" display="flex" justifyContent="space-between">
            <Typography color="#3ea6ff">
              success: {item.albums.success}
            </Typography>
            <Typography color="#FFCC00">
              warning: {item.albums.warning}
            </Typography>
            <Typography color="#FF4E45">error: {item.albums.error}</Typography>
          </Box>
        </ListItemText>
        {/* <ListItemIcon sx={{ justifyContent: "center" }}>
          <Suspense>{getIcon(item.status)}</Suspense>
        </ListItemIcon> */}
      </ListItemButton>
    </ListItem>
  );
};

export default ChannelBlockItem;
