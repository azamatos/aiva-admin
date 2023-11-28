import { useCallback, useEffect, useState } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { AxiosError } from "axios";

// project imports
import { ArtistDetails } from "components/dashboard/artist-details";
import ArtistList from "components/dashboard/artist-list";

// material ui
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";

// service
import { dashboardService } from "services/dashboard";

// hooks
import {
  useAutoloadResponse,
  useGetArtistDetailsMutation,
  useRetryAutoloadParseMutation,
} from "hooks/dashboard";

// utils
import { ssrError } from "utils/errorWrapper";

// constants
import { TOKEN_ID } from "api/constants";

// types
import { AutoLoadResponse } from "types/dashboard";

interface Props {
  initialHandle: AutoLoadResponse;
  initialDownload: AutoLoadResponse;
  initialComplete: AutoLoadResponse;
}

function Dashboard({ initialComplete, initialDownload, initialHandle }: Props) {
  const [isModalOpen, setModalOpen] = useState(false);

  const { data: handle } = useAutoloadResponse(initialHandle, "handle");
  const { data: download } = useAutoloadResponse(initialDownload, "download");

  const { data: complete } = useAutoloadResponse(initialComplete, "complete");

  const { artistDetails, getArtistDetails } = useGetArtistDetailsMutation();

  const { retryAutoloadParse } = useRetryAutoloadParseMutation();

  // handlers
  const handleArtistSelection = (jobId: number) => {
    setModalOpen(true);
    getArtistDetails(jobId);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // const handleCancelChannel = () => {
  //   // if (channelInfo) {
  //   //   cancelChannelProcess(channelInfo.channelId);
  //   // }
  //   handleCloseModal();
  // };

  const handleRetryAutoloadParse = () => {
    if (artistDetails) {
      retryAutoloadParse(artistDetails.artist.channel_id);
    }
    handleCloseModal();
  };

  // const handleUpdateAccess = () => {
  //   // if (channelInfo) {
  //   //   updateAccessType(channelInfo.channelId);
  //   // }
  //   handleCloseModal();
  // };

  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 130px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          height: "100%",
          gap: "48px",
          justifyContent: "center",
        }}
      >
        {handle && (
          <ArtistList
            title="handle"
            key="handle"
            handleSelect={handleArtistSelection}
            item={handle.artists.data}
          />
        )}
        {download && (
          <ArtistList
            key="download"
            title="download"
            handleSelect={handleArtistSelection}
            item={download.artists.data}
          />
        )}
        {complete && (
          <ArtistList
            title="complete"
            key="complete"
            handleSelect={handleArtistSelection}
            item={complete.artists.data}
          />
        )}
      </div>
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 450,
            boxShadow: 24,
            borderRadius: 2,
            p: 2,
          }}
          style={{ backgroundColor: "#212121" }}
        >
          <ArtistDetails artistInfo={artistDetails} handleRetryAutoloadParse={handleRetryAutoloadParse} />
        </Paper>
      </Modal>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const token = req.cookies[TOKEN_ID];

  try {
    const initialHandle = await dashboardService.getAutoload("handle", token);

    const initialDownload = await dashboardService.getAutoload(
      "download",
      token
    );

    const initialComplete = await dashboardService.getAutoload(
      "complete",
      token
    );

    return { props: { initialHandle, initialComplete, initialDownload } };
  } catch (err) {
    const error = err as AxiosError;
    return ssrError(error);
  }
};

export default Dashboard;
