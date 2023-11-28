import { useMemo, ReactNode } from "react";

// material-ui
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  ThemeOptions,
  ThemeProvider,
  Theme,
  StyledEngineProvider,
} from "@mui/material/styles";
import { ruRU } from "@mui/material/locale";

// project import
import { useConfig } from "../hooks/useConfig";
import Palette from "./palette";
import Typography from "./typography";

import componentStyleOverrides from "./compStyleOverride";
import customShadows from "./shadows";

// assets
import theme4 from "../scss/_theme.module.scss";

// types
import { CustomShadowProps } from "types/default-theme";
import { TypographyOptions } from "@mui/material/styles/createTypography";

interface Props {
  children: ReactNode;
}

export default function ThemeCustomization({ children }: Props) {
  const config = useConfig();
  const { borderRadius, fontFamily, navType, outlinedFilled, rtlLayout } =
    useConfig();

  const theme: Theme = useMemo<Theme>(() => Palette(navType), [navType]);

  const themeTypography: TypographyOptions = useMemo<TypographyOptions>(
    () => Typography(theme, borderRadius, fontFamily),
    [theme, borderRadius, fontFamily]
  );
  const themeCustomShadows: CustomShadowProps = useMemo<CustomShadowProps>(
    () => customShadows(navType, theme),
    [navType, theme]
  );

  const color: ColorProps = theme4;

  const themeOption = {
    colors: color,
    heading: "",
    paper: "",
    backgroundDefault: "",
    background: "",
    darkTextPrimary: "",
    darkTextSecondary: "",
    textDark: "",
    menuSelected: "",
    menuSelectedBack: "",
    divider: "",
    customization: config,
    iconDark: "",
  };

  switch (config.navType) {
    case "dark":
      themeOption.paper = color.darkBackground;
      themeOption.backgroundDefault = color.darkPaper;
      themeOption.iconDark = color.darkIcon;
      themeOption.background = color.darkBackground;
      themeOption.darkTextPrimary = color.darkTextPrimary;
      themeOption.darkTextSecondary = color.darkTextSecondary;
      themeOption.textDark = color.darkTextPrimary;
      themeOption.menuSelected = color.darkSecondaryMain;
      themeOption.menuSelectedBack = color.darkSecondaryMain + 15;
      themeOption.divider = color.darkTextPrimary;
      themeOption.heading = color.darkTextTitle;
      break;
    case "light":
    default:
      themeOption.paper = color.paper;
      themeOption.backgroundDefault = color.paper;
      themeOption.background = color.primaryLight;
      themeOption.darkTextPrimary = color.grey700;
      themeOption.darkTextSecondary = color.grey500;
      themeOption.textDark = color.grey900;
      themeOption.menuSelected = color.secondaryDark;
      themeOption.menuSelectedBack = color.secondaryLight;
      themeOption.divider = color.grey200;
      themeOption.heading = color.grey900;
      break;
  }

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      direction: rtlLayout ? "rtl" : "ltr",
      palette: theme.palette,
      breakpoints: {
        keys: ["xs", "sm", "md", "lg", "xl"],
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
        unit: "px",
      },
      mixins: {
        toolbar: {
          minHeight: 64,
          padding: "16px 12px",
          "@media (min-width: 600px)": {
            minHeight: 64,
          },
        },
      },

      typography: themeTypography,
      customShadows: themeCustomShadows,
    }),
    [rtlLayout, theme, themeCustomShadows, themeTypography]
  );

  const themes: Theme = createTheme(themeOptions, ruRU);

  themes.components = useMemo(() => {
    return {
      ...themes.components,
      ...componentStyleOverrides(themes, borderRadius, outlinedFilled),
    };
  }, [themes, borderRadius, outlinedFilled]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
