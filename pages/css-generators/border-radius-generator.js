import Head from "next/head";
import { useRef, useEffect, useState } from "react";
import Draggable from "react-draggable";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";

export default function BorderRadiusGenerator() {
  const borderBoxParentRef = useRef();
  const borderBoxRef = useRef();
  const leftYTRef = useRef();
  const leftYBRef = useRef();
  const rightYTRef = useRef();
  const rightYBRef = useRef();
  const topXLRef = useRef();
  const bottomXLRef = useRef();
  const topXRRef = useRef();
  const bottomXRRef = useRef();
  const [dotMargin, setDotMargin] = useState(0);
  const [borderStyle, setBorderStyle] = useState("solid");
  const [borderWidth, setBorderWidth] = useState(4);
  const [borderColor, setBorderColor] = useState("#f98234");
  const [bgColor, setbgColor] = useState("#f98234");
  const [borderSide, setBorderSide] = useState({
    top: true,
    bottom: true,
    left: true,
    right: true,
  });
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
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
  // const [borderRadius,setBorderRadius]=useState(``);
  const handleDrag = (e, data, pos, axis) => {
    let values = { ...radiusValues };
    values[pos] = Math.abs(parseInt((data[axis] * 100) / bounds.bottom));
    setRadiusValues(values);
  };

  const codeCopyNotification = () => {
    toast.success("Code copied successfully !", {
      position: "top-center",
      autoClose: 3000,
      theme: "light",
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (borderBoxParentRef.current && borderBoxRef.current) {
        const parentBoxHeight = borderBoxParentRef.current.clientHeight;
        const height = borderBoxRef.current.clientHeight;
        setDotMargin((parentBoxHeight - height) / 2);
        let values = { ...bounds };
        values.bottom = height - 34;
        values.top = -height + 34;
        values.right = height - 34;
        values.left = -height + 34;
        setBounds(values);
        values = { ...radiusValues };

        values.YLT = Math.abs(parseInt((50 * 100) / (height - 34)));
        values.YLB = Math.abs(parseInt((50 * 100) / (height - 34)));
        values.YRT = Math.abs(parseInt((50 * 100) / (height - 34)));
        values.YRB = Math.abs(parseInt((50 * 100) / (height - 34)));
        values.XTL = Math.abs(parseInt((50 * 100) / (height - 34)));
        values.XTR = Math.abs(parseInt((50 * 100) / (height - 34)));
        values.XBL = Math.abs(parseInt((50 * 100) / (height - 34)));
        values.XBR = Math.abs(parseInt((50 * 100) / (height - 34)));
        setRadiusValues(values);
        // setBorderRadius(`${Math.abs(parseInt((50*100)/(bounds.bottom)))}% ${radiusValues.XTR}% ${radiusValues.XBR}% ${radiusValues.XBL}% / ${radiusValues.YLT}% ${radiusValues.YRT}% ${radiusValues.YRB}% ${radiusValues.YLB}%`)
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  let borderRadius = `${radiusValues.XTL}% ${radiusValues.XTR}% ${radiusValues.XBR}% ${radiusValues.XBL}% / ${radiusValues.YLT}% ${radiusValues.YRT}% ${radiusValues.YRB}% ${radiusValues.YLB}%`;
  return (
    <>
      <Head>
        <title>Border radius</title>
      </Head>
      {borderBoxParentRef && (
        <div>
          <div className="lg:w-[64rem] mx-auto w-full ">
            <h1 className="text-3xl md:text-5xl text-blue-500 text-center font-semibold pb-5  pt-3">
              Box Shadow Generators
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-6 dark:bg-[#0f172a]">
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
                      handleDrag(e, data, "YLT", "y");
                    }}
                    axis="y"
                    nodeRef={leftYTRef}
                    defaultPosition={{ x: 0, y: 50 }}
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
                      handleDrag(e, data, "YRT", "y");
                    }}
                    axis="y"
                    nodeRef={rightYTRef}
                    defaultPosition={{ x: 0, y: 50 }}
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
                      handleDrag(e, data, "YLB", "y");
                    }}
                    axis="y"
                    nodeRef={leftYBRef}
                    defaultPosition={{ x: 0, y: -50 }}
                    bounds={{ left: 0, top: bounds.top, right: 0, bottom: 0 }}
                    scale={1}
                  >
                    <div
                      ref={leftYBRef}
                      className="absolute cursor-pointer left-[-17px] flex items-center justify-center"
                      style={{ bottom: `${dotMargin}px` }}
                    >
                      <VscDebugBreakpointLogUnverified size={"34px"} />
                    </div>
                  </Draggable>
                  <Draggable
                    onDrag={(e, data) => {
                      handleDrag(e, data, "YRB", "y");
                    }}
                    axis="y"
                    nodeRef={rightYBRef}
                    defaultPosition={{ x: 0, y: -50 }}
                    bounds={{ left: 0, top: bounds.top, right: 0, bottom: 0 }}
                    scale={1}
                  >
                    <div
                      ref={rightYBRef}
                      className="absolute cursor-pointer right-[-17px] flex items-center justify-center"
                      style={{ bottom: `${dotMargin}px` }}
                    >
                      <VscDebugBreakpointLogUnverified size={"34px"} />
                    </div>
                  </Draggable>

                  <Draggable
                    onDrag={(e, data) => {
                      handleDrag(e, data, "XTL", "x");
                    }}
                    axis="x"
                    nodeRef={topXLRef}
                    defaultPosition={{ x: 50, y: 0 }}
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
                      handleDrag(e, data, "XBL", "x");
                    }}
                    axis="x"
                    nodeRef={bottomXLRef}
                    defaultPosition={{ x: 50, y: 0 }}
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
                  <Draggable
                    onDrag={(e, data) => {
                      handleDrag(e, data, "XTR", "x");
                    }}
                    axis="x"
                    nodeRef={topXRRef}
                    defaultPosition={{ x: -50, y: 0 }}
                    bounds={{ left: bounds.left, top: 0, right: 0, bottom: 0 }}
                    scale={1}
                  >
                    <div
                      ref={topXRRef}
                      className="absolute cursor-pointer top-[-17px] flex items-center justify-center"
                      style={{ right: `${dotMargin}px` }}
                    >
                      <VscDebugBreakpointLogUnverified size={"34px"} />
                    </div>
                  </Draggable>
                  <Draggable
                    onDrag={(e, data) => {
                      handleDrag(e, data, "XBR", "x");
                    }}
                    axis="x"
                    nodeRef={bottomXRRef}
                    defaultPosition={{ x: -50, y: 0 }}
                    bounds={{ left: bounds.left, top: 0, right: 0, bottom: 0 }}
                    scale={1}
                  >
                    <div
                      ref={bottomXRRef}
                      className="absolute cursor-pointer  bottom-[-17px] flex items-center justify-center"
                      style={{ right: `${dotMargin}px` }}
                    >
                      <VscDebugBreakpointLogUnverified size={"34px"} />
                    </div>
                  </Draggable>
                </div>
              </div>
              {/* right side */}
              <div className="">
                {/* border style */}
                <div className="  border-gray-200 cursor-pointer block w-full dark:border-none dark:bg-[#0f172a] dark:placeholder-gray-400 dark:text-white outline-none">
                  <label
                    htmlFor="border-style"
                    className="block font-semibold mb-3 text-gray-900 dark:text-white"
                  >
                    Border style
                  </label>
                  <select
                    id="border-style"
                    defaultValue={borderStyle}
                    onChange={(e) => {
                      setBorderStyle(e.target.value);
                    }}
                    className="p-2.5 w-full dark:text-white outline-none text-sm block dark:bg-[#1d2537] cursor-pointer dark:border-none border-gray-200 border"
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
                  <div className="flex font-semibold pt-4 items-center justify-between dark:text-white">
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
                      className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex font-semibold justify-between items-center w-full md:w-1/2 mt-3 dark:text-white">
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
                  <div className="flex font-semibold justify-between items-center w-full md:w-1/2 dark:text-white">
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
            <p className="font-semibold text-xl pb-1">Generated code</p>
            <SyntaxHighlighter language="css" style={docco}>
              {`border-radius:${borderRadius};\nborder-style:${borderStyle};\nborder-width:${borderWidth}px;\nborder-color:${borderColor};\nbackground-color:${bgColor};`}
            </SyntaxHighlighter>

            <CopyToClipboard
              text={`border-radius:${borderRadius};
border-style:${borderStyle};
border-width:${borderWidth}px;
border-color:${borderColor}
background-color:${bgColor};`}
              className=" px-4 py-2 ml-2 text-white font-semibold mt-4 dark:hover:bg-white dark:hover:text-blue-500 transition-all duration-500 border-blue-500 bg-blue-500 "
            >
              <button onClick={codeCopyNotification}>Copy Code</button>
            </CopyToClipboard>
          </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
