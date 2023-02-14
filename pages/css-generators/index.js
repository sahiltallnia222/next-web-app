import Head from "next/head";
import Link from "next/link";
import styles from "styles/style.module.css";


export default function CSSGENS() {
  return (
    <>
      <Head>
        <title>CSS Generators</title>
      </Head>
      <div>
        <div className="lg:w-[64rem] min-h-screen mx-auto w-full ">
        <h1 className="text-3xl md:text-5xl text-blue-500 text-center font-semibold pb-5  pt-3">
            CSS Generators
          </h1>
          <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href='/css-generators/box-shadow' className={styles.boxShadow}>
              <div className="dark:text-white hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#0f172a] py-10 shadow-md">
                <p className="text-xl font-medium text-center">
                  Box Shadow Generator
                </p>
              </div>
            </Link>
            <Link href='/css-generators/text-shadow' className={styles.boxShadow}>
              <div className="dark:text-white hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#0f172a] py-10 shadow-md">
                <p className="text-xl font-medium text-center">
                  Text Shadow Generator
                </p>
              </div>
            </Link>
            <Link href='/css-generators/gradient-generator' className={styles.boxShadow}>
              <div className="dark:text-white hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#0f172a] py-10 shadow-md">
                <p className="text-xl font-medium text-center">
                  Gradient Generator
                </p>
              </div>
            </Link>
            <Link href='/css-generators/text-gradient' className={styles.boxShadow}>
              <div className="dark:text-white hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#0f172a] py-10 shadow-md">
                <p className="text-xl font-medium text-center">
                Text Gradient Generator
                </p>
              </div>
            </Link>
            <Link href='/css-generators/border-radius-generator' className={styles.boxShadow}>
              <div className="dark:text-white hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#0f172a] py-10 shadow-md">
                <p className="text-xl font-medium text-center">
                Border Radius Generator
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
