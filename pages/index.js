import Head from "next/head";
import Link from "next/link";
import styles from "styles/style.module.css";
import { TbBoxMultiple } from "react-icons/tb";
import { MdAnimation, MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineRadiusSetting } from "react-icons/ai";
import { FiZap } from "react-icons/fi";
import { BsCardImage } from "react-icons/bs";
import { AiOutlineBgColors } from "react-icons/ai";
import { IoIosColorWand } from "react-icons/io";
import { IoColorPaletteSharp } from "react-icons/io5";



export default function Home() {
  return (
    <>
      <Head>
        <title>WebVerse | Free tools to make website</title>
        <meta
        name="description"
        content="WebVerse is a all in one plateform to provide free website tools like css generators, image tools and color tools. In WebVerse, you can learn css with css generators without any experience with live preview of css changes.You are direct copy paste css from css generator and paste in your website. Free image tools to make image best fit in your website. Free color tools to see preview of different colors and color shades that best fit in your website."
      />
      <meta name="keywords" content="Webverse, web tools, free css generators, free image tools, free color tools"></meta>
      <meta property="og:title" content="WebVerse | Universe of web tools" />
        <meta
          property="og:description"
          content="WebVerse is a one plateform to provide free website tools like css generators, image tools and color tools. In webverse , we provides you tools like css generator, image tools and color tools to make your development easy..."
        />
        <meta
          property="og:image"
          content="/images/og-images/home-page-og.png"
        />
        <meta name="google-site-verification" content="dKK5luyv-BmFFXqam1yL_92nsv-f3GQlNybdpQnJTF0" />
      </Head>
      <div>
        {/* center div starts here*/}
        <div className="dark:text-white">
          {/* heading starts */}
          <div className=" text-white py-8 md:py-16 justify-center flex items-center px-4">
            <div className="text-4xl lg:w-1/2 md:w-2/3 xl:text-5xl lg:px-10 tracking-normal text-center font-semibold">
              <h1 className={styles.textGrad}>
                Make your website more attractive
              </h1>
            </div>
          </div>
          {/* heading ends here */}

            {/* css generators starts here  */}
            <div className="lg:w-[64rem] mx-auto w-full">
              <div className="flex items-center justify-between px-4 pt-4 ">
                <div className="flex items-center text-xl md:text-2xl gap-4 ">
                  <div>
                    <FiZap />
                  </div>
                  <h2 className="font-semibold ">CSS GENERATOR</h2>
                </div>
                <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators`} passHref>
                  <div className="flex gap-1 items-center justify-center text-blue-500 cursor-pointer text-sm font-medium">
                    <p>See all</p>
                    <MdKeyboardArrowRight size={"1em"} />
                  </div>
                </Link>
              </div>
              <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/border-radius-generator`} passHref>
                  <div className="flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300 dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                    <AiOutlineRadiusSetting size={"2.3rem"} />
                    <p className="text-xl font-medium text-center">
                      Border Radius Generator
                    </p>
                  </div>
                </Link>
                <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/box-animations`} passHref>
                  <div className="flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent">
                    <MdAnimation size={"2.3em"} />
                    <p className="text-xl font-medium text-center">
                      Box Animations
                    </p>
                  </div>
                </Link>
                <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/box-shadow`} passHref>
                  <div className="flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent">
                    <TbBoxMultiple size={"2.3em"} />
                    <p className="text-xl font-medium text-center">
                      Box Shadow Generator
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            {/* css generator ends here */}


            {/* Image tools starts here */}
            <div className="lg:w-[64rem] mt-16 mx-auto w-full ">
              <div className="flex items-center justify-between px-4 ">
                <div className="flex items-center text-xl md:text-2xl  gap-4 ">
                  <div>
                    <FiZap />
                  </div>
                  <h2 className="font-semibold ">IMAGE TOOLS</h2>
                </div>
                <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/image-tools`} passHref>
                  <div className="flex gap-1 items-center justify-center text-blue-500 cursor-pointer text-sm font-medium">
                    <p>See all</p>
                    <MdKeyboardArrowRight size={"1em"} />
                  </div>
                </Link>
              </div>

              <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/image-tools/image-converter`} passHref>
                  <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                    <BsCardImage size={"2.3rem"} />
                    <p className="text-xl font-medium text-center">
                      Image Format Converter
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            {/* Image tools ends here */}


            {/* Color tools starts */}
            <div className="lg:w-[64rem] mt-16 mx-auto w-full ">
              <div className="flex items-center justify-between px-4 ">
                <div className="flex items-center text-xl md:text-2xl  gap-4 ">
                  <div>
                    <FiZap />
                  </div>
                  <h2 className="font-semibold ">COLOR TOOLS</h2>
                </div>
                <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/color-tools`} passHref>
                  <div className="flex gap-1 items-center justify-center text-blue-500 cursor-pointer text-sm font-medium">
                    <p>See all</p>
                    <MdKeyboardArrowRight size={"1em"} />
                  </div>
                </Link>
              </div>

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
              </div>
            </div>
          {/* color tools ends here*/}


        </div>
        {/* center div ends here */}
      </div>
    </>
  );
}
