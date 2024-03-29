import Head from "next/head";
import Link from "next/link";
import styles from "styles/style.module.css";
import { GoTextSize } from "react-icons/go";
import { MdGradient, MdFormatColorText, MdTransform ,MdOutlineTextRotateVertical,MdAnimation} from "react-icons/md";
import { TbBoxMultiple } from "react-icons/tb";
import { AiOutlineRadiusSetting } from "react-icons/ai";
import {BsCursorFill } from "react-icons/bs";
import { CgScrollV } from "react-icons/cg";
import {GiCube,GiPowerButton} from 'react-icons/gi'
export default function CSSGENS() {
  return (
    <>
      <Head>
        <title>CSS Generators - WebVerse</title>
        <meta
        name="description"
        content="Free most flexible CSS Generators to generate CSS styles for any website. See live preview of result on changing in CSS properties and direct copy-paste the generated code. Very easy to use CSS Generators..."
      />
      <meta name="keywords" content="css generators, free css generators, css tools, css tools online, css generator online, css effects generator"></meta>
      <meta property="og:title" content="CSS Generators - WebVerse" />
        <meta
          property="og:description"
          content="Free most flexible CSS Generators to generate CSS code for any website. See live preview of result on changing in CSS properties and direct copy-paste the generated code. Very easy to use CSS Generators..."
        />
        <meta
          property="og:image"
          content="/images/og-images/home-page-og.png"
        />
      </Head>
      <div>
        <div className="lg:w-[64rem] min-h-screen mx-auto w-full ">
          <h1
            className={`md:text-5xl text-4xl text-blue-500 text-center font-semibold pb-5  pt-3 ${styles.textGrad}`}
          >
            CSS GENERATORS
          </h1>
          <p className="p-4 leading-9 text-lg text-justify dark:text-white">
            CSS Generator tools are very useful to quickly and easily create stunning design for website without dive deep into the code. Also adjusting the diffrent values manually in css can be a tough task, but css generators can do it very easily along with live preview of changes.
          </p>

          {/* css generator starts here */}
          <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 dark:text-white">
            <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/border-radius-generator`} passHref>
              <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                <AiOutlineRadiusSetting size={"2.3rem"} />
                <p className="text-xl font-medium text-center">
                  Border Radius Generator
                </p>
              </div>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/box-animations`} passHref>
              <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent">
                <MdAnimation size={"2.3em"} />
                <p className="text-xl font-medium text-center">
                  Box Animations
                </p>
              </div>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/box-shadow`} passHref>
              <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent">
                <TbBoxMultiple size={"2.3em"} />
                <p className="text-xl font-medium text-center">
                  Box Shadow Generator
                </p>
              </div>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/button-generator`} passHref>
              <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                <GiPowerButton size={"2.3rem"} />
                <p className="text-xl font-medium text-center">
                  Button Generator
                </p>
              </div>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/cursor-options`} passHref>
              <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                <BsCursorFill size={"2.3rem"} />
                <p className="text-xl font-medium text-center">
                  Cursor CSS Generator
                </p>
              </div>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/gradient-generator`} passHref>
              <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                <MdGradient size={"2.3rem"} />
                <p className="text-xl font-medium text-center">
                  Gradient Generator
                </p>
              </div>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/scrollbar-css-generator`} passHref>
              <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                <CgScrollV size={"2.3rem"} />
                <p className="text-xl font-medium text-center">
                  Scrollbar CSS Generator
                </p>
              </div>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/text-animations`} passHref>
              <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                <MdOutlineTextRotateVertical size={"2.3rem"} />
                <p className="text-xl font-medium text-center">
                  Text Animations
                </p>
              </div>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/text-gradient`} passHref>
              <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                <MdFormatColorText size={"2.3rem"} />
                <p className="text-xl font-medium text-center">
                  Text Gradient Generator
                </p>
              </div>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/text-shadow`} passHref>
              <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                <GoTextSize size={"2.3rem"} />
                <p className="text-xl font-medium text-center">
                  Text Shadow Generator
                </p>
              </div>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/transform-generator-2d`} passHref>
              <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                <MdTransform size={"2.3rem"} />
                <p className="text-xl font-medium text-center">
                  2D Transform CSS Generator
                </p>
              </div>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/transform-generator-3d`} passHref>
              <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                <GiCube size={"2.3rem"} />
                <p className="text-xl font-medium text-center">
                  3D Transform CSS Generator
                </p>
              </div>
            </Link>


          </div>
          {/* css generator ends here */}

        </div>
      </div>
    </>
  );
}
