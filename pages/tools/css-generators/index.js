import Head from "next/head";
import Link from "next/link";
import { TbBoxMultiple } from "react-icons/tb";
import styles from "styles/style.module.css";
import { GoTextSize } from "react-icons/go";
import { MdGradient, MdFormatColorText, MdTransform } from "react-icons/md";
import { AiOutlineRadiusSetting } from "react-icons/ai";
import {BsCursorFill } from "react-icons/bs";
import { CgScrollV } from "react-icons/cg";
import {GiCube,GiPowerButton} from 'react-icons/gi'
export default function CSSGENS() {
  return (
    <>
      <Head>
        <title>CSS Generators</title>
      </Head>
      <div>
        <div className="lg:w-[64rem] min-h-screen mx-auto w-full ">
          <h1
            className={`md:text-5xl text-4xl text-blue-500 text-center font-semibold pb-5  pt-3 ${styles.textGrad}`}
          >
            CSS GENERATORS
          </h1>
          <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/tools/css-generators/border-radius-generator">
              <div className="dark:text-white flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                <AiOutlineRadiusSetting size={"2.3rem"} />
                <p className="text-xl font-medium text-center">
                  Border Radius Generator
                </p>
              </div>
            </Link>
            <Link href="/tools/css-generators/box-shadow">
              <div className="dark:text-white flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent">
                <TbBoxMultiple size={"2.3em"} />
                <p className="text-xl font-medium text-center">
                  Box Shadow Generator
                </p>
              </div>
            </Link>
            <Link href="/tools/css-generators/button-generator">
                  <div className="dark:text-white flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                    <GiPowerButton size={"2.3rem"} />
                    <p className="text-xl font-medium text-center">
                      Button Generator
                    </p>
                  </div>
                </Link>
            <Link href="/tools/css-generators/cursor-options">
              <div className="dark:text-white flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                <BsCursorFill size={"2.3rem"} />
                <p className="text-xl font-medium text-center">
                  Cursor CSS Generator
                </p>
              </div>
            </Link>

            <Link href="/tools/css-generators/gradient-generator">
              <div className="dark:text-white flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                <MdGradient size={"2.3rem"} />
                <p className="text-xl font-medium text-center">
                  Gradient Generator
                </p>
              </div>
            </Link>
            <Link href="/tools/css-generators/scrollbar-css-generator">
              <div className="dark:text-white flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                <CgScrollV size={"2.3rem"} />
                <p className="text-xl font-medium text-center">
                  Scrollbar CSS Generator
                </p>
              </div>
            </Link>
            <Link href="/tools/css-generators/text-gradient">
              <div className="dark:text-white flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                <MdFormatColorText size={"2.3rem"} />
                <p className="text-xl font-medium text-center">
                  Text Gradient Generator
                </p>
              </div>
            </Link>
            <Link href="/tools/css-generators/text-shadow">
              <div className="dark:text-white flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                <GoTextSize size={"2.3rem"} />
                <p className="text-xl font-medium text-center">
                  Text Shadow Generator
                </p>
              </div>
            </Link>
            <Link href="/tools/css-generators/transform-generator-2d">
              <div className="dark:text-white flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                <MdTransform size={"2.3rem"} />
                <p className="text-xl font-medium text-center">
                  2D Transform CSS Generator
                </p>
              </div>
            </Link>
            <Link href="/tools/css-generators/transform-generator-3d">
              <div className="dark:text-white flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                <GiCube size={"2.3rem"} />
                <p className="text-xl font-medium text-center">
                  3D Transform CSS Generator
                </p>
              </div>
            </Link>


          </div>
        </div>
      </div>
    </>
  );
}
