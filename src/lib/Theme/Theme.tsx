import { createTheme } from "@mui/material/styles";

/**
 * MUI theme kept in step with the Tailwind design tokens.
 *
 * The app is predominantly styled with Tailwind, but MUI drives dialogs, date
 * pickers and a handful of legacy blocks, so the palette, radii and typography
 * here mirror tailwind.config.ts.
 */
export const theme = createTheme({
  palette: {
    primary: {
      main: "#0F5C3A",
      light: "#2E9A68",
      dark: "#0A3D28",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#C8A02E",
      light: "#D9B243",
      dark: "#A67F21",
      contrastText: "#04170F",
    },
    background: {
      default: "#0A3D28",
      paper: "rgba(10, 61, 40, 0.92)",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#C8E0D0",
    },
  },
  typography: {
    fontFamily: 'var(--font-inter), "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700, letterSpacing: "-0.022em" },
    h2: { fontWeight: 700, letterSpacing: "-0.018em" },
    h3: { fontWeight: 700, letterSpacing: "-0.012em" },
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
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
          backgroundImage: "none",
        },
      },
    },
  },
});
theme.shadows[1] = "0px 5px 22px lightgray";
