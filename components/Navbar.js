import Logo from "./Logo";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useRef } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
export default function Navbar({ toggleDarkMode, darkMode }) {
  // -------------------------------------------------------

  const rightBoxRef = useRef();

  // -------------------------------------------------------

  const toggleRightBox = () => {
    if (rightBoxRef.current.classList.contains("translate-x-full")) {
      rightBoxRef.current.classList.remove("translate-x-full");
    } else if (!rightBoxRef.current.classList.contains("translate-x-full")) {
      rightBoxRef.current.classList.add("translate-x-full");
    }
  };

  // ---------------------------------------------------------
  return (
    <>
      <div className="fixed top-0 left-0 px-5 dark:text-white w-full h-20 dark:bg-[#1d2537] bg-white flex items-center justify-between z-20 shadow">
        <div className="flex items-center gap-16">
          <Logo />
          <div className="gap-6 font-medium text-md hidden lg:flex">
            <Link
              href={`/`}
              passHref
              className="hover:text-blue-500 group p-1 w-16 transition-all duration-200"
            >
              <div className="flex items-center flex-col">
                <div>HOME</div>
                <div className="w-0 transition-all duration-300 h-[1px] group-hover:w-14 bg-blue-500"></div>
              </div>
            </Link>
            <Link
              href={`${process.env.NEXT_PUBLIC_HOST}/tools`}
              passHref
              className="hover:text-blue-500 p-1 group w-[4rem] transition-all duration-200"
            >
              <div className="flex items-center flex-col">
                <div>TOOLS</div>
                <div className="w-0 transition-all duration-300 h-[1px] group-hover:w-[3.8rem] bg-blue-500"></div>
              </div>
            </Link>
            <Link
              href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators`}
              className="hover:text-blue-500 w-[10rem] group p-1 transition-all duration-200"
            >
              <div className="flex items-center flex-col">
                <div>CSS GENERATORS</div>
                <div className="w-0 transition-all duration-300 h-[1px] group-hover:w-[9.5rem] bg-blue-500"></div>
              </div>
            </Link>
            <Link
              href={`${process.env.NEXT_PUBLIC_HOST}/tools/image-tools`}
              className="hover:text-blue-500 w-[7.8rem] group p-1 transition-all duration-200"
            >
              <div className="flex items-center flex-col">
                <div>IMAGE TOOLS</div>
                <div className="w-0 transition-all duration-300 h-[1px] group-hover:w-[7.5rem] bg-blue-500"></div>
              </div>
            </Link>
            <Link
              href={`${process.env.NEXT_PUBLIC_HOST}/tools/color-tools`}
              className="hover:text-blue-500 w-[8rem] group p-1 transition-all duration-200"
            >
              <div className="flex items-center flex-col">
                <div>COLOR TOOLS</div>
                <div className="w-0 transition-all duration-300 h-[1px] group-hover:w-[7.8rem] bg-blue-500"></div>
              </div>
            </Link>
          </div>
        </div>
        <div className="lg:flex hidden gap-8 text-md font-semibold items-center">
          {/* <Link href="/" className="hover:text-blue-500">
            Log in
          </Link>
          <Link
            href="/"
            className="bg-blue-500 hover:bg-white border hover:text-blue-500 transition-all duration-500 border-blue-500  px-4 text-white py-3"
          >
            Sign up
          </Link> */}

          {darkMode && (
            <div>
              <HiSun
                size="1.4em"
                className="cursor-pointer"
                onClick={() => {
                  toggleDarkMode();
                }}
              />
            </div>
          )}
          {!darkMode && (
            <div>
              <HiMoon
                size="1.4em"
                className="cursor-pointer"
                onClick={() => {
                  toggleDarkMode();
                }}
              />
            </div>
          )}
        </div>


        <div className="flex gap-7 items-center  lg:hidden">
          {darkMode && (
            <div>
              <HiSun
                size="1.4em"
                className="cursor-pointer"
                onClick={() => {
                  toggleDarkMode();
                }}
              />
            </div>
          )}
          {!darkMode && (
            <div>
              <HiMoon
                size="1.4em"
                className="cursor-pointer"
                onClick={() => {
                  toggleDarkMode();
                }}
              />
            </div>
          )}
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
        className="lg:hidden dark:bg-[#1d2537] bg-white  z-50 fixed text-lg font-semibold top-0 right-0 w-full dark:text-white flex flex-col h-screen translate-x-full transition-transform duration-300 px-6"
      >
        <div className="flex items-center justify-between w-full h-16">
          <Logo />
          <RxCross2 size="1.7em" className="hover:cursor-pointer" />
        </div>

        <Link
          href={`/`}
          className="p-2 border-b mt-4"
        >
          HOME
        </Link>
        <Link
          href={`${process.env.NEXT_PUBLIC_HOST}/tools`}
          className="p-2 pt-5 border-b"
        >
          TOOLS
        </Link>
        <Link
          href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators`}
          className="p-2 pt-5 border-b"
        >
          CSS GENERATORS
        </Link>
        <Link
          href={`${process.env.NEXT_PUBLIC_HOST}/tools/image-tools`}
          className="p-2 pt-5 border-b"
        >
          IMAGE TOOLS
        </Link>
        <Link
          href={`${process.env.NEXT_PUBLIC_HOST}/tools/color-tools`}
          className="p-2 pt-5 border-b"
        >
          COLOR TOOLS
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
