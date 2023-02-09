import Head from "next/head";
import Link from "next/link";

export default function CSSGENS() {
  return (
    <>
      <Head>
        <title>CSS Generators</title>
      </Head>
      <div>
        <div className=" bg-[#fafafa] lg:w-[64rem] min-h-screen mx-auto w-full shadow border">
        <h1 className="text-3xl md:text-5xl text-center font-semibold pb-5  pt-3">
            CSS Generators
          </h1>
          <div className="p-4 grid grid-cols-1 md:grid-cols-3">
            <Link href='/css-generators/box-shadow'>
              <div className="border border-black py-10 shadow-lg hover:shadow-md">
                <p className="text-2xl font-semibold text-center">
                  Box Shadow Generator
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
