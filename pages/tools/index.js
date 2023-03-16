import Head from "next/head";
import styles from "styles/style.module.css";
import Link from "next/link";
import { SiCss3 } from "react-icons/si";
import { BsCardImage } from "react-icons/bs";
import { MdColorLens } from "react-icons/md";

export default function Tools() {
  return (
    <>
      <Head>
        <title>ALL TOOLS | WebVerse</title>
        <meta
          name="description"
          content="One place for all website tools like free CSS generator tools, free image tools, free color tools. Generate css code with css generator along with live preview of changes. Image tools to make image ready for website. Color tools to generate color for your website"
        />
        <meta
          name="keywords"
          content="WebVerse, web tools online, web tools, free css generators, free image tools, free color tools"
        ></meta>
        <meta property="og:title" content="WebVerse | Universe of web tools" />
        <meta
          property="og:description"
          content="One place for all website tools like free CSS generator tools, free image tools, free color tools. Generate css code with css generator along with live preview. Image tools to make image ready for website. Color tools to generate color for your website"
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
            ALL TOOLS
          </h1>

          {/* center div starts here */}
          <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/color-tools`} passHref>
                <div className="flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                  <MdColorLens size={"2.3rem"} />
                  <h2 className="text-xl font-medium text-center">Color Tools</h2>
                </div>
              </Link>
              <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators`} passHref>
                <div className="flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                  <SiCss3 size={"2.3rem"} />
                  <h2 className="text-xl font-medium text-center">CSS Tools</h2>
                </div>
              </Link>
              <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/image-tools`} passHref>
                <div className="flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                  <BsCardImage size={"2.3rem"} />
                  <h2 className="text-xl font-medium text-center">Image Tools</h2>
                </div>
              </Link>
          </div>
          {/* center div ends */}
        </div>
      </div>
    </>
  );
}
