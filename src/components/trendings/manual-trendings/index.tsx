import { ChangeEvent, FC, Fragment, UIEvent, useState } from "react";

// project imports
import { TrendingListActions } from "../list-actions";
import { DragAndDropWrapper } from "./drag-and-drop-wrapper";
import { AddTrendingSearchModal } from "./search-modal";
import { TrendingListWrapper } from "../list-wrapper";

// services
import { trendingService } from "services/trending";

// hooks
import {
  useDeleteManualTrendingsMutation,
  useManualTrendingQuery,
  useUpdateManualTrendingsMutation,
} from "hooks/trending";

// types
import {
  ManualTrendingOrder,
  TrendingResponse,
  TrendingSelection,
  TrendingType,
} from "types/trending";

interface Props {
  initialData: TrendingResponse | undefined;
}

export const ManualTrendingsBlock: FC<Props> = ({ initialData }) => {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const { fetchNextPage, hasNextPage, isFetchingNextPage, manualTrendings } =
    useManualTrendingQuery(initialData);

  const { deleteManualTrendings } = useDeleteManualTrendingsMutation();

  const { updateManualTrendings } = useUpdateManualTrendingsMutation();

  const updateManualOrder = (data: ManualTrendingOrder) => {
    trendingService.updateManualOrder(data);
  };

  const [trendingSelection, setTrendingSelection] = useState<TrendingSelection>(
    {} as TrendingSelection
  );

  // handlers
  const handleTrendingItemCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setTrendingSelection((prevState) => {
      return { ...prevState, [event.target.id]: event.target.checked };
    });
  };

  const handleOpenAddModal = () => setAddModalOpen(true);

  const handleCloseAddModal = () => setAddModalOpen(false);

  const handleDeleteManualTrendings = () => {
    deleteManualTrendings(Object.keys(trendingSelection));
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

  // temporary variables
  const isIconVisible = Object.values(trendingSelection)?.some((item) => item);

  return (
    <Fragment>
      <TrendingListActions
        primaryAction={handleDeleteManualTrendings}
        secondaryAction={handleOpenAddModal}
        isPrimaryVisible={isIconVisible}
        secondaryActionTitle="Добавить видео"
        trendingType={TrendingType.MANUAL}
      />
      <DragAndDropWrapper
        handleTrendingItemCheck={handleTrendingItemCheck}
        trendingSelection={trendingSelection}
        handleScroll={handleScroll}
        manualData={manualTrendings}
        updateManualOrder={updateManualOrder}
      />
      <AddTrendingSearchModal
        handleAddVideos={updateManualTrendings}
        handleClose={handleCloseAddModal}
        open={isAddModalOpen}
      />
    </Fragment>
  );
};
