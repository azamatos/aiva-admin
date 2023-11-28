import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { contentService } from "services/navigation";
import { AxiosError } from "axios";

// redux
import { setSnackbarMessage } from "store/reducers/main";
import { dispatch } from "store";

// types
import {
  AlbumListResponse,
  ArtistInfoResponse,
  ArtistListResponse,
  AlbumInfoResponse,
  ContentType,
  TrackListResponse,
  TrackInfoResponse,
} from "types/navigation";

export const useGetArtistsQuery = (
  page: number,
  limit: number,
  search: string,
  initialData: ArtistListResponse | null
) => {
  const { isLoading, data, isSuccess } = useQuery<ArtistListResponse>(
    ["artists", { page, limit, search }],
    () => contentService.getArtists(page, limit, search),
    {
      initialData: () => {
        if (initialData?.artists) return initialData;
      },
      keepPreviousData: true,
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return {
    isArtistResponseLoading: isLoading,
    artists: data?.artists,
    totalPageCount:
      data?.last_page && data?.per_page ? data.last_page * data.per_page : 0,
    isArtistsResponseSuccess: isSuccess,
  };
};

export const useGetArtistInfoMutation = () => {
  const { isLoading, data, mutate, isSuccess, isError } = useMutation<
    ArtistInfoResponse,
    unknown,
    number,
    unknown
  >((artistId: number) => contentService.getArtistInfo(artistId), {
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error?.response?.data?.message) {
          dispatch(setSnackbarMessage(error?.response?.data?.message));
        }
      }
    },
  });

  return {
    isArtistInfoloading: isLoading,
    artistInfo: data?.artist,
    getArtistInfo: mutate,
    isArtistInfoSuccess: isSuccess,
    isArtistInfoError: isError,
  };
};

export const useGetAlbumsQuery = (
  page: number,
  limit: number,
  search: string,
  initialData: AlbumListResponse | null
) => {
  const { isLoading, data, isSuccess } = useQuery<AlbumListResponse>(
    ["albums", { page, limit, search }],
    () => contentService.getAlbums(page, limit, search),
    {
      initialData: () => {
        if (initialData?.albums) return initialData;
      },
      keepPreviousData: true,
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return {
    isAlbumResponseLoading: isLoading,
    albums: data?.albums,
    totalPageCount:
      data?.last_page && data?.per_page ? data.last_page * data.per_page : 0,
    isAlbumsResponseSuccess: isSuccess,
  };
};

export const useGetAlbumInfoMutation = () => {
  const { isLoading, data, mutate, isSuccess, isError } = useMutation<
    AlbumInfoResponse,
    unknown,
    number,
    unknown
  >((albumId: number) => contentService.getAlbumInfo(albumId), {
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error?.response?.data?.message) {
          dispatch(setSnackbarMessage(error?.response?.data?.message));
        }
      }
    },
  });

  return {
    isAlbumInfoloading: isLoading,
    albumInfo: data?.album,
    getAlbumInfo: mutate,
    isAlbumInfoSuccess: isSuccess,
    isAlbumInfoError: isError,
  };
};

export const useGetTracksQuery = (
  page: number,
  limit: number,
  search: string,
  initialData: TrackListResponse | null
) => {
  const { isLoading, data, isSuccess } = useQuery<TrackListResponse>(
    ["tracks", { page, limit, search }],
    () => contentService.getTracks(page, limit, search),
    {
      initialData: () => {
        if (initialData?.albums) return initialData;
      },
      keepPreviousData: true,
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return {
    isTracksResponseLoading: isLoading,
    tracks: data?.albums,
    totalPageCount:
      data?.last_page && data?.per_page ? data.last_page * data.per_page : 0,
    isTracksResponseSuccess: isSuccess,
  };
};

export const useGetTrackInfoMutation = () => {
  const { isLoading, data, mutate, isSuccess, isError } = useMutation<
    TrackInfoResponse,
    unknown,
    number,
    unknown
  >((trackId: number) => contentService.getTrackInfo(trackId), {
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error?.response?.data?.message) {
          dispatch(setSnackbarMessage(error?.response?.data?.message));
        }
      }
    },
  });

  return {
    isTrackInfoLoading: isLoading,
    trackInfo: data?.track,
    getTrackInfo: mutate,
    isTrackInfoSuccess: isSuccess,
    isTrackInfoError: isError,
  };
};

// export const useGetChannelVideosQuery = (
//   channelId: string,
//   page: number = 1,
//   limit: number = 10,
//   initialData: ContentResponse | null = null
// ) => {
//   const { isLoading, data, isSuccess } = useQuery<ContentResponse>(
//     ["videos", { page, limit, channelId }],
//     () => contentService.getChannelVideos(channelId, page, limit),
//     {
//       initialData: () => {
//         if (initialData !== null) {
//           return initialData;
//         }
//       },
//       staleTime: 0,
//       keepPreviousData: true,
//       onError: (error) => {
//         console.log(error);
//       },
//     }
//   );

//   return {
//     isVideosLoading: isLoading,
//     videos: data?.content,
//     videosTotalCount: data?.total,
//     isChannelsSuccess: isSuccess,
//   };
// };

// export const useGetVideoInfoMutation = () => {
//   const { isLoading, data, mutate, isSuccess } = useMutation<
//     Video,
//     unknown,
//     string,
//     unknown
//   >((videoId: string) => contentService.getVideoInfo(videoId), {
//     onError: (error) => {
//       if (error instanceof AxiosError) {
//         if (error?.response?.data?.message) {
//           dispatch(setSnackbarMessage(error?.response?.data?.message));
//         }
//       }
//     },
//   });

//   return {
//     isVideoInfoLoading: isLoading,
//     videoInfo: data,
//     getVideoInfo: mutate,
//     isVideoInfoSuccess: isSuccess,
//   };
// };

// export const useSearchQuery = (
//   page: number = 1,
//   limit: number = 10,
//   search: string,
//   type: ContentType
// ) => {
//   const { isLoading, data, isSuccess } = useQuery<ContentResponse>(
//     ["search_content", { page, limit, search, type }],
//     () => contentService.searchVideoOrChannel(page, limit, search, type),
//     {
//       enabled: search.length > 2,
//       keepPreviousData: true,
//       staleTime: 0,
//       onError: (error) => {
//         console.log(error);
//       },
//     }
//   );

//   return {
//     isSearchLoading: isLoading,
//     searchContent: data?.content,
//     searchTotalCount: data?.total,
//     isVideosSuccess: isSuccess,
//   };
// };

// export const useUpdateChannelMutation = () => {
//   const queryClient = useQueryClient();

//   const { isLoading, mutate, isSuccess } = useMutation(
//     (channelData: UpdateChannelData) =>
//       contentService.updateChannel(channelData),
//     {
//       onSuccess: (data) => {
//         queryClient.invalidateQueries(["channels"]);
//       },
//     }
//   );

//   return {
//     isUpdateLoading: isLoading,
//     updateChannel: mutate,
//     isUpdateSuccess: isSuccess,
//   };
// };

// export const useUpdateVideoMutation = () => {
//   const queryClient = useQueryClient();

//   const { isLoading, mutate, isSuccess } = useMutation(
//     (videoData: UpdateVideoData) => contentService.updateVideo(videoData),
//     {
//       onSuccess: (data) => {
//         queryClient.invalidateQueries(["videos"]);
//       },
//     }
//   );

//   return {
//     isUpdateLoading: isLoading,
//     updateVideo: mutate,
//     isUpdateSuccess: isSuccess,
//   };
// };
