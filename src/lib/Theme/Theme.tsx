import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",

    background: {
      default: "#0b0d10", // --bg-dark
      paper: "#151922", // --bg-dark-card
    },

    text: {
      primary: "#e5e7eb", // --text-light
      secondary: "#9ca3af", // --text-muted
    },

    primary: {
      main: "#4f8f6a", // muted BNP green
    },

    secondary: {
      main: "#8b3a3a", // mourning red
    },

    divider: "#1f2937", // --border-dark
  },

  typography: {
    fontFamily: "'Baloo Da 2', 'SolaimanLipi', 'Arial', sans-serif",
    body1: {
      color: "#d1d5db",
      lineHeight: 1.7,
    },
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
  },

  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          padding: "8px 24px",
          boxShadow: "none",
          textTransform: "none",
          borderRadius: 8,
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "#151922",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#0b0d10",
        },
      },
    },
  },
});

// Mourning-friendly shadow
darkTheme.shadows = Array(25).fill("0px 10px 30px rgba(0,0,0,0.6)") as any;
