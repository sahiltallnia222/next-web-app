import Head from "next/head";
import styles from "styles/style.module.css";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import CopyToClipboard from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { HiOutlineDuplicate } from "react-icons/hi";
import { TiDelete } from "react-icons/ti";
export default function Boxshadow() {
  const [shadowNo, setShadowNo] = useState(0);
  const [shadow, setShadow] = useState({
    boxShadow: "7px 10px 8px -7px #1F1E62",
    boxColor: "#ffffff",
    bgColor: "#EDEDED",
  });
  const [shadows, setShadows] = useState([
    {
      hOffset: 10,
      vOffset: 10,
      bRadius: 20,
      sRadius: 0,
      sOpacity: 1,
      sColor: "#1F1E62",
      sHexCode: "#1F1E62",
      inset: false,
    },
  ]);

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

  const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return "#" + n.slice(0, 6);
  };

  const addShadow = () => {
    const values = [...shadows];

    values.push({
      hOffset: 10,
      vOffset: 10,
      bRadius: 20,
      sRadius: 0,
      sOpacity: 1,
      sColor:randomHexColorCode(),
      sHexCode: randomHexColorCode(),
      inset: false,
    });
    setShadows(values);
    setShadowNo(shadows.length);
  };

  useEffect(() => {
    let boxShadow = "";
    shadows.forEach((shadow) => {
      boxShadow += `${shadow.hOffset}px ${shadow.vOffset}px ${
        shadow.bRadius
      }px ${shadow.sRadius}px ${shadow.sColor} ${
        shadow.inset ? "inset" : ""
      }, `;
    });
    setShadow({
      boxShadow: boxShadow.substring(0, boxShadow.length - 2),
      boxColor: shadow.boxColor,
      bgColor: shadow.bgColor,
    });
  }, [shadows]);
  const removeShadow = (index) => {
    if (shadowNo == shadows.length - 1) {
      setShadowNo(0);
      let values = [...shadows];
      values.splice(index, 1);
      setShadows(values);
    } else {
      let values = [...shadows];
      values.splice(index, 1);
      setShadows(values);
    }
  };

  return (
    <>
      <Head>
        <title>Box Shadow Generator</title>
      </Head>
      <div className="border-4">
        {/* center div ------------------------------------------------------------------- */}
        <div className="lg:w-[64rem] mx-auto w-full pt-3 border-2">
          <h1 className="text-3xl font-semibold mb-3 px-3">
            Box Shadow Generator
          </h1>

          <div className="w-full grid grid-cols-1 items-center md:grid-cols-2">
            <div
              className=" flex justify-center items-center h-[40vh] md:h-full"
              style={{ backgroundColor: shadow.bgColor }}
            >
              <div
                className="w-[80%] h-[80%] flex justify-center items-center"
                style={{
                  boxShadow: shadow.boxShadow,
                  backgroundColor: shadow.boxColor,
                }}
              >
                {/* BOX */}
              </div>
            </div>
            <div className=" font-semibold">
              <div className="px-4 py-2">
                <div className="flex items-center justify-between text-sm p-2">
                  <div>H-offset</div>
                  <div>{shadows[shadowNo].hOffset} px</div>
                </div>
                <div>
                  <input
                    type="range"
                    value={shadows[shadowNo].hOffset}
                    onChange={(e) => {
                      let values = [...shadows];
                      values[shadowNo].hOffset = e.target.value;
                      setShadows(values);
                    }}
                    min="-250"
                    max="250"
                    className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
                  />
                </div>
              </div>
              <div className="px-4 py-2">
                <div className="flex items-center justify-between text-sm p-2">
                  <div>V-offset</div>
                  <div>{shadows[shadowNo].vOffset} px</div>
                </div>
                <div>
                  <input
                    type="range"
                    value={shadows[shadowNo].vOffset}
                    onChange={(e) => {
                      let values = [...shadows];
                      values[shadowNo].vOffset = e.target.value;
                      setShadows(values);
                    }}
                    min="-250"
                    max="250"
                    className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
                  />
                </div>
              </div>
              <div className="px-4 py-2">
                <div className="flex items-center justify-between text-sm p-2">
                  <div>Blur radius</div>
                  <div>{shadows[shadowNo].bRadius} px</div>
                </div>
                <div>
                  <input
                    type="range"
                    value={shadows[shadowNo].bRadius}
                    onChange={(e) => {
                      let values = [...shadows];
                      values[shadowNo].bRadius = e.target.value;
                      setShadows(values);
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
                  <div>{shadows[shadowNo].sRadius} px</div>
                </div>
                <div>
                  <input
                    type="range"
                    value={shadows[shadowNo].sRadius}
                    min="-100"
                    max="100"
                    onChange={(e) => {
                      let values = [...shadows];
                      values[shadowNo].sRadius = e.target.value;
                      setShadows(values);
                    }}
                    className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
                  />
                </div>
              </div>
              <div className="px-4 py-2">
                <div className="flex items-center justify-between text-sm p-2">
                  <div>Shadow opacity</div>
                  <div>{shadows[shadowNo].sOpacity}</div>
                </div>
                <div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={shadows[shadowNo].sOpacity * 100}
                    onChange={(e) => {
                      console.log(e.target.value);
                      let values = [...shadows];
                      values[shadowNo].sOpacity = e.target.value / 100;
                      values[shadowNo].sColor = hexToRGB(
                        values[shadowNo].sHexCode,
                        e.target.value / 100
                      );
                      setShadows(values);
                    }}
                    className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
                  />
                </div>
              </div>

              {/* ---------------------------- */}
              <div className="px-4 py-2 flex flex-col gap-4">
                {/* ---------------------------- */}
                <div className="flex flex-row items-center justify-between">
                  <div className="flex justify-between w-1/3">
                    <span>Box Color </span>
                    <span>
                      <label
                        htmlFor="box-color"
                        className="border-2 border-black  px-3 py-0 rounded"
                        style={{ backgroundColor: `${shadow.boxColor}` }}
                      ></label>
                      <input
                        type="color"
                        id="box-color"
                        value={shadow.boxColor}
                        className="w-0 invisible"
                        onChange={(e) => {
                          let value = { ...shadow };
                          value.boxColor = e.target.value;
                          setShadow(value);
                        }}
                      />
                    </span>
                  </div>
                  <div className="flex justify-between w-1/2">
                    <span>Background Color </span>
                    <span>
                      <label
                        htmlFor="bg-color"
                        className="border-2 border-black  px-3 py-0 rounded"
                        style={{ backgroundColor: `${shadow.bgColor}` }}
                      ></label>
                      <input
                        type="color"
                        id="bg-color"
                        value={shadow.bgColor}
                        className="w-0 invisible"
                        onChange={(e) => {
                          let value = { ...shadow };
                          value.bgColor = e.target.value;
                          setShadow(value);
                        }}
                      />
                    </span>
                  </div>
                </div>
                {/* ------------------------ */}
                <div className="flex flex-row items-center justify-between">
                  <div className="w-1/3 flex justify-between">
                    <span>Shadow Color </span>
                    <span>
                      <label
                        htmlFor="shadow-color"
                        className="border-2 border-black px-3 py-0 rounded"
                        style={{
                          backgroundColor: `${shadows[shadowNo].sColor}`,
                        }}
                      ></label>
                      <input
                        type="color"
                        value={shadows[shadowNo].sColor}
                        id="shadow-color"
                        className="w-0 invisible"
                        onChange={(e) => {
                          let values = [...shadows];
                          values[shadowNo].sHexCode = e.target.value;
                          values[shadowNo].sColor = hexToRGB(
                            e.target.value,
                            values[shadowNo].sOpacity
                          );
                          setShadows(values);
                        }}
                      />
                    </span>
                  </div>
                  <div className="w-1/2 flex justify-between">
                    <span>Inset</span>
                    <span>
                      <label className="switch">
                        <input
                          type="checkbox"
                          checked={shadows[shadowNo].inset}
                          onChange={(e) => {
                            let values = [...shadows];
                            e.target.checked
                              ? (values[shadowNo].inset = true)
                              : (values[shadowNo].inset = false);
                            setShadows(values);
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
          </div>
          <div className="border-2 p-4">
            <h2 className="font-semibold text-2xl pb-3">
              Add multiple box shadows
            </h2>
            <div className="flex flex-wrap items-start gap-4">
              <div className="flex flex-wrap items-center gap-4">
                {shadows.map((shadow, index) => {
                  return (
                    <span
                      key={index}
                      className="cursor-pointer w-[3em] h-[3em] flex items-center justify-center relative"
                    >
                      {shadowNo != index && (
                        <span className="absolute top-[-0.6rem] right-[-0.6rem] cursor-pointer">
                          <TiDelete
                            color="red"
                            onClick={() => {
                              removeShadow(index);
                            }}
                            size={"1.4em"}
                          />
                        </span>
                      )}

                      <HiOutlineDuplicate
                        onClick={() => {
                          setShadowNo(index);
                        }}
                        size={"2.3em"}
                      />
                    </span>
                  );
                })}
                <span className="cursor-pointer">
                  <MdOutlineAddCircleOutline size={"2em"} onClick={addShadow} />
                </span>
              </div>
            </div>
          </div>
          <div className="w-full border-2 p-4">
            <SyntaxHighlighter language="css" style={docco}>
              {`box-shadow:${shadow.boxShadow}; \nbackground-color:${shadow.boxColor};  /* background color of inner box */ \nbackground-color:${shadow.bgColor};  /* background color of outer box (Paste this code in style of outer box.) */`}
            </SyntaxHighlighter>

            <CopyToClipboard
              text={`box-shadow:${shadow.boxShadow}; \nbackground-color:${shadow.boxColor};  /* background color of inner box */ \nbackground-color:${shadow.bgColor};  /* background color of outer box (Paste this code in style of outer box.) */`}
              className=" px-4 py-2 textinput mb-2 text-white font-semibold mt-4 hover:bg-white hover:text-[#5340ff] transition-all duration-500 border-[#5340ff] border bg-[#5340ff] "
            >
              <button onClick={codeCopyNotification}>Copy Code</button>
            </CopyToClipboard>
          </div>
          <div className="border p-4">
            <h2 className="text-2xl font-semibold pb-5">Box Shadow Examples</h2>
            <div className="grid lg:grid-cols-4 gap-10 md:grid-cols-2 grid-cols-1">
              <div
                className="h-[14rem] flex items-center justify-center"
                style={{ boxShadow: "0px 2px 8px 0px rgba(99, 99, 99, 0.25)" }}
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
                style={{
                  boxShadow:
                    "0px 1px 4px rgba(0, 0, 0, 0.1) ,0px 1px 2px rgba(0, 0, 0, 0.26)",
                }}
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
                style={{
                  boxShadow:
                    "0px 1px 3px rgba(0, 0, 0, 0.15) , 0px 1px 2px rgba(0, 0, 0, 0.3)",
                }}
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
                style={{
                  boxShadow:
                    "7px 10px 164px -14px rgba(27, 23, 222, 0.78) inset",
                  backgroundColor: "#ffffff",
                }}
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
                style={{
                  boxShadow: "7px 10px 22px -7px rgba(103, 225, 233, 1)",
                  backgroundColor: "#ffffff",
                }}
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
            <h2 className="text-2xl font-semibold pb-5">
              Box Shadow ( CSS Property )
            </h2>
          </div>
        </div>

        {/* center div ends here ------------------------------------------------------------------- */}
      </div>
    </>
  );
}
