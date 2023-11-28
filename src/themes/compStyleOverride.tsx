// project imports
import { Theme } from "@mui/material/styles";

export default function componentStyleOverrides(
  theme: Theme,
  borderRadius: number,
  outlinedFilled: boolean
) {
  const mode = theme.palette.mode;
  const bgColor =
    mode === "dark" ? theme.palette.dark[800] : theme.palette.grey[50];
  const menuSelectedBack =
    mode === "dark"
      ? theme.palette.background.default
      : theme.palette.secondary.light;
  const menuSelected =
    mode === "dark"
      ? theme.palette.secondary[500]
      : theme.palette.secondary.dark;

  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: "4px",
          fontSize: 15,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
        rounded: {
          borderRadius: `${borderRadius}px`,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          color: theme.palette.text.dark,
          padding: "24px",
        },
        title: {
          fontSize: "1.125rem",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "24px",
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: "24px",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          alignItems: "center",
        },
        outlined: {
          border: "1px dashed",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: theme.palette.text.primary,
          paddingTop: "10px",
          paddingBottom: "10px",
          "&.Mui-selected": {
            color: menuSelected,
            backgroundColor: menuSelectedBack,
            "&:hover": {
              backgroundColor: menuSelectedBack,
            },
            "& .MuiListItemIcon-root": {
              color: menuSelected,
            },
          },
          "&:hover": {
            backgroundColor: menuSelectedBack,
            color: menuSelected,
            "& .MuiListItemIcon-root": {
              color: menuSelected,
            },
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: theme.palette.text.primary,
          minWidth: "36px",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: theme.palette.text.dark,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: theme.palette.text.dark,
          "&::placeholder": {
            color: theme.palette.grey[400],
            fontSize: "1rem",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: outlinedFilled ? bgColor : "transparent",
          borderRadius: `5px`,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor:
              mode === "dark"
                ? theme.palette.grey[600]
                : theme.palette.grey[400],
          },
          "&:hover $notchedOutline": {
            borderColor: theme.palette.primary.light,
          },
          "&.MuiInputBase-multiline": {
            padding: 1,
          },
        },
        input: {
          fontWeight: 400,
          "&::placeholder": {
            color: theme.palette.grey[400],
          },
          background: outlinedFilled ? bgColor : "transparent",
          // padding: '14px 16px',
          borderRadius: `5px`,
          "&.MuiInputBase-inputSizeSmall": {
            padding: "8px 12px",
            "&.MuiInputBase-inputAdornedStart": {
              paddingLeft: 0,
            },
          },
        },
        inputAdornedStart: {
          paddingLeft: 4,
        },
        notchedOutline: {
          borderRadius: `5px`,
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            color:
              mode === "dark"
                ? theme.palette.text.primary + 50
                : theme.palette.grey[300],
          },
        },
        mark: {
          backgroundColor: theme.palette.background.paper,
          width: "4px",
        },
        valueLabel: {
          color:
            mode === "dark"
              ? theme.palette.primary.main
              : theme.palette.primary.light,
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "& .MuiAutocomplete-tag": {
            background:
              mode === "dark"
                ? theme.palette.secondary.dark[800]
                : theme.palette.secondary.light,
            borderRadius: 4,
            color: theme.palette.text.dark,
            ".MuiChip-deleteIcon": {
              color:
                mode === "dark"
                  ? theme.palette.text.primary + 80
                  : theme.palette.secondary[200],
            },
          },
        },
        popper: {
          borderRadius: `${borderRadius}px`,
          boxShadow:
            "0px 8px 10px -5px rgb(0 0 0 / 20%), 0px 16px 24px 2px rgb(0 0 0 / 14%), 0px 6px 30px 5px rgb(0 0 0 / 12%)",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: theme.palette.secondary[800],
          opacity: mode === "dark" ? 1 : 1,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          "&:focus": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          /** checked not prop
           *"&.Mui-checked": {
           *    fontSize: "28px"
           *}
           */
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          color:
            mode === "dark"
              ? theme.palette.primary.light
              : theme.palette.primary.dark,
          // background:
          //   mode === "dark"
          //     ? theme.palette.text.primary
          //     : theme.palette.primary[200],
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          "&.MuiChip-deletable .MuiChip-deleteIcon": {
            color: "inherit",
          },
        },
      },
    },
    MuiTimelineContent: {
      styleOverrides: {
        root: {
          color: theme.palette.text.dark,
          fontSize: "16px",
        },
      },
    },
    MuiTreeItem: {
      styleOverrides: {
        label: {
          marginTop: 14,
          marginBottom: 14,
        },
      },
    },
    MuiTimelineDot: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiInternalDateTimePickerTabs: {
      styleOverrides: {
        tabs: {
          backgroundColor:
            mode === "dark"
              ? theme.palette.dark[900]
              : theme.palette.primary.light,
          "& .MuiTabs-flexContainer": {
            borderColor:
              mode === "dark"
                ? theme.palette.text.primary + 20
                : theme.palette.primary[200],
          },
          "& .MuiTab-root": {
            color:
              mode === "dark"
                ? theme.palette.text.secondary
                : theme.palette.grey[900],
          },
          "& .MuiTabs-indicator": {
            backgroundColor: theme.palette.primary.dark,
          },
          "& .Mui-selected": {
            color: theme.palette.primary.dark,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          // borderColor: mode === 'dark' ? theme.palette.text.primary + 20 : theme.palette.grey[200]
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          padding: "12px 0 12px 0",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          padding: "12px",
          // borderColor:
            // mode === "dark"
              // ? theme.palette.secondary[800]
              // : theme.palette.grey[200],
          "&.MuiTableCell-head": {
            color: theme.palette.secondary.main,
            fontWeight: 500,
            height: 80,
            padding: "0 12px",
            lineHeight: "16px",
            // backgroundColor: "#282828",
            borderBottom: "none",
          },

          "&:last-child": {
            paddingRight: "36px",
          },
          "&:first-of-type": {
            paddingLeft: "36px",
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: theme.palette.background.paper,
          background: theme.palette.text.primary,
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: "1.25rem",
        },
      },
    },
  };
}
