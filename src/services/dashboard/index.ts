import axios from "api/axiosMiddleware";

// utils
import { getTokenHeaders } from "utils";

// types
import {
  AutoLoadResponse,
  AutoloadType,
  ArtistDetailsResponse,
} from "types/dashboard";

const baseUrl = "/autoload";

export const dashboardService = {
  async getAutoload(
    type: AutoloadType,
    token: string | undefined = undefined
  ): Promise<AutoLoadResponse> {
    return axios({
      url: baseUrl + "/list",
      method: "GET",
      headers: getTokenHeaders(token),
      params: { type },
    }).then((res) => res.data);
  },
  async retryAutoloadParse(channelId: string): Promise<BasicResponse> {
    return axios({
      url: baseUrl + "/update",
      method: "POST",
      data: { channelId },
    }).then((res) => res.data);
  },

  async addArtistAutoload(channel_id: string): Promise<BasicResponse> {
    return axios({
      url: baseUrl + "/add",
      method: "POST",
      data: { channel_id },
    }).then((res) => res.data);
  },

  async getArtistDetails(job_id: number): Promise<ArtistDetailsResponse> {
    return axios({
      url: baseUrl + "/info",
      method: "GET",
      params: { job_id },
    }).then((res) => res.data);
  },

  async updateChannel(youtubeId: string): Promise<BasicResponse> {
    return axios({
      url: "/content/channels",
      method: "PUT",
      data: { accessType: "opened", youtubeId },
    }).then((res) => res.data);
  },

  async cancelChannelProcess(channelId: string): Promise<BasicResponse> {
    return axios({
      url: `${baseUrl}/channels/${channelId}/cancel`,
      method: "POST",
    }).then((res) => res.data);
  },
};
