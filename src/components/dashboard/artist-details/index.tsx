import React, { FC } from "react";

// material ui

import Box from "@mui/material/Box";

// project imports

// utils
import { formatDuration, getLocaleDate } from "utils";

// constants

// types
import { ArtistDetailsResponse } from "types/dashboard";
import CircularLoading from "components/CircularLoading";
import { TreeView } from "@mui/x-tree-view";
import { DropdownIcon } from "components/svg-icons/dashboard/DropdownIcon";
import { ArrowRightIcon } from "components/svg-icons/dashboard/ArrowRightIcon";
import { StyledTreeItem } from "./tree-item";
import { AlbumIcon } from "components/svg-icons/dashboard/AlbumIcon";
import { TrackIcon } from "components/svg-icons/dashboard/TrackIcon";
import { CompleteIcon } from "components/svg-icons/dashboard/CompleteIcon";
import { WarningIcon } from "components/svg-icons/dashboard/WarningIcon";
import ErrorIcon from "components/svg-icons/dashboard/ErrorIcon";

interface Props {
  artistInfo: ArtistDetailsResponse | undefined;
  handleRetryAutoloadParse: () => void;
}

export const ArtistDetails: FC<Props> = ({
  artistInfo,
  handleRetryAutoloadParse,
}) => {
  const successfulAlbums = artistInfo?.albums.success.data;
  const warningAlbums = artistInfo?.albums.warning.data;
  const errorAlbums = artistInfo?.albums.error.data;

  return (
    <Box
      height={400}
      width="100%"
      display="flex"
      justifyContent="center"
      sx={{ border: "1px solid rgba(170, 170, 170, 0.1)", borderRadius: 2 }}
    >
      {artistInfo ? (
        <TreeView
          defaultExpanded={["success"]}
          className="perfect-scrollbar"
          aria-label="artist-details"
          defaultCollapseIcon={<DropdownIcon fill="#f1f1f1" />}
          defaultExpandIcon={<ArrowRightIcon fill="#f1f1f1" />}
          defaultEndIcon={<div style={{ width: 24 }} />}
          sx={{
            scrollbarGutter: "stable",
            maxWidth: 400,
            flexGrow: 1,
            overflowY: "auto",
            height: "100%",
            padding: "12px",
          }}
        >
          <StyledTreeItem
            nodeId="success"
            labelText="Success block"
            labelIcon={CompleteIcon}
            labelInfo={String(artistInfo.albums.success.count)}
          >
            {successfulAlbums?.map((album, index) => (
              <StyledTreeItem
                key={index + "success"}
                nodeId={index + "success"}
                labelText={album.title}
                labelIcon={AlbumIcon}
                labelInfo={String(album.track_count)}
              >
                {album?.tracks?.success?.data?.map((track, trackIndex) => (
                  <StyledTreeItem
                    key={
                      successfulAlbums.length + index * trackIndex + "success"
                    }
                    nodeId={
                      successfulAlbums.length + index * trackIndex + "success"
                    }
                    labelText={track.title}
                    labelIcon={TrackIcon}
                    labelInfo={formatDuration(track.duration_in_seconds)}
                    color="#1a73e8"
                    bgColor="#e8f0fe"
                    colorForDarkMode="#B8E7FB"
                    bgColorForDarkMode="#071318"
                  />
                ))}
                {album?.tracks?.warning?.data?.map((track, trackIndex) => (
                  <StyledTreeItem
                    key={
                      successfulAlbums.length + index * trackIndex + "warning"
                    }
                    nodeId={
                      successfulAlbums.length + index * trackIndex + "warning"
                    }
                    labelText={track.title}
                    labelIcon={TrackIcon}
                    labelInfo={formatDuration(track.duration_in_seconds)}
                    color="#3c8039"
                    bgColor="#e6f4ea"
                    colorForDarkMode="#CCE8CD"
                    bgColorForDarkMode="#0C130D"
                  />
                ))}
                {album?.tracks?.error?.data?.map((track, trackIndex) => (
                  <StyledTreeItem
                    key={successfulAlbums.length + index * trackIndex + "error"}
                    nodeId={
                      successfulAlbums.length + index * trackIndex + "error"
                    }
                    labelText={track.title}
                    labelIcon={TrackIcon}
                    labelInfo={formatDuration(track.duration_in_seconds)}
                    color="#a250f5"
                    bgColor="#f3e8fd"
                    colorForDarkMode="#D9B8FB"
                    bgColorForDarkMode="#100719"
                  />
                ))}
              </StyledTreeItem>
            ))}
          </StyledTreeItem>

          <StyledTreeItem
            nodeId="warning"
            labelText="Warning block"
            labelIcon={WarningIcon}
            labelInfo={String(artistInfo.albums.warning.count)}
          >
            {warningAlbums?.map((album, index) => {
              const key = index + "warning";

              return (
                <StyledTreeItem
                  key={key}
                  nodeId={key}
                  labelText={album.title}
                  labelIcon={AlbumIcon}
                  labelInfo={String(album.track_count)}
                >
                  {album?.tracks?.success?.data?.map((track, trackIndex) => {
                    const childKey =
                      warningAlbums.length + index * trackIndex + key;

                    return (
                      <StyledTreeItem
                        key={childKey}
                        nodeId={childKey}
                        labelText={track.title}
                        labelIcon={TrackIcon}
                        labelInfo={formatDuration(track.duration_in_seconds)}
                        color="#1a73e8"
                        bgColor="#e8f0fe"
                        colorForDarkMode="#B8E7FB"
                        bgColorForDarkMode="#071318"
                      />
                    );
                  })}
                </StyledTreeItem>
              );
            })}
          </StyledTreeItem>
          <StyledTreeItem
            nodeId="error"
            labelText="Error block"
            labelIcon={ErrorIcon}
            labelInfo={String(artistInfo.albums.error.count)}
          >
            {errorAlbums?.map((album, index) => {
              const key = index + "error";

              return (
                <StyledTreeItem
                  key={key}
                  nodeId={key}
                  labelText={album.title}
                  labelIcon={AlbumIcon}
                  labelInfo={String(album.track_count)}
                >
                  {album?.tracks?.success?.data?.map((track, trackIndex) => {
                    const childKey =
                      errorAlbums.length + index * trackIndex + key;

                    return (
                      <StyledTreeItem
                        key={childKey}
                        nodeId={childKey}
                        labelText={track.title}
                        labelIcon={TrackIcon}
                        labelInfo={formatDuration(track.duration_in_seconds)}
                        color="#1a73e8"
                        bgColor="#e8f0fe"
                        colorForDarkMode="#B8E7FB"
                        bgColorForDarkMode="#071318"
                      />
                    );
                  })}
                </StyledTreeItem>
              );
            })}
          </StyledTreeItem>
        </TreeView>
      ) : (
        <CircularLoading size={60} />
      )}
    </Box>
  );
};
