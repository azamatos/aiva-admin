import axios from "api/axiosMiddleware";

// utils
import { getTokenHeaders } from "utils";

// types
import { StorageInfo } from "types/settings";

export const settingsService = {
  async getStorageInfo(token: Token = undefined): Promise<StorageInfo> {
    return axios({
      url: "/settings/space",
      method: "GET",
      headers: getTokenHeaders(token),
    }).then((res) => res.data);
  },
};
