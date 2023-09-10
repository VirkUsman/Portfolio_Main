import "../styles/globals.css";
import Head from "next/head";

import Layout from "../Components/Layout";
import Transition from "../Components/Transition";

import { useRouter } from "next/router";

import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/uv-logo.ico" />
        <title>Usman Virk</title>
      </Head>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}
export default MyApp;
