import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// services
import { settingsService } from "services/settings";

// redux

// types
import {
  VCSResponse,
  VCSPlatformHistoryResponse,
  PlatformVersionAction,
} from "types/settings";

export const useVersionsQuery = (version: number | undefined) => {
  const { isLoading, data, isSuccess } = useQuery<VCSPlatformHistoryResponse>(
    ["versions", { version }],
    () => settingsService.getPlatformHistory(version),
    {
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return {
    isLoading,
    versions: data?.content,
    isSuccess,
  };
};

export const useGetAllPlatformsQuery = () => {
  const { isLoading, data, isSuccess } = useQuery<VCSResponse>(
    ["vcs_platforms"],
    () => settingsService.getVcsPlatforms(),
    {
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return {
    isLoading,
    vcsPlatforms: data?.content,
    isSuccess,
  };
};

export const useUpdateVersionMutation = () => {
  const queryClient = useQueryClient();

  const { isLoading, mutate, isSuccess } = useMutation<
    DefaultResponse,
    unknown,
    PlatformVersionAction,
    unknown
  >((data: PlatformVersionAction) => settingsService.updateVersion(data), {
    onSuccess: () => {
      queryClient.invalidateQueries(["versions"]);
    },
  });

  return {
    isLoading,
    updateVersion: mutate,
    isSuccess,
  };
};

export const useAddVersionMutation = () => {
  const queryClient = useQueryClient();

  const { isLoading, mutate, isSuccess } = useMutation<
    DefaultResponse,
    unknown,
    Omit<PlatformVersionAction, "id">,
    unknown
  >(
    (data: Omit<PlatformVersionAction, "id">) =>
      settingsService.addVersion(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["versions"]);
      },
    }
  );

  return {
    isLoading,
    addVersion: mutate,
    isSuccess,
  };
};

export const useDeleteVersionMutation = () => {
  const queryClient = useQueryClient();

  const { isLoading, mutate, isSuccess } = useMutation<
    DefaultResponse,
    unknown,
    number,
    unknown
  >((versionId: number) => settingsService.deleteVersion(versionId), {
    onSuccess: () => {
      queryClient.invalidateQueries(["versions"]);
    },
  });

  return {
    isLoading,
    deleteVersion: mutate,
    isSuccess,
  };
};
