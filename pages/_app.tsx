import React, { useState } from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { AppContextWrapper } from "src/State/AppState";
import Menu from "@components/Menu/Menu";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const [isMenu, setIsMenu] = useState<boolean>(false);
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
