import "../styles/globals.css";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

// Router.onRouterChangeStart = (url) => NProgress.start();
// Router.onRouterChangeComplete = (url) => NProgress.done();
// Router.onRouterChangeError = (url) => NProgress.done();

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`);
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);
  return <Component {...pageProps} />;
}

export default MyApp;
