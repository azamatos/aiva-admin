import { FC } from "react";

// material ui
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

// project imports
import { RetryIcon } from "components/svg-icons/dashboard/RetryIcon";
import { DeleteIcon } from "components/svg-icons/others/DeleteIcon";
import { MoveIcon } from "components/svg-icons/trendings/MoveIcon";
import AddIconButton from "components/add-icon-button";

// types
import { TrendingType } from "types/trending";

interface Props {
  primaryAction: () => void;
  secondaryAction: () => void;
  isPrimaryVisible: boolean;
  secondaryActionTitle: string;
  trendingType: TrendingType;
}

export const TrendingListActions: FC<Props> = ({
  primaryAction,
  secondaryAction,
  isPrimaryVisible,
  secondaryActionTitle,
  trendingType,
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      padding="0 8px 12px 12px"
      justifyContent={isPrimaryVisible ? "space-between" : "flex-end"}
    >
      {/* checking if icon visible, depending on element selection */}
      {isPrimaryVisible && (
        <IconButton onClick={primaryAction}>
          {/* showing icon based on trending type called this component */}
          {trendingType === TrendingType.MANUAL ? (
            <DeleteIcon />
          ) : (
            <MoveIcon fill="#f1f1f1" />
          )}
        </IconButton>
      )}

      {/* showing button based on trending type called this component */}
      {trendingType === TrendingType.MANUAL ? (
        <AddIconButton title="Добавить видео" handleClick={secondaryAction} />
      ) : (
        <IconButton
          onClick={secondaryAction}
          sx={{ height: 40, padding: 1, borderRadius: 1 }}
        >
          <RetryIcon width={36} height={36} fill="#fff" />
          <Typography>{secondaryActionTitle}</Typography>
        </IconButton>
      )}
    </Box>
  );
};
