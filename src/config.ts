// types
import { ConfigProps } from "./types/config";

export const DASHBOARD_API = process.env.NEXT_PUBLIC_DASHBOARD_URL;

export const DASHBOARD_PATH = "/dashboard";

const config: ConfigProps = {
  fontFamily: `'Roboto', sans-serif`,
  borderRadius: 5,
  outlinedFilled: true,
  navType: "dark", // light, dark
  locale: "ru-RU", // 'en' - English, 'fr' - French, 'ro' - Romanian, 'zh' - Chinese
  rtlLayout: false,
};

export default config;
