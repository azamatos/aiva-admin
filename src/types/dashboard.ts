export interface AutoLoadResponse {
  artists: ArtistsResponse;
}

export interface ArtistsResponse {
  current_page: number;
  last_page: number;
  per_page: number;
  data: AutoLoadData[];
}

export type AutoloadType = "handle" | "download" | "complete";

export interface AutoLoadData {
  artist: Artist;
  job: Job;
  albums: AlbumsData;
  tracks: TracksData;
}

export interface Job {
  id: number;
  type: string;
  status: string;
  error_message: string | null;
}

export interface AlbumsData {
  success: number;
  warning: number;
  error: number;
  total: number;
}

export interface TracksData {
  success: number;
  warning: number;
  error: number;
  total: number;
}

export type AlbumsDetails = {
  success: ResultType;
  warning: ResultType;
  error: ResultType;
  total: number;
};

export type ResultType = {
  data: AlbumAutoloadInfo[];
  count: number;
};

export interface AlbumAutoloadInfo extends Album {
  tracks: TracksDetails;
}

export type TracksDetails = {
  success: ResultType;
  warning: ResultType;
  error: ResultType;
  total: number;
};

export interface ArtistDetailsResponse {
  artist: Artist;
  job: Job;
  albums: AlbumsDetails;
}
