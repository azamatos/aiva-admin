import { FC } from "react";

// material ui
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// utils
import { getLocaleDate } from "utils";

// types
import { Feedback, FeedbackStatus, UpdateFeedbackData } from "types/feedbacks";

// styles
import styles from "../styles.module.scss";

interface Props {
  row: Feedback;
  updateFeedbackStatus: (data: UpdateFeedbackData) => void;
}

const feedbackStatuses = { done: "Обработано", pending: "В ожидании" };

export const FeedbackTableBody: FC<Props> = ({ row, updateFeedbackStatus }) => {
  const handleStatusUpdate = (event: SelectChangeEvent<FeedbackStatus>) => {
    updateFeedbackStatus({
      feedbackId: row.id,
      status: event.target.value as FeedbackStatus,
    });
  };

  return (
    <div className={styles.tableBody}>
      <div
        id="tableColumn"
        style={{
          minWidth: 100,
          paddingLeft: 0,
          paddingRight: 12,
          display: "flex",
          justifyContent: "center",
          flex: "1 0 100px",
        }}
      >
        {row.imageUrl && (
          <img
            width={80}
            height={80}
            style={{ borderRadius: "50%" }}
            src={row.imageUrl}
          />
        )}
      </div>
      <div
        id="tableColumn"
        style={{
          minWidth: 120,
          paddingLeft: 0,
          paddingRight: 12,
          flex: "1 0 120px",
        }}
      >
        <span>{row?.moderator ? row?.moderator?.username : "Не назначен"}</span>
      </div>
      <div
        id="tableColumn"
        style={{
          minWidth: 120,
          paddingLeft: 0,
          paddingRight: 12,
          flex: "1 0 120px",
        }}
      >
        <span>{row?.platform?.name}</span>
      </div>
      <div
        id="tableColumn"
        style={{
          minWidth: 180,
          paddingLeft: 0,
          paddingRight: 0,
          flex: "1 0 180px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span>{row.text}</span>
        <span>{getLocaleDate(row.createdAt)}</span>
      </div>
      <div
        id="tableColumn"
        style={{
          minWidth: 200,
          paddingLeft: 0,
          paddingRight: 0,
          flex: "1 0 200px",
        }}
      >
        <Select
          sx={{
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
          }}
          value={row.status}
          onChange={handleStatusUpdate}
        >
          {Object.values(FeedbackStatus).map((status) => (
            <MenuItem key={status} value={status}>
              {feedbackStatuses[status]}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
};
