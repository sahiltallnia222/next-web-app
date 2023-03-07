import Head from "next/head";
import styles from "styles/style.module.css";
import Link from "next/link";
import {AiOutlineBgColors} from 'react-icons/ai'
import {IoIosColorWand} from 'react-icons/io'
import {IoColorPaletteSharp} from 'react-icons/io5'
import {FiCode} from 'react-icons/fi'
import {GiNestedHexagons} from 'react-icons/gi'
export default function Tools() {
  return (
    <>
      <Head>
        <title>Color Tools</title>
      </Head>
      <div>
        <div className="lg:w-[64rem] mx-auto w-full">
          <h1
            className={`md:text-5xl text-4xl text-blue-500 text-center font-semibold pb-5  pt-3 ${styles.textGrad}`}
          >
            Color Tools
          </h1>
          <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Link href="/tools/color-tools/color-lightness">
                <div className="dark:text-white flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                  <IoIosColorWand size={"2.3rem"} />
                  <p className="text-xl font-medium text-center">
                    Color Lightness Generator
                  </p>
                </div>
              </Link>
            </div>
            <div>
              <Link href="/tools/color-tools/color-mixture">
                <div className="dark:text-white flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                  <AiOutlineBgColors size={"2.3rem"} />
                  <p className="text-xl font-medium text-center">
                    Color Mixture Generator
                  </p>
                </div>
              </Link>
            </div>
            <div>
              <Link href="/tools/color-tools/color-shades-generator">
                <div className="dark:text-white flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                  <IoColorPaletteSharp size={"2.3rem"} />
                  <p className="text-xl font-medium text-center">
                    Color Shades Generator
                  </p>
                </div>
              </Link>
            </div>
            <div>
              <Link href="/tools/color-tools/hex-to-rgba-converter">
                <div className="dark:text-white flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                  <FiCode size={"2.3rem"} />
                  <p className="text-xl font-medium text-center">
                    Hex to RGBA Converter
                  </p>
                </div>
              </Link>
            </div>
            <div>
              <Link href="/tools/color-tools/rgba-to-hex-converter">
                <div className="dark:text-white flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                  <GiNestedHexagons size={"2.3rem"} />
                  <p className="text-xl font-medium text-center">
                    RGBA to Hex Converter
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
