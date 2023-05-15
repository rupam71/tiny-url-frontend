import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { SnackbarProvider } from "notistack";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "@/component/Footer";
import WebViewTypes from "@/type/WebViewType";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [viewCount, setviewCount] = useState<WebViewTypes>({
    webUniqe: 0,
    webView: 0,
  });
  useEffect(() => {
    const exists = localStorage.getItem("exists");
    const id = exists ? 1 : 2;
    axios.get(`${process.env.NEXT_PUBLIC_URL}/api/count/${id}`).then((res) => {
      if (res.data) setviewCount(res.data.result);
      if (id === 2) localStorage.setItem("exists", "1");
    });
  }, []);
  return (
    <SnackbarProvider>
      <div className="body">
      <Component {...pageProps} />
      <Footer viewCount={viewCount}/>
      </div>
    </SnackbarProvider>
  );
}
