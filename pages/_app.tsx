import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { AppContextWrapper } from "src/State/AppState";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <AppContextWrapper>
                    <Component {...pageProps} />
                </AppContextWrapper>
            </Hydrate>
        </QueryClientProvider>
    );
}

export default MyApp;
