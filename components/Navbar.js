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
      <div className="fixed top-0 left-0 px-4 shadow w-full h-16 border bg-white flex items-center justify-between z-20">
        <Logo />
        <div className="gap-8 font-semibold text-sm hidden md:flex">
          <Link href="/" className="hover:text-[#5340ff] p-1">
            HOME
          </Link>
          <Link href="/css-generators" className="hover:text-[#5340ff] p-1">
            CSS GENERATORS
          </Link>
          <Link href="/" className="hover:text-[#5340ff] p-1">
            ABOUT US
          </Link>
        </div>
        <div className="md:flex hidden gap-8 text-sm font-semibold items-center">
          <Link href="/" className="hover:text-[#5340ff]">LOG IN</Link>
          <Link
            href="/"
            className="bg-[#5340ff] hover:bg-white border hover:text-[#5340ff] transition-all duration-500 border-[#5340ff]  px-4 text-white py-3"
          >
            SIGN UP
          </Link>
        </div>
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
          <Logo/>
          <RxCross2 size="1.7em" className="hover:cursor-pointer" />
        </div>

        <Link href="/" className="p-2 hover:text-[#5340ff] mt-4">
          HOME
        </Link>
        <Link href="/css-generators" className="hover:text-[#5340ff] p-1">
            CSS GENERATORS
          </Link>
        <Link href="/" className="p-2 hover:text-[#5340ff]">
          ABOUT US
        </Link>

        <div className="flex flex-col items-center mt-16 gap-4">
        <Link
          href="/"
          className="bg-[#5340ff]  border-none text-white py-3 w-full text-center"
        >
          SIGN UP
        </Link>
        <Link href="/" className="p-2 hover:text-[#5340ff] w-full text-center">LOG IN</Link>
        </div>
      </div>
    </>
  );
}
