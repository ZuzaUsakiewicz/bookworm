import * as React from "react";
import { useState } from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import createEmotionCache from "../utilities/createEmotionCache";
import lightThemeOptions from "../styles/theme/lightThemeOptions";
import "../styles/globals.css";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import Navbar from "@/components/Navbar";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  initialSession: Session;
}

const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Navbar />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </SessionContextProvider>
  );
};

export default MyApp;
