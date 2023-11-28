import { FC } from "react";

// material ui
import Avatar, { AvatarProps } from "@mui/material/Avatar";

const UserAvatar: FC<AvatarProps> = (props) => {
  return (
    <Avatar {...props} sx={{ backgroundColor: "aquamarine", color: "#010606" }}>
      A
    </Avatar>
  );
};

export default UserAvatar;
