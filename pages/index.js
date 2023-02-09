import Head from "next/head";
import Link from "next/link";
import styles from "styles/style.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <div>
          <div className="flex flex-col gap-8 pt-14">
            <h1 className="text-4xl md:text-5xl tracking-normal text-center font-semibold">
              Make your website more stylish
            </h1>
          </div>
        </div>
      </main>
    </>
  );
}
