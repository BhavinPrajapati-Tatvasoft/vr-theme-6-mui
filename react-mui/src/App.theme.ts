import { createTheme } from "@mui/material/styles";

let myCustomTheme = createTheme({
  palette: {
    primary: {
      main: "#59B997",
    },
    secondary: {
      main: "#4B4B4B",
    },
  },
  typography: {
    fontFamily: "Ubuntu,sans-serif",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
});

myCustomTheme = createTheme(myCustomTheme, {
  // Typography
  typography: {
    h2: {
      fontSize: "48px",
      lineHeight: "54px",
      fontWeight: 500,
      color: "#424242",
      [myCustomTheme.breakpoints.down("lg")]: {
        fontSize: "40px",
        lineHeight: "46px",
      },
      [myCustomTheme.breakpoints.down("md")]: {
        fontSize: "32px",
        lineHeight: "38px",
      },
      [myCustomTheme.breakpoints.down("sm")]: {
        fontSize: "26px",
        lineHeight: "32px",
      },
    },
    h3: {
      fontSize: "30px",
      lineHeight: "36px",
      [myCustomTheme.breakpoints.down("md")]: {
        fontSize: "26px",
        lineHeight: "30px",
      },
      [myCustomTheme.breakpoints.down("sm")]: {
        fontSize: "20px",
        lineHeight: "26px",
      },
    },
    h5: {
      fontSize: "20px",
      lineHeight: "26px",
      color: "#4B4B4B",
      [myCustomTheme.breakpoints.down("sm")]: {
        fontSize: "16px",
        lineHeight: "20px",
      },
    },
    h6: {
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: 300,
      color: "#4B4B4B",
      [myCustomTheme.breakpoints.down("sm")]: {
        fontSize: "15px",
        lineHeight: "20px",
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "20px",
          lineHeight: "26px",
          [myCustomTheme.breakpoints.down("md")]: {
            fontSize: "16px",
            lineHeight: "20px",
          },
        },
        contained: { boxShadow: "none !important" },
        containedPrimary: {
          fontWeight: "500",
          color: "#ffffff",
          textTransform: "uppercase",
          borderRadius: "10px",
          padding: "14px 30px",
          [myCustomTheme.breakpoints.down("md")]: {
            padding: "8px 24px",
          },
        },
        outlinedPrimary: {
          fontWeight: "500",
          color: "#3EAE86",
          textTransform: "uppercase",
          borderRadius: "10px",
          padding: "12px 28px",
          border: "2px solid #59B997",
          "&:hover": { border: "2px solid #59B997" },
          [myCustomTheme.breakpoints.down("md")]: {
            padding: "6px 24px",
          },
        },
        text: {
          "&.btn-upload": {
            backgroundColor: "#F6F6F6",
            padding: "9px 25px",
            borderRadius: "5px",
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: "17px",
            color: "#6D6D6D",
            textTransform: "lowercase",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&.custom-btn": {
            border: "1px solid #EAEAEA",
            borderRadius: "10px",
            width: "53px",
            height: "47px",
            display: "flex",
            alignItems: "center",
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#9C9C9C",
          fontSize: "15px",
          zIndex: 1,
          lineHeight: "20px",
          "&.Mui-disabled": {
            color: "#9C9C9C",
            opacity: "0.5",
          },
          "&.Mui-error": {
            color: "#FF3232",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": { borderColor: "#EAEAEA" },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: "#4B4B4B",
          "&.MuiInput-root:before": {
            borderBottomColor: "#E9E9E9",
          },
          "&.Mui-disabled.MuiInput-root:before": {
            borderBottomColor: "#CECECE",
            borderBottomStyle: "dashed",
          },
          "&.MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before": {
            borderBottomColor: "#2d5446",
          },
          "&.MuiInput-root:after": {
            borderBottomWidth: "1px",
          },
          "&.MuiInput-root.Mui-error:after": {
            borderBottomColor: "#b32323",
          },
          "&.MuiInput-root.Mui-error:before": {
            borderBottomColor: "#FF3232",
          },
          "& .MuiSelect-nativeInput+.MuiAvatar-root": {
            marginRight: "10px",
          },
          "&.Mui-focused": {
            "& .MuiSelect-nativeInput+.MuiAvatar-root": {
              transform: "rotate(180deg)",
            },
          },
        },
        input: {
          fontSize: "15px",
          lineHeight: "20px",
          "&:focus": {
            backgroundColor: "#fff",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "& .MuiAvatar-root": {
            height: "16px",
            width: "16px",
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          "& .MuiAvatar-root": {
            height: "16px",
            width: "16px",
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          fontSize: "15px !important",
          lineHeight: "20px !important",
          color: "#A5A5A5",
          marginRight: "50px",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          "& .MuiIconButton-sizeMedium": {
            "& .MuiAvatar-root": {
              width: "20px",
              height: "20px",
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          border: "1px solid #EAEAEA",
          borderRadius: "10px",
          height: "100%",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderRadius: "5px",
          fontSize: "15px",
          padding: "7px 10px",
          display: "flex",
          alignItems: "center",
          minHeight: "45px",

          "& .MuiAlert-action": { padding: 0, marginRight: 0 },
          "& .MuiAlert-icon": { padding: 0, marginRight: "10px" },
          "& .MuiAlert-message": { padding: 0 },
          "& .MuiIconButton-root": { padding: "6px" },
          "& .MuiIconButton-root svg": { width: "15px", height: "15px" },
          "& .MuiAvatar-root": { width: "20px", height: "20px" },
          "&.MuiAlert-outlinedError": {
            background: "#FFFAFA",
            border: "1px solid #FF3535",
            color: "#FF3535",
          },
          "&.MuiAlert-outlinedInfo": {
            background: "#F3FDFF",
            border: "1px solid #00B9E1",
            color: "#00B9E1",
          },
          "&.MuiAlert-outlinedWarning": {
            background: "#FFFCF5",
            border: "1px solid #FFA800",
            color: "#FFA800",
          },
          "&.MuiAlert-outlinedSuccess": {
            background: "#F5FFF8",
            border: "1px solid #00AF27",
            color: "#00AF27",
          },
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          border: "none",
          boxShadow: "none",
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-head": {
            padding: "8px 10px",
            fontSize: "15px",
            lineHeight: "20px",
            color: "#9C9C9C",
            fontWeight: 400,
            border: "none",
          },
          "& .MuiTableCell-body": {
            padding: "4px 10px",
            fontSize: "15px",
            lineHeight: "20px",
            color: "#4B4B4B",
            border: "none",
            borderTop: "1px solid #EAEAEA",
            whiteSpace: "nowrap",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid #E9E9E9",
          minHeight: "0",
          "& .MuiTabs-scroller": {
            paddingBottom: "8px",
            [myCustomTheme.breakpoints.down("md")]: {
              paddingBottom: "0",
            },
          },
          "& .MuiTabs-indicator": { height: "3px" },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: "18px",
          lineHeight: "24px",
          fontWeight: 300,
          minWidth: "60px",
          textTransform: "capitalize",
          padding: "8px",
          minHeight: "0",

          "&.Mui-selected": { fontWeight: 500 },
          "&.MuiButtonBase-root": { padding: "8px" },
          "&.MuiButtonBase-root:not(:last-child)": { marginRight: "14px" },
        },
      },
    },
  },
});
export default myCustomTheme;
