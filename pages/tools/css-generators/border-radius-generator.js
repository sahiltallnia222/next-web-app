import Head from "next/head";
import { useRef, useEffect, useState } from "react";
import Draggable from "react-draggable";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import styles from "styles/style.module.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { FaRegCopy } from "react-icons/fa";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import {GrFacebookOption} from 'react-icons/gr'
import {RxReset} from 'react-icons/rx'

export default function BorderRadiusGenerator() {
  const borderBoxParentRef = useRef();
  const borderBoxRef = useRef();
  const leftYTRef = useRef();
  const rightYTRef = useRef();
  const topXLRef = useRef();
  const bottomXLRef = useRef();
  const [dotMargin, setDotMargin] = useState(0);
  const [borderStyle, setBorderStyle] = useState("solid");
  const [borderWidth, setBorderWidth] = useState(4);
  const [borderColor, setBorderColor] = useState("#f98234");
  const [bgColor, setbgColor] = useState("#f98234");
  const [middle, setMiddle] = useState({ XTL: 0,pXTL:0, YLT: 0,pYLT:0, YRT: 0,pYRT:0, XBL: 0,pXBL:0 });
  const [bounds, setBounds] = useState({
    right: 0,
    bottom: 0,
  });
  const [radiusValues, setRadiusValues] = useState({
    YLT: 0,
    YLB: 0,
    YRT: 0,
    YRB: 0,
    XTL: 0,
    XTR: 0,
    XBL: 0,
    XBR: 0,
  });
  const handleDrag = (e, data, pos_1, pos_2, axis) => {
    let Dvalues = { ...middle };
    Dvalues[pos_1] = data[axis];
    let values = { ...radiusValues };
    values[pos_1] = Math.abs(parseInt((data[axis] * 100) / bounds.bottom));
    values[pos_2] = 100 - values[pos_1];
    Dvalues[`p`+pos_1]=values[pos_1]
    Dvalues[`p`+pos_2]=values[pos_2]
    setMiddle(Dvalues);
    setRadiusValues(values);
    localStorage.setItem('border-radius-generator',JSON.stringify(middle))
  };

  const codeCopyNotification = () => {
    toast.success("Code copied successfully !", {
      position: "top-center",
      autoClose: 3000,
      theme: "light",
    });
  };
  const handleResize = (x) => {
    if (borderBoxParentRef.current && borderBoxRef.current) {
      const parentBoxHeight = borderBoxParentRef.current.clientHeight;
      const height = borderBoxRef.current.clientHeight;
      setDotMargin((parentBoxHeight - height) / 2);
      let values = { ...bounds };
      values.bottom = height - 34;
      values.right = height - 34;
      let dValues = { ...middle };
      dValues.YLT = values.bottom * 0.5;
      dValues.XTL = values.right * 0.5;
      dValues.XBL = values.right * 0.5;
      dValues.YRT = values.bottom * 0.5;
      dValues.pYLT=50;
      dValues.pXTL=50;
      dValues.pXBL=50;
      dValues.pYRT=50;
      if(x){
        localStorage.setItem('border-radius-generator',JSON.stringify(dValues))
      }
      setMiddle(dValues);
      setBounds(values);
      values = { ...radiusValues };
      values.YLT = Math.abs(parseInt(50));
      values.YLB = 100 - values.YLT;
      values.YRT = Math.abs(parseInt(50));
      values.YRB = 100 - values.YRT;
      values.XTL = Math.abs(parseInt(50));
      values.XTR = 100 - values.XTL;
      values.XBL = Math.abs(parseInt(50));
      values.XBR = 100 - values.XBL;
      setRadiusValues(values);
    }
  };
  useEffect(() => {
    window.addEventListener("resize",()=>{handleResize(true)});
    handleResize(false)
    if(typeof window!=undefined && localStorage.getItem('border-radius-generator')){
       const middle=JSON.parse(localStorage.getItem('border-radius-generator'))
        let dValues = { ...middle };
        dValues.YLT = middle.YLT;
        dValues.XTL = middle.XTL;
        dValues.XBL = middle.XBL;
        dValues.YRT = middle.YRT;
        dValues.pYLT=middle.pYLT;
        dValues.pXTL=middle.pXTL;
        dValues.pXBL=middle.pXBL;
        dValues.pYRT=middle.pYRT;
        setMiddle(dValues);
        let values = { ...radiusValues };
        values.YLT = Math.abs(parseInt(middle.pYLT));
        values.YLB = 100 - values.YLT;
        values.YRT = Math.abs(parseInt(middle.pYRT));
        values.YRB = 100 - values.YRT;
        values.XTL = Math.abs(parseInt(middle.pXTL));
        values.XTR = 100 - values.XTL;
        values.XBL = Math.abs(parseInt(middle.pXBL));
        values.XBR = 100 - values.XBL;
        setRadiusValues(values);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  let borderRadius = `${radiusValues.XTL}% ${radiusValues.XTR}% ${radiusValues.XBR}% ${radiusValues.XBL}% / ${radiusValues.YLT}% ${radiusValues.YRT}% ${radiusValues.YRB}% ${radiusValues.YLB}%`;
  return (
    <>
      <Head>
        <title>Border Radius Generator</title>
      </Head>
      {borderBoxParentRef && (
        <div>
          <div className="lg:w-[64rem] mx-auto w-full ">
            <h1
              className={`md:text-5xl text-4xl text-blue-500 text-center font-semibold pb-5  pt-3 ${styles.textGrad}`}
            >
              Border Radius Generator
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-6 dark:bg-[#1d2537] lg:bg-gray-200">
              {/* left box */}
              <div className=" w-full dark:text-white">
                <div
                  ref={borderBoxParentRef}
                  className="border dark:border-white border-black w-[88vw] md:w-[30rem] h-[88vw] md:h-[30rem] mx-auto flex justify-center items-center relative"
                >
                  <div
                    className="w-[90%] h-[90%] flex items-center justify-center"
                    ref={borderBoxRef}
                  >
                    <div
                      className="w-[95%] h-[95%]"
                      style={{
                        borderRadius: borderRadius,
                        borderStyle: borderStyle,
                        borderWidth: borderWidth + "px",
                        backgroundColor: bgColor,
                        borderColor: borderColor,
                      }}
                    ></div>
                  </div>
                  <Draggable
                    onDrag={(e, data) => {
                      handleDrag(e, data, "YLT", "YLB", "y");
                    }}
                    axis="y"
                    nodeRef={leftYTRef}
                    position={{ x: 0, y: middle.YLT }}
                    bounds={{
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: bounds.bottom,
                    }}
                    scale={1}
                  >
                    <div
                      ref={leftYTRef}
                      className="absolute cursor-pointer left-[-17px] flex items-center justify-center"
                      style={{ top: `${dotMargin}px` }}
                    >
                      <VscDebugBreakpointLogUnverified size={"34px"} />
                    </div>
                  </Draggable>

                  <Draggable
                    onDrag={(e, data) => {
                      handleDrag(e, data, "YRT", "YRB", "y");
                    }}
                    axis="y"
                    nodeRef={rightYTRef}
                    position={{ x: 0, y: middle.YRT }}
                    bounds={{
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: bounds.bottom,
                    }}
                    scale={1}
                  >
                    <div
                      ref={rightYTRef}
                      className="absolute cursor-pointer right-[-17px] flex items-center justify-center"
                      style={{ top: `${dotMargin}px` }}
                    >
                      <VscDebugBreakpointLogUnverified size={"34px"} />
                    </div>
                  </Draggable>
                  <Draggable
                    onDrag={(e, data) => {
                      handleDrag(e, data, "XTL", "XTR", "x");
                    }}
                    axis="x"
                    nodeRef={topXLRef}
                    position={{ x: middle.XTL, y: 0 }}
                    bounds={{ left: 0, top: 0, right: bounds.right, bottom: 0 }}
                    scale={1}
                  >
                    <div
                      ref={topXLRef}
                      className="absolute cursor-pointer top-[-17px] flex items-center justify-center"
                      style={{ left: `${dotMargin}px` }}
                    >
                      <VscDebugBreakpointLogUnverified size={"34px"} />
                    </div>
                  </Draggable>
                  <Draggable
                    onDrag={(e, data) => {
                      handleDrag(e, data, "XBL", "XBR", "x");
                    }}
                    axis="x"
                    nodeRef={bottomXLRef}
                    position={{ x: middle.XBL, y: 0 }}
                    bounds={{ left: 0, top: 0, right: bounds.right, bottom: 0 }}
                    scale={1}
                  >
                    <div
                      ref={bottomXLRef}
                      className="absolute cursor-pointer bottom-[-17px] flex items-center justify-center"
                      style={{ left: `${dotMargin}px` }}
                    >
                      <VscDebugBreakpointLogUnverified size={"34px"} />
                    </div>
                  </Draggable>
                </div>
              </div>
              {/* right side */}
              <div className="text-sm font-medium">
                {/* border style */}
                <div className="  border-gray-200 cursor-pointer block w-full dark:border-none  dark:placeholder-gray-400 dark:text-white outline-none">
                  <label
                    htmlFor="border-style"
                    className="block mb-3 text-gray-900 dark:text-white"
                  >
                    Border style
                  </label>
                  <select
                    id="border-style"
                    defaultValue={borderStyle}
                    onChange={(e) => {
                      setBorderStyle(e.target.value);
                    }}
                    className="p-2.5 w-full dark:text-white outline-none text-sm block dark:bg-[#0f172a] cursor-pointer dark:border-none border-gray-200 border"
                  >
                    <option value="dotted">Dotted</option>
                    <option value="dashed">Dashed</option>
                    <option value="solid">Solid</option>
                    <option value="double">Double</option>
                    <option value="groove">Groove</option>
                    <option value="ridge">Ridge</option>
                    <option value="inset">Inset</option>
                    <option value="outset">Outset</option>
                    <option value="none">None</option>
                    <option value="hidden">Hidden</option>
                  </select>
                </div>
                <div className="">
                  <div className="flex pt-4 items-center justify-between dark:text-white">
                    <div>Border Width</div>
                    <div>{borderWidth} px</div>
                  </div>
                  <div>
                    <input
                      type="range"
                      value={borderWidth}
                      min="0"
                      max="100"
                      onChange={(e) => {
                        setBorderWidth(e.target.value);
                      }}
                      className="w-full h-1 rounded-md appearance-none cursor-pointer"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center w-full md:w-1/2 mt-3 dark:text-white">
                    <span>Border Color </span>
                    <span>
                      <label
                        htmlFor="border-color"
                        className="border-2 border-black  px-3 py-0 rounded"
                        style={{ backgroundColor: borderColor }}
                      ></label>
                      <input
                        type="color"
                        id="border-color"
                        value={borderColor}
                        className="w-0 invisible"
                        onChange={(e) => {
                          setBorderColor(e.target.value);
                        }}
                      />
                    </span>
                  </div>
                  <div className="flex justify-between items-center w-full md:w-1/2 dark:text-white">
                    <span>Background Color</span>
                    <span>
                      <label
                        htmlFor="bg-color"
                        className="border-2 border-black  px-3 py-0 rounded"
                        style={{ backgroundColor: bgColor }}
                      ></label>
                      <input
                        type="color"
                        id="bg-color"
                        value={bgColor}
                        className="w-0 invisible"
                        onChange={(e) => {
                          setbgColor(e.target.value);
                        }}
                      />
                    </span>
                  </div>
                </div>
                <div className="w-full pt-6 dark:text-white">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-medium text-lg pb-1">CSS code</p>
                    <CopyToClipboard
                      text={`border-radius:${borderRadius};
border-style:${borderStyle};
border-width:${borderWidth}px;
border-color:${borderColor};
background-color:${bgColor};`}
                      className=" px-4 py-2 text-white flex items-center justify-between gap-2 font-semibold dark:hover:bg-blue-600 transition-all duration-300 border-blue-500 bg-blue-500 rounded-lg text-sm"
                    >
                      <button onClick={codeCopyNotification}>
                        {" "}
                        <span>Copy</span>
                        <span>
                          <FaRegCopy />
                        </span>
                      </button>
                    </CopyToClipboard>
                  </div>
                  <SyntaxHighlighter language="css" style={docco}>
                    {`border-radius:${borderRadius};\nborder-style:${borderStyle};\nborder-width:${borderWidth}px;\nborder-color:${borderColor};\nbackground-color:${bgColor};`}
                  </SyntaxHighlighter>
                </div>
                <button onClick={()=>{handleResize(true)}} className="mt-4 px-4 py-2 text-white flex items-center justify-between gap-2 font-semibold dark:hover:bg-blue-600 transition-all duration-300 border-blue-500 bg-blue-500 rounded-lg text-sm">
                  <span>Reset</span>
                  <span><RxReset /></span>
                </button>
              </div>
            </div>
            <div className="dark:bg-[#1d2537] p-4 mt-4 lg:bg-gray-200 dark:text-white">
              <p className="text-2xl pb-3 font-medium">
                Example 1 of fancy border radius
              </p>
              <div className="p-4">
                <style jsx>{`
                  .example1 {
                    animation: animation1 4s ease-in-out infinite;
                    background-color:#3b82f6;
                  }
                  @keyframes animation1 {
                    0% {
                      border-radius: 65% 35% 25% 75% / 65% 25% 75% 35%;
                    }
                    50% {
                      border-radius: 28% 63% 72% 37% / 50% 70% 30% 50%;
                    }
                    100% {
                      border-radius: 63% 37% 28% 72% / 63% 28% 72% 37%;
                    }
                  }
                `}</style>
                <div className="mx-auto md:w-80 h-80 example1 w-full flex items-center justify-center text-white text-2xl p-3 text-center font-medium">
                  <p>Animated Border Radius</p>
                </div>
                <div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-medium text-lg py-2">HTML Code</p>
                      <CopyToClipboard
                        text={`<div class="example1"><p>Animated Border Radius</p></div>`}
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
                      {`<div class="example1"><p>Animated Border Radius</p></div>`}
                    </SyntaxHighlighter>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-medium text-lg py-2">CSS Code</p>
                      <CopyToClipboard
                        text={`.example1 {
  animation: animation1 4s ease-in-out infinite;
  background-color:#3b82f6;
  display:flex;
  align-items:center;
  justify-content:center;
  width:20rem;
  height:20rem;
}
@keyframes animation1 {
0% {
  border-radius: 65% 35% 25% 75% / 65% 25% 75% 35%;
}
50% {
  border-radius: 28% 63% 72% 37% / 50% 70% 30% 50%;
}
100% {
  border-radius: 63% 37% 28% 72% / 63% 28% 72% 37%;
}
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
                      {`.example1 {
  animation: animation1 4s ease-in-out infinite;
  background-color:#3b82f6;
  display:flex;
  align-items:center;
  justify-content:center;
  width:20rem;
  height:20rem;
}
@keyframes animation1 {
  0% {
    border-radius: 65% 35% 25% 75% / 65% 25% 75% 35%;
  }
  50% {
    border-radius: 28% 63% 72% 37% / 50% 70% 30% 50%;
  }
  100% {
    border-radius: 63% 37% 28% 72% / 63% 28% 72% 37%;
  }
}`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>
            <div className="dark:bg-[#1d2537] p-4 mt-4 lg:bg-gray-200 dark:text-white">
              <p className="text-2xl pb-3 font-medium">
                Example 2 of fancy border radius
              </p>
              <div className="p-4">
                <style jsx>{`
                  .example2 {
                    animation: animation2 4s ease-in-out infinite;
                    background-color:#3a80f2;
                    border:2px solid white;
                    display:flex;
                    align-items:center;
                    justify-content:center;

                  }
                  @keyframes animation2 {
                    0% {
                      border-radius:100% 0% 100% 0% / 20% 80% 20% 80%;
                    }
                    50% {
                      border-radius:80% 20% 80% 20% / 0% 100% 0% 100%;
                    }
                    100% {
                      border-radius:100% 0% 100% 0% / 20% 80% 20% 80%;
                    }
                    }
                `}</style>
                <div className="mx-auto md:w-80 h-80 example2 w-full text-white text-2xl p-3 text-center font-medium">
                  <p>Animated Border Radius</p>
                </div>
                <div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-medium text-lg py-2">HTML Code</p>
                      <CopyToClipboard
                        text={`<div class="example2"><p>Animated Border Radius</p></div>`}
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
                      {`<div class="example2"><p>Animated Border Radius</p></div>`}
                    </SyntaxHighlighter>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-medium text-lg py-2">CSS Code</p>
                      <CopyToClipboard
                        text={`.example2 {
  animation: animation2 4s ease-in-out infinite;
  background-color:#3a80f2;
  display:flex;
  align-items:center;
  justify-content:center;
  width:20rem;
  height:20rem;
}
@keyframes animation2 {
  0% {
    border-radius:100% 0% 100% 0% / 20% 80% 20% 80%;
  }
  50% {
    border-radius:80% 20% 80% 20% / 0% 100% 0% 100%;
  }
  100% {
    border-radius:100% 0% 100% 0% / 20% 80% 20% 80%;
  }
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
                      {`.example2 {
  animation: animation2 4s ease-in-out infinite;
  background-color:#3a80f2;
  display:flex;
  align-items:center;
  justify-content:center;
  width:20rem;
  height:20rem;
}
@keyframes animation2 {
  0% {
    border-radius:100% 0% 100% 0% / 20% 80% 20% 80%;
  }
  50% {
    border-radius:80% 20% 80% 20% / 0% 100% 0% 100%;
  }
  100% {
    border-radius:100% 0% 100% 0% / 20% 80% 20% 80%;
  }
}`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>
            <div className="dark:bg-[#1d2537] p-4 mt-4 lg:bg-gray-200 dark:text-white">
              <p className="text-2xl pb-3 font-medium">
                Example 3 of fancy border radius
              </p>
              <div className="p-4">
                <style jsx>{`
                .exampleB3{
                  background-color:white;
                }
                  .example3 {
                    animation: animation3 4s ease-in-out infinite;
                    border:2px solid #0f172a;
                    padding:0.4em;
                  }
                  @keyframes animation3 {
                    0% {
                      border-radius: 65% 35% 25% 75% / 65% 25% 75% 35%;
                    }
                    50% {
                      border-radius: 28% 63% 72% 37% / 50% 70% 30% 50%;
                    }
                    100% {
                      border-radius: 63% 37% 28% 72% / 63% 28% 72% 37%;
                    }
                  }
                `}</style>
                <div className="mx-auto md:w-80 exampleB3 w-full flex items-center justify-center text-lg gap-4 p-3 text-center font-medium text-black">
                  <span className="example3"><GrFacebookOption color="black" size={'1.4em'} /></span>
                  <span>Facebook</span>
                </div>
                <div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-medium text-lg py-2">HTML Code</p>
                      <CopyToClipboard
                        text={`<div class="exampleB3">
                        <span class="example3"><i class="fa-brands fa-facebook-f"></i></span>
                        <span>Facebook</span>
                      </div>`}
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
                      {`<div class="exampleB3k"><span class="example3"><i class="fa-brands fa-facebook-f"></i></span><span>Facebook</span></div> <!-- (font awesome icon) -->`}
                    </SyntaxHighlighter>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-medium text-lg py-2">CSS Code</p>
                      <CopyToClipboard
                        text={`.exampleB3{
  background-color:white;
}
.example3 {
  animation: animation3 4s ease-in-out infinite;
  border:2px solid #0f172a;
  padding:0.4em;
}
@keyframes animation3 {
  0% {
    border-radius: 65% 35% 25% 75% / 65% 25% 75% 35%;
  }
  50% {
    border-radius: 28% 63% 72% 37% / 50% 70% 30% 50%;
  }
  100% {
    border-radius: 63% 37% 28% 72% / 63% 28% 72% 37%;
  }
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
                      {`.exampleB3{
  background-color:white;
}
.example3 {
  animation: animation3 4s ease-in-out infinite;
  border:2px solid #0f172a;
  padding:0.4em;
}
@keyframes animation3 {
  0% {
    border-radius: 65% 35% 25% 75% / 65% 25% 75% 35%;
  }
  50% {
    border-radius: 28% 63% 72% 37% / 50% 70% 30% 50%;
  }
  100% {
    border-radius: 63% 37% 28% 72% / 63% 28% 72% 37%;
  }
}`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      )}
    </>
  );
}
