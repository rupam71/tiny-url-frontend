import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { SnackbarProvider } from "notistack";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider>
      <Component {...pageProps} />
    </SnackbarProvider>
  );
}
