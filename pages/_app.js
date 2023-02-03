import Layout from "@/components/Layout";
import "@/styles/globals.css";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ToastContainer
          position="top-center"
        />
      </div>
    </>
  );
}
