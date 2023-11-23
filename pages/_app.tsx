import Router, { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import transition from "../src/js/transition/transition";
import Head from "next/head";
import "../src/styles/main.scss";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [transitionOver, setTransitionOver] = useState(true);
  const [loadingPage, setLoadingPage] = useState(true);
  const [actualTransition, setActualTransition] = useState(null);

  useEffect(() => {
    Router.events.on("routeChangeComplete", () => {
      setLoadingPage(false);
    });
  }, []);

  useEffect(() => {
    if (loadingPage === false && transitionOver === false) {
      const promise1 = new Promise((resolve) => {
        transition(resolve, actualTransition, 1);
      });
      promise1.then(() => {
        setLoadingPage(false);
        setTransitionOver(true);
      });
    }
  }, [loadingPage, actualTransition]);

  function handleTransition(href, transName) {
    if (router.pathname !== href) {
      setLoadingPage(false);
      const promise = new Promise((resolve) => {
        transition(resolve, transName, 0);
      });
      promise.then(() => {
        setActualTransition(transName);
        setTransitionOver(false);
        router.push(href);
        setLoadingPage(true);
      });
    }
  }

  return (
    <>
      <Head>
        <title>Pierre Leveque - portfolio</title>
        <link rel="icon" href="image/logo.jpg" />
        <meta name="viewport" content="initial-scale=1, minimum-scale=1" />
        <meta
          name="description"
          content="Pierre leveque developpeur frontend, créateur d'application web et de site performant et optimisé SEO efficace grâce au technologies de points du développement web."
        />
      </Head>
      <Component
        {...pageProps}
        handleTransition={handleTransition}
        transitionOver={transitionOver}
      />
    </>
  );
}

export default MyApp;
