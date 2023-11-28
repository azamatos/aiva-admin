export interface BasicListResponse {
  per_page: number;
  current_page: number;
  last_page: number;
}

export interface ArtistListResponse extends BasicListResponse {
  artists: Artist[];
}

export enum ContentType {
  ARTIST = "artist",
  ALBUM = "album",
  TRACK = "track",
}

export interface AlbumListResponse extends BasicListResponse {
  albums: BasicAlbum[];
}

export interface AlbumTracksList {
  tracks: BasicTrack[];
}

export interface ArtistInfoResponse {
  artist: Artist;
  message: string;
}

export interface AlbumInfoResponse {
  album: Album;
}

export interface TrackInfoResponse {
  track: Track;
}

export interface TrackListResponse extends BasicListResponse {
  albums: BasicTrack[];
}

export interface UpdateNavigationData {
  title: string;
}
