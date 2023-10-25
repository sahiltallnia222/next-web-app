import Layout from "@/components/Layout";
import "@/styles/globals.css";
import Head from "next/head";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from '@vercel/analytics/react';



export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8854753001498971"
     crossorigin="anonymous"></script>
      </Head>
      <div className="overflow-x-hidden">
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
        <ToastContainer
          position="top-center"
        />
      </div>
    </>
  );
}
