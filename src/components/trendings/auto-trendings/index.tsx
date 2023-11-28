import { ChangeEvent, FC, Fragment, UIEvent, useState } from "react";

// material ui
import List from "@mui/material/List";

// project imports
import { TrendingListActions } from "../list-actions";
import { TrendingListItem } from "../trending-item";

// hooks
import {
  useAutoGenerateTrendingMutation,
  useAutoTrendingsQuery,
  useUpdateManualTrendingsMutation,
} from "hooks/trending";

// types
import { TrendingResponse, TrendingType } from "types/trending";

interface Props {
  initialData: TrendingResponse | undefined;
}

interface TrendingSelection {
  [key: string]: boolean;
}

export const AutoTrendingsBlock: FC<Props> = ({ initialData }) => {
  const [trendingSelection, setTrendingSelection] = useState<TrendingSelection>(
    {} as TrendingSelection
  );

  const handleTrendingItemCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setTrendingSelection((prevState) => {
      return { ...prevState, [event.target.id]: event.target.checked };
    });
  };

  const { autoTrendings, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useAutoTrendingsQuery(initialData);

  const { autoGenerateTrending } = useAutoGenerateTrendingMutation("youtube");

  const { updateManualTrendings } = useUpdateManualTrendingsMutation();

  const handleMoveManualTrendings = () => {
    updateManualTrendings(Object.keys(trendingSelection));
    setTrendingSelection({} as TrendingSelection);
  };

  const handleScroll = (event: UIEvent<HTMLDivElement, globalThis.UIEvent>) => {
    // checking if we reached the bottom edge of playlist block
    const bottomReached =
      event.currentTarget.scrollHeight - event.currentTarget.scrollTop ===
      event.currentTarget.clientHeight;
    if (hasNextPage && !isFetchingNextPage && bottomReached) {
      fetchNextPage();
    }
  };

  const isIconVisible = Object.values(trendingSelection)?.some((item) => item);

  return (
    <Fragment>
      <TrendingListActions
        isPrimaryVisible={isIconVisible}
        primaryAction={handleMoveManualTrendings}
        secondaryAction={autoGenerateTrending}
        secondaryActionTitle="Обновить список"
        trendingType={TrendingType.AUTO}
      />
      <div
        style={{
          height: "calc(100% - 105px)",
          border: "1px solid #aaaaaa1a",
          borderRadius: 2,
        }}
      >
        <div
          onScroll={handleScroll}
          className="perfect-scrollbar"
          style={{ height: "100%" }}
        >
          <List
            component="ul"
            sx={{
              py: 2,
            }}
          >
            {autoTrendings?.pages.map((page, pageIndex) => (
              <Fragment key={pageIndex + "page"}>
                {page?.content?.map((item, itemIndex) => {
                  const isChecked = trendingSelection[item.youtubeId] ?? false;
                  return (
                    <TrendingListItem
                      isChecked={isChecked}
                      key={itemIndex + "item"}
                      item={item}
                      handleCheck={handleTrendingItemCheck}
                    />
                  );
                })}
              </Fragment>
            ))}
          </List>
        </div>
      </div>
    </Fragment>
  );
};
