import { Fragment, Suspense, useEffect, useState } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";

// project imports
import AlbumInfoBar from "components/navigation/albums/InfoBarForm";
import InfoDrawer from "components/InfoDrawer";
import MainTable from "components/MainTable";

// services
import { contentService } from "services/navigation";

// hooks
import {
  useGetAlbumInfoMutation,
  useGetAlbumsQuery,
  useGetTrackInfoMutation,
  useGetTracksQuery,
} from "hooks/navigation";
import useDebounce from "hooks/useDebounce";

// redux
import { useAppSelector } from "store/hooks/redux";

// utils
import { ssrError } from "utils/errorWrapper";

// constants
import { TOKEN_ID, DEFAULT_LIMIT, DEFAULT_PAGE } from "api/constants";

// types
import { TrackListResponse, UpdateNavigationData } from "types/navigation";
import TrackInfoBar from "components/navigation/tracks/InfoBarForm";

function AlbumsPage(initialData: TrackListResponse | null) {
  const { push } = useRouter();
  const contentLimit = useAppSelector((state) => state.layout.contentLimit);

  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const debouncedValue: string = useDebounce(query, 500);

  const { tracks, totalPageCount } = useGetTracksQuery(
    page + 1,
    contentLimit,
    debouncedValue,
    initialData
  );

  const { trackInfo, getTrackInfo } = useGetTrackInfoMutation();

  // useEffect(() => {
  //   if (isChannelInfoError) {
  //     setDrawerOpen(false);
  //   }
  // }, [isChannelInfoError]);

  // const { updateChannel } = useUpdateChannelMutation();

  // handlers
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const updateItem = (updateData: UpdateNavigationData) => {
    // updateChannel(data);
    handleDrawerClose();
  };

  const handleCellClick = (albumId: string | number) => {
    setDrawerOpen(true);
    getTrackInfo(albumId as number);
  };

  const handlePageData = (value: number) => {
    setPage(value);
  };

  const handleQueryData = (queryData: string) => {
    setQuery(queryData);
  };

  return (
    <Fragment>
      <MainTable
        handleCellClick={handleCellClick}
        items={tracks}
        page={page}
        pageType="track"
        query={query}
        totalCount={totalPageCount}
        handlePageData={handlePageData}
        handleQuery={handleQueryData}
      />
      <InfoDrawer open={isDrawerOpen} onClose={handleDrawerClose}>
        <Suspense>
          {isDrawerOpen && (
            <TrackInfoBar
              details={trackInfo}
              updateItem={updateItem}
              handleFormClose={handleDrawerClose}
            />
          )}
        </Suspense>
      </InfoDrawer>
    </Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const token = req.cookies[TOKEN_ID];

  // if (!token) {
  //   return {
  //     notFound: true,
  //   };
  // }

  try {
    const initialData = await contentService.getTracks(
      DEFAULT_PAGE,
      DEFAULT_LIMIT,
      undefined,
      token
    );
    return {
      props: {
        initialData: initialData || null,
      },
    };
  } catch (err) {
    return ssrError(err);
  }
};

export default AlbumsPage;
