import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { auth } from "@/firebase";
// Components
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  // Show loading screen while checking firebase authentication
  const [isLoading, setIsLoading] = useState(true);
  const init = async () => {
    await auth.authStateReady(); // Check initial log-in
    setIsLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Layout>
      {isLoading ? <span>loading..</span> : <Component {...pageProps} />}
    </Layout>
  );
}

// TODO: LOADING 컴포넌트 생성
