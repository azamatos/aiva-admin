import axios from "api/axiosMiddleware";

// types
import {
  ArtistListResponse,
  ArtistInfoResponse,
  AlbumListResponse,
  TrackListResponse,
  AlbumTracksList,
  AlbumInfoResponse,
  TrackInfoResponse,
} from "types/navigation";

// utils
import { getTokenHeaders } from "utils";

export const contentService = {
  async getArtists(
    page: number = 1,
    per_page: number = 10,
    search: string | undefined = undefined,
    token: Token = undefined
  ): Promise<ArtistListResponse> {
    return axios({
      method: "GET",
      url: "/artist/list",
      headers: getTokenHeaders(token),
      params: { page, per_page, search: search || undefined },
    }).then((res) => res.data);
  },

  async getArtistAlbums(
    artist_id: number,
    token: Token = undefined
  ): Promise<AlbumListResponse> {
    return axios({
      method: "GET",
      url: "/artist/albums",
      headers: getTokenHeaders(token),
      params: { artist_id },
    }).then((res) => res.data);
  },

  async getArtistInfo(artist_id: number): Promise<ArtistInfoResponse> {
    return axios({
      method: "GET",
      url: "/artist",
      params: { artist_id },
    }).then((res) => res.data);
  },

  async getAlbums(
    page: number = 1,
    per_page: number = 10,
    search: string | undefined = undefined,
    token: Token = undefined
  ): Promise<AlbumListResponse> {
    return axios({
      method: "GET",
      url: "/album/list",
      headers: getTokenHeaders(token),
      params: { page, per_page, search: search || undefined },
    }).then((res) => res.data);
  },

  async getAlbumTracks(
    album_id: number,
    token: Token = undefined
  ): Promise<AlbumTracksList> {
    return axios({
      method: "GET",
      url: "/album/tracks",
      headers: getTokenHeaders(token),
      params: { album_id },
    }).then((res) => res.data);
  },

  async getAlbumInfo(album_id: number): Promise<AlbumInfoResponse> {
    return axios({
      method: "GET",
      url: "/album",
      params: { album_id },
    }).then((res) => res.data);
  },

  async getTracks(
    page: number = 1,
    per_page: number = 10,
    search: string | undefined = undefined,
    token: Token = undefined
  ): Promise<TrackListResponse> {
    return axios({
      method: "GET",
      url: "/track/list",
      headers: getTokenHeaders(token),
      params: { page, per_page, search: search || undefined },
    }).then((res) => res.data);
  },

  async getTrackInfo(track_id: number): Promise<TrackInfoResponse> {
    return axios({
      method: "GET",
      url: "/track",
      params: { track_id },
    }).then((res) => res.data);
  },

  // async updateChannel(
  //   data: UpdateChannelData,
  //   token: Token = undefined
  // ): Promise<DefaultResponse> {
  //   return axios({
  //     url: baseUrl + "/channels",
  //     headers: getTokenHeaders(token),
  //     data,
  //     method: "PUT",
  //   }).then((res) => res.data);
  // },

  // async getChannelVideos(
  //   youtubeId: string,
  //   page: number = 1,
  //   limit: number = 10,
  //   token: Token = undefined
  // ): Promise<ContentResponse> {
  //   return axios({
  //     url: `${baseUrl}/channels/${youtubeId}/videos`,
  //     method: "GET",
  //     headers: getTokenHeaders(token),
  //     params: { page, limit },
  //   }).then((res) => res.data);
  // },

  // async getChannelInfo(
  //   youtubeId: string,
  //   token: Token = undefined
  // ): Promise<Channel> {
  //   return axios({
  //     url: `${baseUrl}/channels/${youtubeId}`,
  //     method: "GET",
  //     headers: getTokenHeaders(token),
  //   }).then((res) => res.data);
  // },

  // async searchVideoOrChannel(
  //   page: number = 1,
  //   limit: number = 10,
  //   s: string,
  //   type: ContentType,
  //   token: Token = undefined
  // ): Promise<ContentResponse> {
  //   return axios({
  //     url: baseUrl + "/search",
  //     params: { page, limit, s, type },
  //     method: "GET",
  //     headers: getTokenHeaders(token),
  //   }).then((res) => res.data);
  // },

  // async getGenres(
  //   page: number = 1,
  //   limit: number = 10,
  //   token: Token | undefined = undefined
  // ): Promise<Genre[]> {
  //   return axios({
  //     url: baseUrl + "/genres",
  //     params: { page, limit },
  //     method: "GET",
  //     headers: getTokenHeaders(token),
  //   }).then((res) => res.data);
  // },

  // async updateVideo(
  //   data: UpdateVideoData,
  //   token: Token | undefined = undefined
  // ): Promise<DefaultResponse> {
  //   return axios({
  //     url: baseUrl + "/videos",
  //     method: "PUT",
  //     headers: getTokenHeaders(token),
  //     data,
  //   }).then((res) => res.data);
  // },

  // async getVideoInfo(
  //   youtubeId: string,
  //   token: Token | undefined = undefined
  // ): Promise<Video> {
  //   return axios({
  //     url: `${baseUrl}/videos/${youtubeId}`,
  //     method: "GET",
  //     headers: getTokenHeaders(token),
  //   }).then((res) => res.data);
  // },
};
