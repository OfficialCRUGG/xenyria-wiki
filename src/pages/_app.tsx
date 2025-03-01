import { DocsLayout } from "@/components";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DocsLayout>
      <Component {...pageProps} />
    </DocsLayout>
  );
}
