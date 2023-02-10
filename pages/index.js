import Head from "next/head";
import Link from "next/link";
import styles from "styles/style.module.css";
import {HiArrowLongRight} from 'react-icons/hi2'
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <div>
          <div className="xl:bg-blue-500 xl:text-white h-[30vh] xl:h-[50vh] flex flex-col gap-4 md:gap-16  justify-center">
            <h1 className="text-3xl md:text-5xl tracking-normal text-center font-semibold">
              Make your website more attractive
            </h1>
            <Link href='/css-generators' className="w-64 mx-auto">
              <div className=" bg-blue-500 xl:bg-white p-3 2xl:px-8 gap-4 sm:gap-0 flex items-center justify-center group">
                <p className="xl:text-black  md:w-[80%] text-lg lg:text-2xl font-semibold  text-white">Get started</p>
                <div className="xl:text-black text-white w-[15%]"><HiArrowLongRight size="1.7em" className="float-right group-hover:translate-x-3 transition-all duration-300 font-semibold"/></div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
