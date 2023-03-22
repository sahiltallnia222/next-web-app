import Head from "next/head";
import styles from "styles/style.module.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CopyToClipboard from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { FaRegCopy } from "react-icons/fa";
import {RxReset} from 'react-icons/rx'
import Link from "next/link";
import { GoTextSize } from "react-icons/go";
import {MdFormatColorText,MdOutlineTextRotateVertical} from "react-icons/md";
import {BsFillLightningFill} from 'react-icons/bs'

export default function ScrollbarGenerator() {
  const [scrollbarProperties, setScrollbarProperties] = useState({});

  useEffect(()=>{
    if(localStorage.getItem('scrollProps')){
      let data=JSON.parse(localStorage.getItem('scrollProps'))
      setScrollbarProperties(data)
    }
    else{
      let data={
        TRBGColor: "#adadae",
        TRHColor: "#adadae",
        TRAColor: "#adadae",
        TRWidth: 12,
        TRRadius: 24,
        TBGColor: "#0f172a",
        THColor: "#0f172a",
        TAColor: "#0f172a",
        TRadius: 24,
      }
      setScrollbarProperties(data)
      localStorage.setItem('scrollProps',JSON.stringify(data))
    }
  },[])

  useEffect(()=>{
    if(Object.keys(scrollbarProperties).length>0){
      localStorage.setItem('scrollProps',JSON.stringify(scrollbarProperties))
    }
  },[scrollbarProperties])

  const handleGenReset=()=>{
    let data={
      TRBGColor: "#adadae",
      TRHColor: "#adadae",
      TRAColor: "#adadae",
      TRWidth: 12,
      TRRadius: 24,
      TBGColor: "#0f172a",
      THColor: "#0f172a",
      TAColor: "#0f172a",
      TRadius: 24,
    }
    setScrollbarProperties(data)
    localStorage.setItem('scrollProps',JSON.stringify(data))
  }

  const codeCopyNotification = () => {
    toast.success("Code copied successfully !", {
      position: "top-center",
      autoClose: 3000,
      theme: "light",
    });
  };

  return (
    <>
      <Head>
        <title>Scrollbar CSS Generator | WebVerse</title>
        <meta
        name="description"
        content="Generate custom scrollbars for your website with CSS scrollbar generator. Customize the appearance and behavior of your scrollbars to match your website's design and make your website stand out. Just copy the generated code and paste in your website."
      />
      <meta name="keywords" content="Webverse, web tools, free css generators, free css scrollbar generator,css scrollbar padding,css scrollbar border radius,css scrollbar background transparent,css scrollbar element,css scrollbar edit,css scrollbar for div"></meta>
      <meta property="og:title" content="Scrollbar CSS Generator | WebVerse" />
        <meta
          property="og:description"
          content="Generate custom scrollbars for your website with CSS scrollbar generator. Customize the appearance and behavior of your scrollbars to match your website's design and make your website stand out. Just copy the generated code and paste in your website."
        />
        <meta
          property="og:image"
          content="/images/og-images/home-page-og.png"
        />
      </Head>
      <div>
        <style jsx>{`
          .scrollbarClass{
            scrollbar-width: auto;
            scrollbar-color: #dfe9eb;
          }
          .scrollbarClass p{
            background: linear-gradient(91deg, #002aff 0%,  #fcb045 100%);
            display:flex;
            align-items:center;
            height:100%;
            padding:20px;
            color:white;
          }
          .scrollbarClass::-webkit-scrollbar {
            width: ${scrollbarProperties.TRWidth}px; // for vertical scroll bar
            height: ${scrollbarProperties.TRWidth}px; // for horizontal scroll bar
          }
          .scrollbarClass::-webkit-scrollbar-track {
            border-radius: ${scrollbarProperties.TRRadius}px;
            background-color: ${scrollbarProperties.TRBGColor};
          }

          .scrollbarClass::-webkit-scrollbar-track:hover {
            background-color: ${scrollbarProperties.TRHColor};
          }

          .scrollbarClass::-webkit-scrollbar-track:active {
            background-color: ${scrollbarProperties.TRAColor};
          }

          .scrollbarClass::-webkit-scrollbar-thumb {
            border-radius: ${scrollbarProperties.TRadius}px;
            background-color: ${scrollbarProperties.TBGColor};
          }

          .scrollbarClass::-webkit-scrollbar-thumb:hover {
            background-color: ${scrollbarProperties.THColor};
          }

          .scrollbarClass::-webkit-scrollbar-thumb:active {
            background-color: ${scrollbarProperties.TAColor};
          }
        `}</style>
        <div className="lg:w-[64rem] mx-auto w-full ">
          <h1
            className={`md:text-5xl text-4xl text-blue-500 text-center font-semibold pb-5  pt-3 ${styles.textGrad}`}
          >
            Scrollbar CSS Generator
          </h1>
          <p className=" leading-9 text-lg text-justify p-4  py-4 lg:px-0 dark:text-white">
          Generate custom scrollbars for your website with CSS scrollbar generator. Customize the appearance and behavior of your scrollbars to match your website's design and make your website stand out. 
          </p>

          {/* generator starts */}
          <div className="md:dark:bg-[#1d2537] md:bg-gray-100  p-4 dark:text-white">
            <div className="grid grid-cols-1">
              <div className="scrollbarClass overflow-x-scroll overflow-y-hidden mb-2  h-48 bg-blue-500">
                <p className="w-[200vw] text-3xl">Scrollbar CSS Generator</p>
              </div>
              <div className="mb-4">
                <button onClick={handleGenReset} className="mt-4 px-4 py-2 text-white flex items-center justify-between gap-2 font-semibold dark:hover:bg-blue-600 transition-all duration-300 border-blue-500 bg-blue-500 rounded-lg text-sm">
                  <span>Reset</span>
                  <span><RxReset /></span>
                </button>
                </div>    
              <div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="md:dark:bg-[#0f172a] dark:bg-[#1d2537] border-2 dark:border-transparent px-3 py-3">
                    <div className="p-2 font-semibold">Track Properties</div>
                    <div className="flex justify-between items-center md:dark:bg-[#1d2537] dark:bg-[#0f172a]  p-2 dark:text-white">
                      <span>Background Color</span>
                      <span className="flex items-center justify-center cursor-pointer">
                        <label
                          htmlFor="TRBGColor"
                          className="border-2 border-black cursor-pointer px-10 py-4 rounded"
                          style={{
                            backgroundColor: scrollbarProperties.TRBGColor,
                          }}
                        ></label>
                        <input
                          type="color"
                          id="TRBGColor"
                          value={scrollbarProperties.TRBGColor}
                          className="w-0 invisible"
                          onChange={(e) => {
                            let values = { ...scrollbarProperties };
                            values.TRBGColor = e.target.value;
                            setScrollbarProperties(values);
                          }}
                        />
                      </span>
                    </div>
                    <div className="flex justify-between items-center md:dark:bg-[#1d2537] dark:bg-[#0f172a]  p-2 mt-2 dark:text-white">
                      <span>Active Color</span>
                      <span className="flex items-center justify-center">
                        <label
                          htmlFor="TRAColor"
                          className="border-2 border-black cursor-pointer  px-10 py-4 rounded"
                          style={{
                            backgroundColor: scrollbarProperties.TRAColor,
                          }}
                        ></label>
                        <input
                          type="color"
                          id="TRAColor"
                          value={scrollbarProperties.TRAColor}
                          className="w-0 invisible"
                          onChange={(e) => {
                            let values = { ...scrollbarProperties };
                            values.TRAColor = e.target.value;
                            setScrollbarProperties(values);
                          }}
                        />
                      </span>
                    </div>
                    <div className="flex justify-between items-center md:dark:bg-[#1d2537] dark:bg-[#0f172a]  p-2 mt-2  dark:text-white">
                      <span>Hover Color</span>
                      <span className="flex items-center justify-center">
                        <label
                          htmlFor="TRHColor"
                          className="border-2 border-black cursor-pointer  px-10 py-4 rounded"
                          style={{
                            backgroundColor: scrollbarProperties.TRHColor,
                          }}
                        ></label>
                        <input
                          type="color"
                          id="TRHColor"
                          value={scrollbarProperties.TRHColor}
                          className="w-0 invisible"
                          onChange={(e) => {
                            let values = { ...scrollbarProperties };
                            values.TRHColor = e.target.value;
                            setScrollbarProperties(values);
                          }}
                        />
                      </span>
                    </div>
                    <div className="p-2">
                      <div className="flex items-center  justify-between dark:text-white">
                        <div>Track Radius</div>
                        <div>{scrollbarProperties.TRRadius} px</div>
                      </div>
                      <div>
                        <input
                          type="range"
                          value={scrollbarProperties.TRRadius}
                          min="0"
                          max="100"
                          onChange={(e) => {
                            let values = { ...scrollbarProperties };
                            values.TRRadius = e.target.value;
                            setScrollbarProperties(values);
                          }}
                          className="w-full h-1 bg-gray-300 rounded-md appearance-none cursor-pointer"
                        />
                      </div>
                    </div>
                    <div className="p-2">
                      <div className="flex items-center justify-between dark:text-white">
                        <div>Track Width</div>
                        <div>{scrollbarProperties.TRWidth} px</div>
                      </div>
                      <div>
                        <input
                          type="range"
                          value={scrollbarProperties.TRWidth}
                          min="0"
                          max="100"
                          onChange={(e) => {
                            let values = { ...scrollbarProperties };
                            values.TRWidth = e.target.value;
                            setScrollbarProperties(values);
                          }}
                          className="w-full h-1 bg-gray-300 rounded-md appearance-none cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="md:dark:bg-[#0f172a] dark:bg-[#1d2537]  border-2 dark:border-transparent px-3 py-3">
                    <div className="p-2 font-semibold">Thumb Properties</div>
                    <div className="flex justify-between items-center md:dark:bg-[#1d2537] dark:bg-[#0f172a] p-2 dark:text-white">
                      <span>Background Color</span>
                      <span className="flex items-center justify-center cursor-pointer">
                        <label
                          htmlFor="TBGColor"
                          className="border-2 border-black cursor-pointer px-10 py-4 rounded"
                          style={{
                            backgroundColor: scrollbarProperties.TBGColor,
                          }}
                        ></label>
                        <input
                          type="color"
                          id="TBGColor"
                          value={scrollbarProperties.TBGColor}
                          className="w-0 invisible"
                          onChange={(e) => {
                            let values = { ...scrollbarProperties };
                            values.TBGColor = e.target.value;
                            setScrollbarProperties(values);
                          }}
                        />
                      </span>
                    </div>
                    <div className="flex justify-between items-center md:dark:bg-[#1d2537] dark:bg-[#0f172a]  p-2 mt-2 dark:text-white">
                      <span>Active Color</span>
                      <span className="flex items-center justify-center">
                        <label
                          htmlFor="TAColor"
                          className="border-2 border-black cursor-pointer  px-10 py-4 rounded"
                          style={{
                            backgroundColor: scrollbarProperties.TAColor,
                          }}
                        ></label>
                        <input
                          type="color"
                          id="TAColor"
                          value={scrollbarProperties.TAColor}
                          className="w-0 invisible"
                          onChange={(e) => {
                            let values = { ...scrollbarProperties };
                            values.TAColor = e.target.value;
                            setScrollbarProperties(values);
                          }}
                        />
                      </span>
                    </div>
                    <div className="flex justify-between items-center md:dark:bg-[#1d2537] dark:bg-[#0f172a]  p-2 mt-2  dark:text-white">
                      <span>Hover Color</span>
                      <span className="flex items-center justify-center">
                        <label
                          htmlFor="THColor"
                          className="border-2 border-black cursor-pointer  px-10 py-4 rounded"
                          style={{
                            backgroundColor: scrollbarProperties.THColor,
                          }}
                        ></label>
                        <input
                          type="color"
                          id="THColor"
                          value={scrollbarProperties.THColor}
                          className="w-0 invisible"
                          onChange={(e) => {
                            let values = { ...scrollbarProperties };
                            values.THColor = e.target.value;
                            setScrollbarProperties(values);
                          }}
                        />
                      </span>
                    </div>
                    <div className="p-2">
                      <div className="flex items-center  justify-between dark:text-white">
                        <div>Thumb Radius</div>
                        <div>{scrollbarProperties.TRadius} px</div>
                      </div>
                      <div>
                        <input
                          type="range"
                          value={scrollbarProperties.TRadius}
                          min="0"
                          max="100"
                          onChange={(e) => {
                            let values = { ...scrollbarProperties };
                            values.TRadius = e.target.value;
                            setScrollbarProperties(values);
                          }}
                          className="w-full h-1 bg-gray-300 rounded-md appearance-none cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div></div>
              </div>
              <div></div>
            </div>
          </div>
          {/* generator ends here */}

          {/* Css code starts */}
          <div className="md:dark:bg-[#1d2537] md:bg-gray-100 ">
          <div className="w-full  p-4 dark:text-white mt-4">
            <div className="flex items-center justify-between mb-3">
              <p className="font-medium text-lg py-2">HTML Code</p>
              <CopyToClipboard
                text={`<div class='scrollbarClass'></div>`}
                className=" px-4 py-2 text-white flex items-center justify-between gap-2 font-semibold dark:hover:bg-blue-600 transition-all duration-300 border-blue-500 bg-blue-500 rounded-lg text-sm"
              >
                <button onClick={codeCopyNotification} className="flex">
                  <span>Copy</span>
                  <span>
                    <FaRegCopy />
                  </span>
                </button>
              </CopyToClipboard>
            </div>
            <SyntaxHighlighter language="css" style={docco}>
              {`<div class='scrollbarClass'></div>`}
            </SyntaxHighlighter>
          </div>
          <div className="w-full  p-4 dark:text-white">
            <div className="flex items-center justify-between mb-3">
              <p className="font-medium text-lg py-2">CSS Code</p>
              <CopyToClipboard
                text={`.scrollbarClass{
  scrollbar-width: auto;
  scrollbar-color: #dfe9eb;
  overflow:scroll;
}
.scrollbarClass::-webkit-scrollbar {
  width: ${scrollbarProperties.TRWidth}px;
  height: ${scrollbarProperties.TRWidth}px;
}
.scrollbarClass::-webkit-scrollbar-track {
  border-radius: ${scrollbarProperties.TRRadius}px;
  background-color: ${scrollbarProperties.TRBGColor};
}

.scrollbarClass::-webkit-scrollbar-track:hover {
  background-color: ${scrollbarProperties.TRHColor};
}

.scrollbarClass::-webkit-scrollbar-track:active {
  background-color: ${scrollbarProperties.TRAColor};
}

.scrollbarClass::-webkit-scrollbar-thumb {
  border-radius: ${scrollbarProperties.TRadius}px;
  background-color: ${scrollbarProperties.TBGColor};
}

.scrollbarClass::-webkit-scrollbar-thumb:hover {
  background-color: ${scrollbarProperties.THColor};
}

.scrollbarClass::-webkit-scrollbar-thumb:active {
  background-color: ${scrollbarProperties.TAColor};
}`}
                className=" px-4 py-2 text-white flex items-center justify-between gap-2 font-semibold dark:hover:bg-blue-600 transition-all duration-300 border-blue-500 bg-blue-500 rounded-lg text-sm"
              >
                <button onClick={codeCopyNotification} className="flex">
                  <span>Copy</span>
                  <span>
                    <FaRegCopy />
                  </span>
                </button>
              </CopyToClipboard>
            </div>
            <SyntaxHighlighter language="css" style={docco}>
              {`.scrollbarClass{
  scrollbar-width: auto;
  scrollbar-color: #dfe9eb;
  overflow:scroll;
}
.scrollbarClass::-webkit-scrollbar {
  width: ${scrollbarProperties.TRWidth}px;
  height: ${scrollbarProperties.TRWidth}px; 
}
.scrollbarClass::-webkit-scrollbar-track {
  border-radius: ${scrollbarProperties.TRRadius}px;
  background-color: ${scrollbarProperties.TRBGColor};
}

.scrollbarClass::-webkit-scrollbar-track:hover {
  background-color: ${scrollbarProperties.TRHColor};
}

.scrollbarClass::-webkit-scrollbar-track:active {
  background-color: ${scrollbarProperties.TRAColor};
}

.scrollbarClass::-webkit-scrollbar-thumb {
  border-radius: ${scrollbarProperties.TRadius}px;
  background-color: ${scrollbarProperties.TBGColor};
}

.scrollbarClass::-webkit-scrollbar-thumb:hover {
  background-color: ${scrollbarProperties.THColor};
}

.scrollbarClass::-webkit-scrollbar-thumb:active {
  background-color: ${scrollbarProperties.TAColor};
}`}
            </SyntaxHighlighter>
          </div>
          </div>
          {/* css code ends here */}

          {/* explore css generators starts here  */}
        <div className="lg:w-[64rem] mx-auto w-full p-4 lg:p-0 lg:py-4 dark:text-white">
              <div className="flex items-center justify-between ">
                <div className="flex items-center text-xl md:text-2xl gap-4 py-4">
                  <div>
                    <BsFillLightningFill />
                  </div>
                  <h2 className="font-semibold">Explore other tools</h2>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/text-animations`} passHref>
              <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                <MdOutlineTextRotateVertical size={"2.3rem"} />
                <p className="text-xl font-medium text-center">
                  Text Animations
                </p>
              </div>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/text-gradient`} passHref>
              <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                <MdFormatColorText size={"2.3rem"} />
                <p className="text-xl font-medium text-center">
                  Text Gradient Generator
                </p>
              </div>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/text-shadow`} passHref>
              <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                <GoTextSize size={"2.3rem"} />
                <p className="text-xl font-medium text-center">
                  Text Shadow Generator
                </p>
              </div>
            </Link>
              </div>
            </div>
        {/*explore  css generator ends here */}

        </div>
      </div>
    </>
  );
}


{/* <div className="w-full dark:bg-[#1d2537]  p-4 dark:text-white mt-4">
  <div className="flex items-center justify-between mb-3">
    <p className="font-medium text-lg py-2">HTML Code</p>
    <CopyToClipboard
      text={``}
      className=" px-4 py-2 text-white flex items-center justify-between gap-2 font-semibold dark:hover:bg-blue-600 transition-all duration-300 border-blue-500 bg-blue-500 rounded-lg text-sm"
    >
      <button onClick={codeCopyNotification} className="flex">
        <span>Copy</span>
        <span>
          <FaRegCopy />
        </span>
      </button>
    </CopyToClipboard>
  </div>
  <SyntaxHighlighter language="css" style={docco}>
    {``}
  </SyntaxHighlighter>
</div>; */}
