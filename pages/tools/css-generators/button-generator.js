import Head from "next/head";
import styles from "styles/style.module.css";
import { GiPocketWatch } from "react-icons/gi";
import { useEffect } from "react";

export default function ButtonGenerator() {
  useEffect(()=>{
    if(typeof(window)!=undefined){
      const x=document.getElementById('icon')
      console.log(x.innerHTML);
    }
  })
  return (
    <>
      <Head>
        <title>Button Generator</title>
      </Head>
      <div>
        <div className="lg:w-[64rem] mx-auto w-full ">
          <h1
            className={`md:text-5xl text-4xl text-blue-500 text-center font-semibold pb-5  pt-3 ${styles.textGrad}`}
          >
            Button Generator
          </h1>
          <div className="dark:bg-[#1d2537] p-4 dark:text-white">
            <p>Coming soon...</p>
            <p id="icon"><GiPocketWatch/></p>
          </div>
        </div>
      </div>
    </>
  );
}
