import Head from "next/head";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import CopyToClipboard from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { TbBoxMultiple } from "react-icons/tb";
import { TiDelete } from "react-icons/ti";
import { FaRegCopy } from "react-icons/fa";
import styles from "styles/style.module.css";
import {RxReset} from 'react-icons/rx'


export default function Textshadow() {
  const [shadowNo, setShadowNo] = useState(0);
//   shadow contains all the properties like text-shadow color background color, text shadow can be multiple
  const [shadow, setShadow] = useState({
    textShadow: "7px 10px 8px #1F1E62",
    textColor: "#000000",
    bgColor: "#fafafa",
    textSize:3
  });
//   shadows contains only shadows of box
  const [shadows, setShadows] = useState([]);


  const handleGenReset=()=>{
    let values=[{
      hOffset: 7,
      vOffset: 10,
      bRadius: 8,
      sOpacity: 1,
      sColor: "#1F1E62",
      sHexCode: "#1F1E62",
    }]
    setShadow({
      textShadow: "7px 10px 8px #1F1E62",
      textColor: "#000000",
      bgColor: "#fafafa",
      textSize:3
    })
    setShadowNo(0)
    localStorage.setItem('text-shadow-generator',JSON.stringify(values))
    setShadows(values)
  }

  useEffect(()=>{
    if(window!=undefined && localStorage.getItem('text-shadow-generator') && JSON.parse(localStorage.getItem('text-shadow-generator')).length>0){
      setShadows(JSON.parse(localStorage.getItem('text-shadow-generator')))
    }
    else{
      let values=[{
        hOffset: 7,
        vOffset: 10,
        bRadius: 8,
        sOpacity: 1,
        sColor: "#1F1E62",
        sHexCode: "#1F1E62",
      }]
      localStorage.setItem('text-shadow-generator',JSON.stringify(values))
      setShadows(values)
    }
},[])


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

  const addTextShadow = () => {
    const values = [...shadows];
    values.push({
      hOffset: 7,
      vOffset: 10,
      bRadius: 8,
      sOpacity: 1,
      sColor: randomHexColorCode(),
      sHexCode: randomHexColorCode()
    });
    setShadows(values);
    setShadowNo(shadows.length);
  };

  useEffect(() => {
    let textShadow = "";
    shadows.forEach((shadow) => {
      textShadow += `${shadow.hOffset}px ${shadow.vOffset}px ${
        shadow.bRadius
      }px ${shadow.sColor}, `;
    });
    setShadow({
      textShadow: textShadow.substring(0, textShadow.length - 2),
      textColor: shadow.textColor,
      bgColor: shadow.bgColor,
      textSize:shadow.textSize
    });
    if(shadows.length>0){localStorage.setItem('text-shadow-generator',JSON.stringify(shadows))}
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
        <title>Text Shadow Generator</title>
      </Head>
      <div>
        {/* center div ------------------------------------------------------------------- */}
       { shadows.length>0 && <div className="lg:w-[64rem] mx-auto w-full">
          <h1 className={`md:text-5xl text-4xl text-blue-500 text-center font-semibold pb-5  pt-3 ${styles.textGrad}`}>
            Text Shadow Generator
          </h1>

          <div className="w-full grid grid-cols-1 items-center md:grid-cols-2 p-4 dark:text-white bg-gray-200 dark:bg-[#1d2537]">
            {/* Left side of shadow generator. */}
            <div
              className=" flex justify-center items-center h-[40vh] md:h-full"
              style={{ backgroundColor: shadow.bgColor,textShadow:shadow.textShadow,color:shadow.textColor }}
            >
            <p className="text-6xl text-center font-semibold" style={{fontSize:shadow.textSize+'rem'}}>Text Shadow</p>
            </div>

            {/* End of left side of shadow generator and start of right side. */}

            <div className="font-semibold">
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
                    className="w-full h-1  rounded-md appearance-none cursor-pointer"
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
                    className="w-full h-1  rounded-md appearance-none cursor-pointer"
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
                    max="25"
                    className="w-full h-1  rounded-md appearance-none cursor-pointer"
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
                    className="w-full h-1  rounded-md appearance-none cursor-pointer"
                  />
                </div>
              </div>

              <div className="px-4 py-2">
                <div className="flex items-center justify-between text-sm p-2">
                  <div>Text size</div>
                  <div>{shadow.textSize} rem</div>
                </div>
                <div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step='0.1'
                    value={shadow.textSize}
                    onChange={(e)=>{
                        let value={...shadow}
                        value.textSize=e.target.value
                        setShadow(value)
                    }}
                    className="w-full h-1  rounded-md appearance-none cursor-pointer"
                  />
                </div>
              </div>


              <div className="px-4 py-2 flex flex-col gap-4">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex justify-between w-1/3">
                    <span>Text Color </span>
                    <span className="flex items-center">
                      <label
                        htmlFor="box-color"
                        className="border-2 border-black  px-3 py-3 rounded"
                        style={{ backgroundColor: `${shadow.textColor}` }}
                      ></label>
                      <input
                        type="color"
                        id="box-color"
                        value={shadow.textColor}
                        className="w-0 invisible"
                        onChange={(e) => {
                          let value = { ...shadow };
                          value.textColor = e.target.value;
                          setShadow(value);
                        }}
                      />
                    </span>
                  </div>

                  <div className="flex justify-between items-center w-1/2">
                    <span>Background Color </span>
                    <span className="flex items-center">
                      <label
                        htmlFor="bg-color"
                        className="border-2 border-black  px-3 py-3 rounded"
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

                <div className="flex flex-row items-center justify-between">
                  <div className="w-1/3 flex justify-between">
                    <span>Shadow Color </span>
                    <span className="flex items-center">
                      <label
                        htmlFor={`shadow-color-${shadowNo}}`}
                        className="border-2 border-black px-3 py-3 rounded"
                        style={{
                          backgroundColor: `${shadows[shadowNo].sColor}`,
                        }}
                      ></label>
                      <input
                        type="color"
                        value={shadows[shadowNo].sColor}
                        id={`shadow-color-${shadowNo}}`}
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
                </div>
              </div>
              <div className="px-3">
              <button onClick={handleGenReset} className="mt-4 px-4 py-2 text-white flex items-center justify-between gap-2 font-semibold dark:hover:bg-blue-600 transition-all duration-300 border-blue-500 bg-blue-500 rounded-lg text-sm">
                  <span>Reset</span>
                  <span><RxReset /></span>
                </button>
              </div>
            </div>
            {/* End of right side of shadow generator. */}
          </div>

          {/* End of 2 boxes of box shadow generator */}
          {/* Multiple shadow box */}
          <div className="p-4 dark:text-white dark:bg-[#1d2537] bg-gray-200 ">
            <h2 className="font-medium text-lg py-3">
              Add multiple text shadows
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

                      <TbBoxMultiple
                        onClick={() => {
                          setShadowNo(index);
                        }}
                        size={"2.3em"}
                      />
                    </span>
                  );
                })}
                <span className="cursor-pointer">
                  <MdOutlineAddCircleOutline size={"2em"} onClick={addTextShadow} />
                </span>
              </div>
            </div>
          </div>

          {/* End of multiple shadow section */}
          {/* Code section */}
          <div className="w-full p-4 dark:text-white dark:bg-[#1d2537] bg-gray-200  mt-4">
          <div className="flex items-center justify-between mb-3">
                <p className="font-medium text-lg py-2">Generated CSS code</p>
                <CopyToClipboard
              text={`text-shadow:${shadow.textShadow};\ncolor:${shadow.textColor};\nbackground-color:${shadow.bgColor}\nfont-size:${shadow.textSize}rem;`}
              className=" px-4 py-2 text-white flex items-center justify-between gap-2 font-semibold dark:hover:bg-blue-600 transition-all duration-300 border-blue-500 bg-blue-500 rounded-lg text-sm"
            >
              <button onClick={codeCopyNotification}> <span>Copy</span><span><FaRegCopy/></span></button>
            </CopyToClipboard>
          </div>
            <SyntaxHighlighter language="css" style={docco}>
              {`text-shadow:${shadow.textShadow}; \ncolor:${shadow.textColor};\nbackground-color:${shadow.bgColor};\nfont-size:${shadow.textSize}rem`}
            </SyntaxHighlighter>
          </div>
          <div className="w-full p-4 dark:text-white dark:bg-[#1d2537] bg-gray-200 ">
          <div className="flex items-center justify-between mb-3">
                <p className="font-medium text-lg py-2">HTML code</p>
                <CopyToClipboard
              text={`text-shadow:${shadow.textShadow};\ncolor:${shadow.textColor};\nbackground-color:${shadow.bgColor}\nfont-size:${shadow.textSize}rem;`}
              className=" px-4 py-2 text-white flex items-center justify-between gap-2 font-semibold dark:hover:bg-blue-600 transition-all duration-300 border-blue-500 bg-blue-500 rounded-lg text-sm"
            >
              <button onClick={codeCopyNotification}> <span>Copy</span><span><FaRegCopy/></span></button>
            </CopyToClipboard>
          </div>
            <SyntaxHighlighter language="css" style={docco}>
              {`text-shadow:${shadow.textShadow}; \ncolor:${shadow.textColor};\nbackground-color:${shadow.bgColor};\nfont-size:${shadow.textSize}rem`}
            </SyntaxHighlighter>
          </div>
          {/* End of code section */}
        </div>}

        {/* center div ends here ------------------------------------------------------------------- */}
      </div>
    </>
  );
}
