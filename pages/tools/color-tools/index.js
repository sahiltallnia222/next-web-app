import Head from "next/head";
import styles from "styles/style.module.css";
import Link from "next/link";
import {AiOutlineBgColors} from 'react-icons/ai'
import {IoIosColorWand} from 'react-icons/io'
import {IoColorPaletteSharp} from 'react-icons/io5'
import {FiCode} from 'react-icons/fi'
import {GiNestedHexagons} from 'react-icons/gi'



export default function ColorTools() {
  return (
    <>
      <Head>
        <title>Color Tools | WebVerse</title>
        <meta
        name="description"
        content="Color tools are the tools that helps to create visually stunning website. With the wide range of colors tools, designers can choose best color combinations for their website. Design can generate color shades for website."
      />
      <meta name="keywords" content="Webverse, free web tools, free color tools, online color tools, color tools for designers"></meta>
      <meta property="og:title" content="WebVerse | Color Tools" />
        <meta
          property="og:description"
          content="Color tools are the tools that helps to create visually stunning website. With the wide range of colors tools, designers can choose best color combinations for their website. Design can generate color shades for website."
        />
        <meta
          property="og:image"
          content="/images/og-images/home-page-og.png"
        />
      </Head>
      <div>
        <div className="lg:w-[64rem] mx-auto w-full dark:text-white">
          <h1
            className={`md:text-5xl text-4xl text-blue-500 text-center font-semibold pb-5  pt-3 ${styles.textGrad}`}
          >
            Color Tools
          </h1>
          <p className="dark:text-white p-4 text-lg leading-7 tracking-wider font-medium text-center">
          Color tools are the tools that helps to create visually stunning website. With the wide range of colors tools, designers can choose best color combinations for their website.
          </p>
          {/* color tools starts here */}
          <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/color-tools/color-lightness`} passHref>
                <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                  <IoIosColorWand size={"2.3rem"} />
                  <p className="text-xl font-medium text-center">
                    Color Lightness Generator
                  </p>
                </div>
              </Link>
            </div>
            <div>
              <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/color-tools/color-mixture`} passHref>
                <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                  <AiOutlineBgColors size={"2.3rem"} />
                  <p className="text-xl font-medium text-center">
                    Color Mixture Generator
                  </p>
                </div>
              </Link>
            </div>
            <div>
              <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/color-tools/color-shades-generator`} passHref>
                <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                  <IoColorPaletteSharp size={"2.3rem"} />
                  <p className="text-xl font-medium text-center">
                    Color Shades Generator
                  </p>
                </div>
              </Link>
            </div>
            <div>
              <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/color-tools/hex-to-rgba-converter`} passHref>
                <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                  <FiCode size={"2.3rem"} />
                  <p className="text-xl font-medium text-center">
                    Hex to RGBA Converter
                  </p>
                </div>
              </Link>
            </div>
            <div>
              <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/color-tools/rgba-to-hex-converter`} passHref>
                <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                  <GiNestedHexagons size={"2.3rem"} />
                  <p className="text-xl font-medium text-center">
                    RGBA to Hex Converter
                  </p>
                </div>
              </Link>
            </div>
          </div>
          {/* color tools ends here */}
        </div>
      </div>
    </>
  );
}
