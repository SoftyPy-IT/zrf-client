"use client";

import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";

import { store } from "@/redux/store";
import { darkTheme } from "./Theme/Theme";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
    </Provider>
  );
};

export default Providers;
