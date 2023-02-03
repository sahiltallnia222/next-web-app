import Head from "next/head";
import styles from "styles/style.module.css";
import { useState } from "react";
import { toast } from "react-toastify";
import CopyToClipboard from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function Boxshadow() {
  const [horizontalOffset, setHorizontalOffset] = useState(7);
  const [verticalOffset, setVerticalOffset] = useState(10);
  const [blurRadius, setBlurRadius] = useState(22);
  const [spreadRadius, setSpreadRadius] = useState(-7);
  const [boxColor, setBoxColor] = useState("#ffffff");
  const [shadowColor, setShadowColor] = useState("#1F1E62");
  const [shadowHexColor, setShadowHexColor] = useState("#1F1E62");
  const [inset, setInset] = useState("");
  const [opacity, setOpacity] = useState(1);

  function hexToRGB(hex, alpha = 1) {
    var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);
    if (alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }
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
        <title>Box Shadow Generator</title>
      </Head>
      <div className="border-4">
        {/* center div ------------------------------------------------------------------- */}
        <div className="lg:w-[64rem] mx-auto w-full pt-3 border-2">
          <h1
            className="text-3xl font-semibold py-2 w-[95vw] md:w-96 border mx-auto text-center mb-5"
            style={{
              boxShadow: `${horizontalOffset}px ${verticalOffset}px ${blurRadius}px ${spreadRadius}px ${shadowColor} ${inset}`,
              backgroundColor: `${boxColor}`,
            }}
          >
            Box Shadow Generator
          </h1>

          <div className="w-full grid grid-cols-1 items-center md:grid-cols-2">
            <div className=" flex justify-center items-center h-[40vh] md:h-full">
              <div
                className=" w-[80%] h-[80%]  flex justify-center items-center"
                style={{
                  boxShadow: `${horizontalOffset}px ${verticalOffset}px ${blurRadius}px ${spreadRadius}px ${shadowColor} ${inset}`,
                  backgroundColor: `${boxColor}`,
                }}
              >
                Box
              </div>
            </div>
            <div className=" font-semibold">
              <div className="px-4 py-2">
                <div className="flex items-center justify-between text-sm p-2">
                  <div>H-offset</div>
                  <div>{horizontalOffset} px</div>
                </div>
                <div>
                  <input
                    type="range"
                    defaultValue={7}
                    onChange={(e) => {
                      setHorizontalOffset(e.target.value);
                    }}
                    min="-50"
                    max="50"
                    className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
                  />
                </div>
              </div>
              <div className="px-4 py-2">
                <div className="flex items-center justify-between text-sm p-2">
                  <div>V-offset</div>
                  <div>{verticalOffset} px</div>
                </div>
                <div>
                  <input
                    type="range"
                    defaultValue={10}
                    onChange={(e) => {
                      setVerticalOffset(e.target.value);
                    }}
                    min="-50"
                    max="50"
                    className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
                  />
                </div>
              </div>
              <div className="px-4 py-2">
                <div className="flex items-center justify-between text-sm p-2">
                  <div>Blur radius</div>
                  <div>{blurRadius} px</div>
                </div>
                <div>
                  <input
                    type="range"
                    defaultValue={22}
                    onChange={(e) => {
                      setBlurRadius(e.target.value);
                    }}
                    min="0"
                    max="300"
                    className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
                  />
                </div>
              </div>
              <div className="px-4 py-2">
                <div className="flex items-center justify-between text-sm p-2">
                  <div>Spread radius</div>
                  <div>{spreadRadius} px</div>
                </div>
                <div>
                  <input
                    type="range"
                    defaultValue={-7}
                    min="-100"
                    max="100"
                    onChange={(e) => {
                      setSpreadRadius(e.target.value);
                    }}
                    className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
                  />
                </div>
              </div>
              <div className="px-4 py-2">
                <div className="flex items-center justify-between text-sm p-2">
                  <div>Shadow opacity</div>
                  <div>{opacity}</div>
                </div>
                <div>
                  <input
                    type="range"
                    defaultValue={100}
                    min="1"
                    max="100"
                    onChange={(e) => {
                      console.log(e.target.value);
                      setOpacity(e.target.value / 100);
                      setShadowColor(
                        hexToRGB(shadowHexColor, e.target.value / 100)
                      );
                    }}
                    className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
                  />
                </div>
              </div>
              <div className="px-4 py-2 flex flex-col gap-4">
                <div className="w-1/3 flex justify-between">
                  <span>Box Color </span>
                  <span>
                    <label
                      htmlFor="box-color"
                      className="border-2 border-black  px-3 py-0 rounded"
                      style={{ backgroundColor: `${boxColor}` }}
                    ></label>
                    <input
                      type="color"
                      id="box-color"
                      defaultValue="#ffffff"
                      className="w-0 invisible"
                      onChange={(e) => {
                        setBoxColor(e.target.value);
                      }}
                    />
                  </span>
                </div>
                <div className="w-1/3 flex justify-between">
                  <span>Shadow Color </span>
                  <span>
                    <label
                      htmlFor="shadow-color"
                      className="border-2 border-black px-3 py-0 rounded"
                      style={{ backgroundColor: `${shadowColor}` }}
                    ></label>
                    <input
                      type="color"
                      defaultValue="#1F1E62"
                      id="shadow-color"
                      className="w-0 invisible"
                      onChange={(e) => {
                        setShadowHexColor(e.target.value);
                        setShadowColor(hexToRGB(e.target.value, opacity));
                      }}
                    />
                  </span>
                </div>
                <div className="w-1/3 flex justify-between">
                  <span>Inset</span>
                  <span>
                    <label className="switch">
                      <input
                        type="checkbox"
                        onChange={(e) => {
                          e.target.checked ? setInset("inset") : setInset("");
                        }}
                        className={styles.checkbox}
                      />
                      <div className={styles.slider}></div>
                    </label>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border-2 mt-4 p-4">
            <SyntaxHighlighter language="css" style={docco}>
              {/* pass in code here */}
              {`box-shadow:${horizontalOffset}px ${verticalOffset}px ${blurRadius}px ${spreadRadius}px ${shadowColor} ${inset}; \nbackground-color:${boxColor};`}
            </SyntaxHighlighter>

            <CopyToClipboard
              text={`box-shadow:${horizontalOffset}px ${verticalOffset}px ${blurRadius}px ${spreadRadius}px ${shadowColor} ${inset}; \n
              background-color:${boxColor};`}
              className=" px-4 py-2 textinput mb-2 text-white font-semibold mt-4 hover:bg-white hover:text-[#5340ff] transition-all duration-500 border-[#5340ff] border bg-[#5340ff] "
            >
              <button onClick={codeCopyNotification}>Copy Code</button>
            </CopyToClipboard>
          </div>
          <div className="border p-4">
            <h2 className="text-2xl font-semibold pb-5">Box Shadows</h2>
            <div className="grid lg:grid-cols-4 gap-10 md:grid-cols-2 grid-cols-1">

              <div
                className="h-[14rem] flex items-center justify-center"
                style={{ boxShadow: "0px 2px 8px 0px rgba(99, 99, 99, 0.25);" }}
              >
                <CopyToClipboard
                  text={`box-shadow:0px 2px 8px 0px rgba(99, 99, 99, 0.25);`}
                  className="border p-2 text-sm font-semibold"
                >
                  <button onClick={codeCopyNotification}>COPY CODE</button>
                </CopyToClipboard>
              </div>

              <div
                className="h-[14rem] flex items-center justify-center"
                style={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)" }}
              >
                <CopyToClipboard
                  text={`box-shadow:0px 4px 12px rgba(0, 0, 0, 0.3);`}
                  className="border p-2 text-sm font-semibold"
                >
                  <button onClick={codeCopyNotification}>COPY CODE</button>
                </CopyToClipboard>
              </div>

              <div
                className="h-[14rem] flex items-center justify-center"
                style={{ boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1) ,0px 1px 2px rgba(0, 0, 0, 0.26)" }}
              >
                <CopyToClipboard
                  text={`box-shadow:0px 1px 4px  rgba(0, 0, 0, 0.1) ,0px 1px 2px rgba(0, 0, 0, 0.26);`}
                  className="border p-2 text-sm font-semibold"
                >
                  <button onClick={codeCopyNotification}>COPY CODE</button>
                </CopyToClipboard>
              </div>

              <div
                className="h-[14rem] flex items-center justify-center"
                style={{ boxShadow: "0px 8px 25px rgba(150, 160, 160, 0.25)" }}
              >
                <CopyToClipboard
                  text={`box-shadow:0px 8px 25px rgba(150, 160, 160, 0.25);`}
                  className="border p-2 text-sm font-semibold"
                >
                  <button onClick={codeCopyNotification}>COPY CODE</button>
                </CopyToClipboard>
              </div>

              <div
                className="h-[14rem] flex items-center justify-center"
                style={{ boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.15) , 0px 1px 2px rgba(0, 0, 0, 0.3)" }}
              >
                <CopyToClipboard
                  text={`box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15) , 0px 1px 2px rgba(0, 0, 0, 0.3);`}
                  className="border p-2 text-sm font-semibold"
                >
                  <button onClick={codeCopyNotification}>COPY CODE</button>
                </CopyToClipboard>
              </div>

              <div
                className="h-[14rem] flex items-center justify-center"
                style={{ boxShadow: "7px 10px 164px -14px rgba(27, 23, 222, 0.78) inset",backgroundColor:'#ffffff' }}
              >
                <CopyToClipboard
                  text={`box-shadow:7px 10px 164px -14px rgba(27, 23, 222, 0.78) inset;\nbackground-color:#ffffff;`}
                  className="border p-2 text-sm font-semibold"
                >
                  <button onClick={codeCopyNotification}>COPY CODE</button>
                </CopyToClipboard>
              </div>

              <div
                className="h-[14rem] flex items-center justify-center"
                style={{ boxShadow: "7px 10px 22px -7px rgba(103, 225, 233, 1)",backgroundColor:'#ffffff' }}
              >
                <CopyToClipboard
                  text={`box-shadow:7px 10px 22px -7px rgba(103, 225, 233, 1) ;\nbackground-color:#ffffff;`}
                  className="border p-2 text-sm font-semibold"
                >
                  <button onClick={codeCopyNotification}>COPY CODE</button>
                </CopyToClipboard>
              </div>

              <div
                className="h-[14rem] flex items-center justify-center"
                style={{ boxShadow: "0px 3px 3px 0px rgba(0, 0, 0, 0.2)" }}
              >
                <CopyToClipboard
                  text={`box-shadow:0px 3px 3px 0px rgba(0, 0, 0, 0.2) ;`}
                  className="border p-2 text-sm font-semibold"
                >
                  <button onClick={codeCopyNotification}>COPY CODE</button>
                </CopyToClipboard>
              </div>

            </div>
          </div>
            <div className="border p-4">
            <h2 className="text-2xl font-semibold pb-5">Box Shadow CSS Property</h2>
            </div>
        </div>

        {/* center div ends here ------------------------------------------------------------------- */}
      </div>
    </>
  );
}
