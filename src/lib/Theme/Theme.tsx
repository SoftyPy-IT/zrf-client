import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#216740",
      light: "#2E8B57",
      dark: "#1A4F32",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FEC909",
      light: "#FFD633",
      dark: "#D4A800",
      contrastText: "#1A1A1A",
    },
    background: {
      default: "#0A1A12",
      paper: "rgba(10, 26, 18, 0.85)",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#C8E0D0",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 800, letterSpacing: "-0.02em" },
    h2: { fontWeight: 700, letterSpacing: "-0.01em" },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: "none", fontWeight: 600 },
      },
    },
  },
});
theme.shadows[1] = "0px 5px 22px lightgray";
