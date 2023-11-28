import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// services
import { dashboardService } from "services/dashboard";

// types
import {
  ArtistDetailsResponse,
  AutoLoadResponse,
  AutoloadType,
} from "types/dashboard";

export const useGetArtistDetailsMutation = () => {
  const { data, mutate } = useMutation<
    ArtistDetailsResponse,
    unknown,
    number,
    unknown
  >((jobId: number) => dashboardService.getArtistDetails(jobId));

  return {
    artistDetails: data,
    getArtistDetails: mutate,
  };
};

export const useAutoloadAddArtist = () => {
  const { isLoading, mutate } = useMutation<
    BasicResponse,
    unknown,
    string,
    unknown
  >((channelId: string) => dashboardService.addArtistAutoload(channelId), {});

  return {
    isLoading,
    addArtist: mutate,
  };
};

export const useAutoloadResponse = (
  initialData: AutoLoadResponse,
  type: AutoloadType
) => {
  const [refetchInterval, setRefetchInterval] = useState(5000);

  const { data } = useQuery<AutoLoadResponse>(
    ["dashboard_" + type],
    () => dashboardService.getAutoload(type),
    {
      initialData,
      // refetchInterval,
      refetchIntervalInBackground: false,

      onError: (error) => {
        console.log(error);
        setRefetchInterval(0);
      },
    }
  );

  return {
    data,
  };
};

export const useCancelChannelProcessMutation = () => {
  const { isLoading, data, mutate } = useMutation<
    BasicResponse,
    unknown,
    string,
    unknown
  >((channelId: string) => dashboardService.cancelChannelProcess(channelId));

  return {
    isLoading,
    cancelChannelProcess: mutate,
  };
};

export const useRetryAutoloadParseMutation = () => {
  const queryClient = useQueryClient();
  const { isLoading, data, mutate } = useMutation<
    BasicResponse,
    unknown,
    string,
    unknown
  >((channelId: string) => dashboardService.retryAutoloadParse(channelId), {
    onSuccess: () => {
      queryClient.invalidateQueries(["dashboard_handle"]);
    },
  });

  return {
    isLoading,
    retryAutoloadParse: mutate,
  };
};

export const useUpdateChannelAccessType = () => {
  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation<
    BasicResponse,
    unknown,
    string,
    unknown
  >((channelId: string) => dashboardService.updateChannel(channelId), {
    onSuccess: () => {
      queryClient.invalidateQueries(["channels"]);
    },
  });

  return {
    isLoading,
    updateAccessType: mutate,
  };
};
