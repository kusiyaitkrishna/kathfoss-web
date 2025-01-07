"use client";

import { ThemeProvider } from "@mui/material";
import { PropsWithChildren } from "react";
import { themeConfigMui } from "./themeConfigMui";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

function Providers({ children }: PropsWithChildren<object>) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={themeConfigMui}>{children}</ThemeProvider>
    </AppRouterCacheProvider>
  );
}

export default Providers;
