import axios from "api/axiosMiddleware";
import { AxiosProgressEvent } from "axios";

// utils
import { getTokenHeaders } from "utils";

interface SearchParams {
  s?: string;
  page: number;
}

export const advertisementService = {
  async getAdvertisements(
    params: SearchParams,
    token: Token = undefined
  ): Promise<AdvertisementResponse> {
    const url = params.s && params.s?.length > 2 ? `search` : `ads/`;

    if (token) {
      return axios
        .get(url, {
          headers: getTokenHeaders(token),
          params: params,
        })
        .then((res) => res.data);
    }
    return axios
      .get(url, {
        params: params,
      })
      .then((res) => res.data);
  },
  async downloadAdvertisement(
    file: File,
    signal: AbortSignal | undefined,
    onUploadProgress: (progressEvent: AxiosProgressEvent) => void
  ): Promise<DownloadAdvertisementResponse> {
    const url = "ad/file/download";
    const formData = new FormData();
    formData.append("ad", file);

    return axios({
      url,
      headers: { "Content-type": "multipart/form-data" },
      method: "POST",
      data: formData,
      signal,
      onUploadProgress,
    }).then((res) => res.data);
  },

  async createAdvertisement(data: AdvertisementBody): Promise<DefaultResponse> {
    return axios({
      url: "ad",
      method: "POST",
      data,
    }).then((res) => res.data);
  },

  async getAdvertisementById(id: number): Promise<AdvertisementById> {
    return axios({
      url: `ad/${id}`,
      method: "GET",
    }).then((res) => res.data);
  },

  async updateAdvertisementById(
    data: AdvertisementById
  ): Promise<DefaultResponse> {
    return axios({
      url: `ad/${data.id}`,
      method: "PUT",
      data,
    }).then((res) => res.data);
  },

  async removeAdvertisements(ids: number[]): Promise<DefaultResponse> {
    return axios({
      url: "remove",
      method: "POST",
      data: { ids },
    }).then((res) => res.data);
  },
};
