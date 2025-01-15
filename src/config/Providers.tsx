"use client";

import { GlobalStyles, ThemeProvider } from "@mui/material";
import { PropsWithChildren } from "react";
import { themeConfigMui } from "./ThemeConfigMui";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import CssBaseline from "@mui/material/CssBaseline";

function Providers({ children }: PropsWithChildren<object>) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={themeConfigMui}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: {
              backgroundColor: themeConfigMui.palette.background.default,
              color: themeConfigMui.palette.text.primary,
            },
          }}
        />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}

export default Providers;
