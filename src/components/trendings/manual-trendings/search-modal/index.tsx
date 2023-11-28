import { ChangeEvent, FC, FocusEvent, useEffect, useState } from "react";

// material ui
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Box from "@mui/material/Box";

// project imports
import AddIconButton from "components/add-icon-button";
import { CancelIcon } from "components/svg-icons";
import SearchBox from "components/SearchBox";

// hooks
import { useSearchQuery } from "hooks/content";
import useDebounce from "hooks/useDebounce";

// constants
import { DEFAULT_LIMIT, DEFAULT_PAGE } from "api/constants";

// types
import { Content, ContentType } from "types/content";

interface Props {
  open: boolean;
  handleClose: () => void;
  handleAddVideos: (videoIds: string[]) => void;
}

export const AddTrendingSearchModal: FC<Props> = ({
  handleClose,
  open,
  handleAddVideos,
}) => {
  const [query, setQuery] = useState("");
  const [isSuggestionsOpen, setSuggestionsOpen] = useState(false);
  const [selectedVideos, setSelectedVideos] = useState<Content[]>([]);

  const debouncedQuery = useDebounce(query, 500);

  const { searchContent } = useSearchQuery(
    DEFAULT_PAGE,
    DEFAULT_LIMIT,
    debouncedQuery,
    ContentType.VIDEO
  );

  useEffect(() => {
    if (searchContent) {
      setSuggestionsOpen(searchContent?.length > 0 && query.length > 2);
    }
  }, [searchContent, query]);

  // handlers
  const handleQuery = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setQuery(event.target.value);
  };

  const handleInputFocus = (
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    if (searchContent) setSuggestionsOpen(true);
  };

  const handleSelectedVideo = (item: Content) => {
    setSelectedVideos((prevState) => {
      const selectedItems = prevState;
      const alreadyHasValue = selectedItems?.some(
        (el) => el.youtubeId === item.youtubeId
      );

      if (!alreadyHasValue) {
        selectedItems.push(item);
      }

      return selectedItems;
    });
    setSuggestionsOpen(false);
  };

  const handleUnselectVideo = (itemId: string) => {
    setSelectedVideos((prevState) => {
      return prevState?.filter((item) => item.youtubeId !== itemId);
    });
  };

  const handleAddVideosToManual = () => {
    const videoIds = selectedVideos?.map((item) => item.youtubeId);
    handleAddVideos(videoIds);
    handleClose();
    setSelectedVideos([]);
    setQuery("");
  };

  const handleClearQuery = () => {
    setQuery("");
    setSuggestionsOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          boxShadow: 24,
          borderRadius: 2,
          p: 2,
        }}
      >
        <Stack
          padding="12px 24px"
          gap={3}
          alignItems="center"
          position="relative"
        >
          <SearchBox
            value={query}
            onChange={handleQuery}
            clearSearch={handleClearQuery}
            placeholder="Введите название видео"
            onFocus={handleInputFocus}
          />
          {isSuggestionsOpen && (
            <Box
              sx={{
                position: "fixed",
                width: 500,
                zIndex: 2021,
                color: "red",
                backgroundColor: "#212121",
                top: 65,
              }}
            >
              <List>
                {searchContent?.map((item) => (
                  <MenuItem
                    onClick={() => handleSelectedVideo(item)}
                    style={{
                      height: 30,
                      borderRadius: 2,
                      padding: "0 16px",
                      display: "flex",
                      alignItems: "center",
                      // justifyContent: "space-between",
                      margin: "0 10px",
                    }}
                    key={item.youtubeId}
                  >
                    <Typography
                      sx={{
                        width: "100%",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </MenuItem>
                ))}
              </List>
            </Box>
          )}
          <Box
            width="100%"
            sx={{
              border: "1px solid rgba(255,255,255,0.1)",
              minHeight: 400,
              borderRadius: 2,
            }}
          >
            <List>
              {selectedVideos?.map((item) => (
                <MenuItem
                  key={item.youtubeId}
                  sx={{
                    height: 45,
                    margin: "10px",
                    padding: 2,
                    borderRadius: "10px",
                    gap: 1,
                    border: "1px solid rgba(255,255,255,0.5)",
                  }}
                >
                  <Typography
                    sx={{
                      width: "100%",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <IconButton
                    sx={{ height: 40, width: 40 }}
                    onClick={() => handleUnselectVideo(item.youtubeId)}
                  >
                    <CancelIcon width={24} height={24} fill="#fff" />
                  </IconButton>
                </MenuItem>
              ))}
            </List>
          </Box>
          <Box width="100%" display="flex" justifyContent="flex-end">
            <AddIconButton
              handleClick={handleAddVideosToManual}
              title="Добавить выбранные"
            />
          </Box>
        </Stack>
      </Paper>
    </Modal>
  );
};
