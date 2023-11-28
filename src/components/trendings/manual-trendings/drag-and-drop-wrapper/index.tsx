import {
  ChangeEvent,
  FC,
  UIEvent,
  useCallback,
  useEffect,
  useState,
} from "react";

// material ui
import List from "@mui/material/List";

// react query
import { InfiniteData } from "@tanstack/react-query";

// project imports
import { TrendingListItem } from "components/trendings/trending-item";

// drag and drop
import {
  DragDropContext,
  Draggable,
  DraggingStyle,
  DropResult,
  Droppable,
  NotDraggingStyle,
} from "react-beautiful-dnd";

// types
import {
  ManualTrendingOrder,
  Trending,
  TrendingResponse,
  TrendingSelection,
} from "types/trending";

// dragging item styles
const getItemStyle = (
  isDragging: boolean,
  draggableStyle: DraggingStyle | NotDraggingStyle | undefined
) => ({
  // change background colour if dragging
  display: "flex",
  alignItems: "center",
  borderRadius: "16px",
  background: isDragging ? "rgba(255,255,255,0.1)" : "transparent",

  // styles we need to apply on draggables
  ...draggableStyle,
});

interface Props {
  handleScroll: (event: UIEvent<HTMLDivElement, globalThis.UIEvent>) => void;
  manualData: InfiniteData<TrendingResponse> | undefined;
  trendingSelection: TrendingSelection;
  handleTrendingItemCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  updateManualOrder: (data: ManualTrendingOrder) => void;
}

export const DragAndDropWrapper: FC<Props> = ({
  handleScroll,
  manualData,
  handleTrendingItemCheck,
  trendingSelection,
  updateManualOrder,
}) => {
  const [manualVideos, setManualVideos] = useState([] as Trending[]);
  
  useEffect(() => {
    if (manualData) {
      const videos = manualData?.pages?.reduce(
        (accumPage, currentPage) => accumPage.concat(currentPage.content),
        [] as Trending[]
      );
      setManualVideos(videos);
    }
  }, [manualData]);

  // drag and drop logic
  const onDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) {
        return;
      }

      setManualVideos((prevState) => {
        const [removed] = prevState.splice(result.source.index, 1);
        prevState.splice(result.destination!.index, 0, removed);

        return prevState;
      });

      updateManualOrder({
        videoId: result.draggableId,
        position: result.destination.index,
      });
    },

    [setManualVideos, updateManualOrder]
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div
        style={{
          height: "calc(100% - 105px)",
          border: "1px solid #aaaaaa1a",
          borderRadius: 2,
        }}
      >
        <div
          onScroll={handleScroll}
          style={{ height: "100%" }}
          className="perfect-scrollbar"
        >
          <Droppable
            key={"manual_list"}
            droppableId={"manual-list"}
            direction="vertical"
          >
            {(provided, snapshot) => (
              <List
                ref={provided.innerRef}
                {...provided.droppableProps}
                component="ul"
                sx={{
                  py: 2,
                }}
              >
                {manualVideos?.map((item, index) => {
                  const isChecked = trendingSelection[item?.youtubeId] ?? false;
                  return (
                    <Draggable
                      draggableId={item?.youtubeId}
                      key={item?.youtubeId}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          key={index}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          <TrendingListItem
                            isChecked={isChecked}
                            handleCheck={handleTrendingItemCheck}
                            item={item}
                          />
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </List>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
};
