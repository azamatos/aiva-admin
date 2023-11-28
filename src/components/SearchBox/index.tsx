import { FC } from "react";

// material-ui
import IconButton from "@mui/material/IconButton";
import InputBase, { InputBaseProps } from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";

// icons
import { CancelIcon, SearchIcon } from "components/svg-icons/others";

interface Props extends InputBaseProps {
  clearSearch: () => void;
}

const SearchBox: FC<Props> = ({ clearSearch, ...props }) => {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        border: "1px solid #606060",
        borderRadius: 1.3,
        height: 36,
        width: 500,
      }}
    >
      <IconButton disabled>
        <SearchIcon />
      </IconButton>
      <InputBase
        {...props}
        sx={{ p: 0.5, flex: 1, pr: 1 }}
        inputProps={{ "aria-label": "search channels or videos" }}
      />
      {typeof props.value === "string" && props.value?.length > 0 && (
        <IconButton
          sx={{ p: 0 }}
          aria-label="cancel search"
          onClick={clearSearch}
        >
          <CancelIcon fill="#606060" />
        </IconButton>
      )}
    </Paper>
  );
};

export default SearchBox;
