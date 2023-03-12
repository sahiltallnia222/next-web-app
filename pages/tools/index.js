import Head from "next/head";
import styles from "styles/style.module.css";
import Link from "next/link";
import {SiCss3} from 'react-icons/si'
import {BsCardImage} from 'react-icons/bs'
import {MdColorLens} from 'react-icons/md'

export default function Tools() {
  return (
    <>
      <Head>
        <title>WEB TOOLS</title>
      </Head>
      <div>
        <div className="lg:w-[64rem] mx-auto w-full">
          <h1
            className={`md:text-5xl text-4xl text-blue-500 text-center font-semibold pb-5  pt-3 ${styles.textGrad}`}
          >
            All Tools
          </h1>
          
          <div  className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
                <Link href="/tools/color-tools">
                  <div className="dark:text-white flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                    <MdColorLens size={"2.3rem"} />
                    <p className="text-xl font-medium text-center">
                      Color Tools
                    </p>
                  </div>
                </Link>
            </div>
            <div>
                <Link href="/tools/css-generators">
                  <div className="dark:text-white flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                    <SiCss3 size={"2.3rem"} />
                    <p className="text-xl font-medium text-center">
                      CSS Tools
                    </p>
                  </div>
                </Link>
            </div>
            <div>
                <Link href="/tools/image-tools">
                  <div className="dark:text-white flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                    <BsCardImage size={"2.3rem"} />
                    <p className="text-xl font-medium text-center">
                      Image Tools
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
