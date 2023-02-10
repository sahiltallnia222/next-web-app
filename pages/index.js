import Head from "next/head";
import Link from "next/link";
import styles from "styles/style.module.css";
import { HiArrowLongRight } from "react-icons/hi2";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <div>
          <div className="dark:bg-[#0f172a] bg-blue-500 text-white h-[40vh] xl:h-[50vh] flex flex-col gap-4 md:gap-16  justify-center">
            <h1 className="text-3xl md:text-5xl tracking-normal text-center font-semibold">
              Make your website more{" "}
              <span className="dark:text-blue-500">attractive</span>
            </h1>
            <Link href="/css-generators" className="w-64 mx-auto">
              <div className="dark:hover:bg-blue-500 hover:text-black rounded-full bg-white text-black transition-colors duration-300 p-3 2xl:px-8 gap-4 sm:gap-0 flex items-center dark:hover:text-white justify-center group">
                <p className="  md:w-[80%] text-lg lg:text-2xl font-medium ">
                  Get started
                </p>
                <div className="w-[15%]">
                  <HiArrowLongRight
                    size="1.7em"
                    className="float-right group-hover:translate-x-3 transition-transform duration-300 font-semibold"
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center w-1/2 mx-auto gap-5 mt-16">
            <h2 className="dark:text-white text-center text-4xl font-medium">
              BOX SHADOW GENERATOR
            </h2>
            <p className="text-lg mx-auto text-center dark:text-white font-medium tracking-wide [word-spacing:0.1rem]">
              A simple tool to generate box shadow for any element of website,
              value of box shadow parameter can be adjusted using slider, live
              preview of changes, multiple shadow functionality, complete
              details about all parameters of box shadow, easy to use and
              instant copy of ready-made css code.{" "}
            </p>
            <Link href="/css-generators/box-shadow" className="bg-blue-500 px-8 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-500 font-medium text-white font-md tracking-wide [word-spacing:0.1rem]">
              visit it
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
