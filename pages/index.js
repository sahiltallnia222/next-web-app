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
          <div className="bg-[#0f172a] text-white h-[40vh] xl:h-[50vh] flex flex-col gap-4 md:gap-16  justify-center">
            <h1 className="text-3xl md:text-5xl tracking-normal text-center font-semibold">
              Make your website more <span className="text-blue-500">attractive</span>
            </h1>
            <Link href='/css-generators' className="w-64 mx-auto">
              <div className="hover:bg-blue-500 bg-white text-black transition-colors duration-300 p-3 2xl:px-8 gap-4 sm:gap-0 flex items-center hover:text-white justify-center group">
                <p className="  md:w-[80%] text-lg lg:text-2xl font-medium ">Get started</p>
                <div className="w-[15%]"><HiArrowLongRight size="1.7em" className="float-right group-hover:translate-x-3 transition-transform duration-300 font-semibold"/></div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
