import Head from "next/head";
import styles from "styles/style.module.css";


export default function ColorCodeConverter() {
  return (
    <>
      <Head>
        <title>Color Code Converter</title>
      </Head>
      <div>
        <div className="lg:w-[64rem] mx-auto w-full">
          <h1
            className={`md:text-5xl text-4xl text-blue-500 text-center font-semibold pb-5  pt-3 ${styles.textGrad}`}
          >
            Color Code Converter
          </h1>
          <div className="dark:text-white">
            <div className="dark:bg-[#1d2537] p-4 bg-gray-100 w-full">
                Coming soon !
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
