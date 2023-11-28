import { useState, useEffect, Fragment } from "react";
import Router from "next/router";

// styles
import styles from "./Layout.module.scss";

const Loader = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== Router.asPath && setLoading(true);
    const handleComplete = (url: string) =>
      url === Router.asPath && setLoading(false);

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    Router.events.on("routeChangeError", handleComplete);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleComplete);
      Router.events.off("routeChangeError", handleComplete);
    };
  });

  return <Fragment>{loading && <div className={styles.loaderLine} />}</Fragment>;
};

export default Loader;
