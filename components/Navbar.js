import Logo from "./Logo";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useRef } from "react";
import Head from "next/head";
export default function Navbar() {
  // -------------------------------------------------------

  const rightBoxRef = useRef();

  // -------------------------------------------------------

  const toggleRightBox = () => {
    if (rightBoxRef.current.classList.contains("translate-x-full")) {
      rightBoxRef.current.classList.remove("translate-x-full");
      // ref.current.classList.add("translate-x-0");
    } else if (!rightBoxRef.current.classList.contains("translate-x-full")) {
      rightBoxRef.current.classList.add("translate-x-full");
      // ref.current.classList.remove("translate-x-0");
    }
  };

  // ---------------------------------------------------------
  return (
    <>
      <Head>
        <title>Css Generators</title>
      </Head>
      <div className="fixed top-0 left-0 px-4 shadow w-full h-16 bg-white flex items-center justify-between z-20">
        <div className="flex items-center gap-16">
          <Logo />
          <div className="gap-4 font-semibold text-md hidden md:flex">
          <Link href="/" className="hover:text-blue-500 p-1">
            Home
          </Link>
          <Link href="/css-generators" className="hover:text-blue-500 p-1">
            CSS Generators
          </Link>
          </div>
        </div>
        {/* <div className="gap-8 font-semibold text-md hidden md:flex">
          <Link href="/" className="hover:text-blue-500 p-1">
            Home
          </Link>
          <Link href="/css-generators" className="hover:text-blue-500 p-1">
            CSS Generators
          </Link>
        </div> */}
        {/* <div className="md:flex hidden gap-8 text-md font-semibold items-center">
          <Link href="/" className="hover:text-blue-500">
            Log in
          </Link>
          <Link
            href="/"
            className="bg-blue-500 hover:bg-white border hover:text-blue-500 transition-all duration-500 border-blue-500  px-4 text-white py-3"
          >
            Sign up
          </Link>
        </div> */}
        <div className="block md:hidden">
          <RiMenu3Line
            size="1.7em"
            className="hover:cursor-pointer"
            onClick={toggleRightBox}
          />
        </div>
      </div>
      <div
        onClick={toggleRightBox}
        ref={rightBoxRef}
        className="md:hidden z-50 fixed text-md font-semibold top-0 right-0 w-full border flex flex-col h-screen bg-white translate-x-full transition-transform duration-300 px-6"
      >
        <div className="flex items-center justify-between w-full h-16">
          <Logo />
          <RxCross2 size="1.7em" className="hover:cursor-pointer" />
        </div>

        <Link href="/" className="p-2 hover:text-blue-500 mt-4">
          Home
        </Link>
        <Link href="/css-generators" className="p-2 hover:text-blue-500 ">
          CSS Generators
        </Link>

        {/* <div className="flex flex-col items-center mt-16 gap-4">
          <Link
            href="/"
            className="bg-blue-500  border-none text-white py-3 w-full text-center"
          >
            Sign up
          </Link>
          <Link href="/" className="p-2 hover:text-blue-500 w-full text-center">
            Log in
          </Link>
        </div> */}
      </div>
    </>
  );
}
