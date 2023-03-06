import Head from "next/head";
import Link from "next/link";
import styles from "styles/style.module.css";
import { TbBoxMultiple } from "react-icons/tb";
import { MdGradient, MdAnimation, MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineRadiusSetting } from "react-icons/ai";
import { BsCursorFill } from "react-icons/bs";
import { FiZap } from "react-icons/fi";
import { GiPowerButton } from "react-icons/gi";
import { BsCardImage } from "react-icons/bs";
import { AiOutlineBgColors } from "react-icons/ai";
import { IoIosColorWand } from "react-icons/io";
import { IoColorPaletteSharp } from "react-icons/io5";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <div>
          <div className=" text-white py-8 md:py-16 justify-center flex items-center px-4">
            <h1 className="text-4xl lg:w-1/2 md:w-2/3 xl:text-5xl lg:px-10 tracking-normal text-center font-semibold">
              <span className={styles.textGrad}>
                Make your website more attractive
              </span>
            </h1>
          </div>
          {/* css gnerator --- */}
          <div>
            <div className="lg:w-[64rem] mx-auto w-full ">
              <div className="flex items-center justify-between px-4 pt-4 dark:text-white">
                <div className="flex items-center text-xl md:text-2xl  gap-4 ">
                  <div>
                    <FiZap />
                  </div>
                  <h1 className="font-semibold ">CSS GENERATOR</h1>
                </div>
                <Link href="/tools/css-generators">
                  <div className="flex gap-1 items-center justify-center text-blue-500 cursor-pointer text-sm font-medium">
                    <p>See all</p>
                    <MdKeyboardArrowRight size={"1em"} />
                  </div>
                </Link>
              </div>
              <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/tools/css-generators/border-radius-generator">
                  <div className="dark:text-white flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300 dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                    <AiOutlineRadiusSetting size={"2.3rem"} />
                    <p className="text-xl font-medium text-center">
                      Border Radius Generator
                    </p>
                  </div>
                </Link>
                <Link href="/tools/css-generators/box-animations">
                  <div className="dark:text-white flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent">
                    <MdAnimation size={"2.3em"} />
                    <p className="text-xl font-medium text-center">
                      Box Animations
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
              </div>
            </div>
          </div>
          <div>
            <div className="lg:w-[64rem] mt-16 mx-auto w-full ">
              <div className="flex items-center justify-between px-4 dark:text-white">
                <div className="flex items-center text-xl md:text-2xl  gap-4 ">
                  <div>
                    <FiZap />
                  </div>
                  <h1 className="font-semibold ">IMAGE TOOLS</h1>
                </div>
                <Link href="/tools/image-tools">
                  <div className="flex gap-1 items-center justify-center text-blue-500 cursor-pointer text-sm font-medium">
                    <p>See all</p>
                    <MdKeyboardArrowRight size={"1em"} />
                  </div>
                </Link>
              </div>

              <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/tools/image-tools/image-converter">
                  <div className="dark:text-white flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                    <BsCardImage size={"2.3rem"} />
                    <p className="text-xl font-medium text-center">
                      Image Format Converter
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="lg:w-[64rem] mt-16 mx-auto w-full ">
              <div className="flex items-center justify-between px-4 dark:text-white">
                <div className="flex items-center text-xl md:text-2xl  gap-4 ">
                  <div>
                    <FiZap />
                  </div>
                  <h1 className="font-semibold ">COLOR TOOLS</h1>
                </div>
                <Link href="/tools/color-tools">
                  <div className="flex gap-1 items-center justify-center text-blue-500 cursor-pointer text-sm font-medium">
                    <p>See all</p>
                    <MdKeyboardArrowRight size={"1em"} />
                  </div>
                </Link>
              </div>

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
              </div>
            </div>
          </div>
          {/* end of css generator box */}
        </div>
      </main>
    </>
  );
}
