type LinkTarget = "_blank" | "_self" | "_parent" | "_top";

type TabName = "dashboard" | "navigation" | "settings";

type Token = string | undefined | null | boolean;

interface Tab {
  id: TabName;
  title: string;
}

interface BasicResponse {
  message: string;
  status?: string;
}
type Order = "asc" | "desc";

type PageType = "artist" | "album" | "track";

interface Artist {
  artist_id: number;
  channel_id: string;
  title: string;
  background_image: string;
  profile_image: string;
  created_at: string;
  updated_at: string;
}

interface BasicAlbum {
  album_id: number;
  browse_id: string;
  playlist_id: string;
  thumbnail: string;
  title: string;
  created_at: string;
  updated_at: string;
}

interface Album extends BasicAlbum {
  duration_in_seconds: number;
  duration_readable: string;
  track_count: number;
  type: string;
  year: number;
}

interface BasicTrack {
  track_id: number;
  video_id: string;
  title: string;
  thumbnail: string;
  created_at: string;
  updated_at: string;
}

interface Track extends BasicTrack {
  segment_playlist_file: string;
  duration_in_seconds: number;
  duration_readable: string;
  track_main_color: string | null;
}

interface HeadCell {
  id: string;
  align: "inherit" | "left" | "center" | "right" | "justify";
  label: string;
}

interface LoginState {
  email: string;
  password: string;
}

interface ColorPaletteProps {
  color: string;
  label: string;
  value: string;
}

interface DefaultResponse {
  data?: string;
  code?: string;
  status?: number;
  message?: string;
}

interface AuthResponse {
  token: string;
}

interface JWTToken {
  exp: number;
  iat: number;
  userId: number;
  roleId: number;
}

interface ColorProps {
  readonly [key: string]: string;
}
