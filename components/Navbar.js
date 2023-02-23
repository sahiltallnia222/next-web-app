import Logo from "./Logo";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useRef } from "react";
import Head from "next/head";
import {HiMoon,HiSun} from 'react-icons/hi'
export default function Navbar({toggleDarkMode,darkMode}) {
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
      <div className="fixed top-0 left-0 px-5 dark:text-white w-full h-20 dark:bg-[#1d2537] bg-white flex items-center justify-between z-20 shadow">
        <div className="flex items-center gap-16">
          <Logo />
          <div className="gap-4 font-medium text-md hidden md:flex">
          <Link href="/" className="hover:text-blue-500 p-1  transition-all duration-200">
            HOME
          </Link>
          <Link href="/tools/css-generators" className="hover:text-blue-500 p-1 transition-all duration-200">
            TOOLS
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
        <div className="md:flex hidden gap-8 text-md font-semibold items-center">
          {/* <Link href="/" className="hover:text-blue-500">
            Log in
          </Link>
          <Link
            href="/"
            className="bg-blue-500 hover:bg-white border hover:text-blue-500 transition-all duration-500 border-blue-500  px-4 text-white py-3"
          >
            Sign up
          </Link> */}

          {darkMode &&<div>
              <HiSun size='1.4em' className="cursor-pointer" onClick={()=>{toggleDarkMode()}}/>
          </div>}
          {!darkMode &&<div>
          <HiMoon size='1.4em' className="cursor-pointer" onClick={()=>{toggleDarkMode()}}/>
          </div>}
        </div>
        <div className="flex gap-7 items-center  md:hidden">
        {darkMode &&<div>
              <HiSun size='1.4em' className="cursor-pointer" onClick={()=>{toggleDarkMode()}}/>
          </div>}
          {!darkMode &&<div>
          <HiMoon size='1.4em' className="cursor-pointer" onClick={()=>{toggleDarkMode()}}/>
          </div>}
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
        className="md:hidden bg-[#0f172a] z-50 fixed text-md font-semibold top-0 right-0 w-full text-white flex flex-col h-screen translate-x-full transition-transform duration-300 px-6"
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
