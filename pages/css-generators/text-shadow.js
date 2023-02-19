import Head from "next/head";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import CopyToClipboard from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { TbBoxMultiple } from "react-icons/tb";
import { TiDelete } from "react-icons/ti";
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
  const [shadows, setShadows] = useState([
    {
      hOffset: 6,
      vOffset: 2,
      bRadius: 4,
      sOpacity: 1,
      sColor: "#1F1E62",
      sHexCode: "#1F1E62",
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

  const addTextShadow = () => {
    const values = [...shadows];
    values.push({
      hOffset: 6,
      vOffset: 2,
      bRadius: 4,
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
        <div className="lg:w-[64rem] mx-auto w-full">
          <h1 className="text-3xl md:text-5xl text-blue-500 text-center font-semibold pb-5  pt-3">
            Text Shadow Generators
          </h1>

          <div className="w-full grid grid-cols-1 items-center md:grid-cols-2 p-4 dark:text-white dark:bg-[#0f172a]">
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
                    max="25"
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
                    className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
                  />
                </div>
              </div>


              <div className="px-4 py-2 flex flex-col gap-4">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex justify-between w-1/3">
                    <span>Text Color </span>
                    <span>
                      <label
                        htmlFor="box-color"
                        className="border-2 border-black  px-3 py-0 rounded"
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
                </div>
              </div>
            </div>
            {/* End of right side of shadow generator. */}
          </div>

          {/* End of 2 boxes of box shadow generator */}
          {/* Multiple shadow box */}
          <div className="p-4 dark:text-white">
            <h2 className="font-semibold text-2xl py-3">
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
          <div className="w-full p-4 dark:text-white">
            <p className="font-semibold text-2xl py-2">Generated code</p>
            <SyntaxHighlighter language="css" style={docco}>
              {`text-shadow:${shadow.textShadow}; \ncolor:${shadow.textColor};\nbackground-color:${shadow.bgColor};\nfont-size:${shadow.textSize}rem`}
            </SyntaxHighlighter>

            <CopyToClipboard
              text={`text-shadow:${shadow.textShadow};\ncolor:${shadow.textColor};\nbackground-color:${shadow.bgColor}\nfont-size:${shadow.textSize}rem;`}
              className=" px-4 py-2 ml-2 text-white font-semibold mt-4 dark:hover:bg-white dark:hover:text-blue-500 transition-all duration-500 border-blue-500 bg-blue-500 "
            >
              <button onClick={codeCopyNotification}>Copy Code</button>
            </CopyToClipboard>
          </div>
          {/* End of code section */}

          {/* Box shadow examples */}
          <div className="p-4 pb-7">
            <h2 className="text-2xl font-semibold pb-3 dark:text-white ">
              Box Shadow Examples
            </h2>
            <div className="grid lg:grid-cols-4 gap-10 p-4 md:grid-cols-2 grid-cols-1 bg-white">
              <div
                className="h-[14rem] flex items-center justify-center bg-white"
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
                className="h-[14rem] flex items-center justify-center bg-white"
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
                className="h-[14rem] flex items-center justify-center bg-white"
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
                className="h-[14rem] flex items-center justify-center bg-white"
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
                className="h-[14rem] flex items-center justify-center bg-white"
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
                className="h-[14rem] flex items-center justify-center bg-white"
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
                className="h-[14rem] flex items-center justify-center bg-white"
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
                className="h-[14rem] flex items-center justify-center bg-white"
                style={{ boxShadow: "0px 3px 3px 0px rgba(0, 0, 0, 0.2)" }}
              >
                <CopyToClipboard
                  text={`box-shadow:0px 3px 3px 0px rgba(0, 0, 0, 0.2) ;`}
                  className="border p-2 text-sm font-semibold"
                >
                  <button onClick={codeCopyNotification}>COPY CODE</button>
                </CopyToClipboard>
              </div>

              <div
                className="h-[14rem] flex items-center justify-center bg-white"
                style={{
                  boxShadow:
                    "-41px 41px 0px -30px rgba(255, 255, 255, 1) , 41px -41px 0px -30px rgba(255, 255, 255, 1) , 10px 10px 0px 0px rgba(56, 104, 214, 1) , -10px -10px 0px 0px rgba(56, 104, 214, 1)",
                }}
              >
                <CopyToClipboard
                  text={`box-shadow:-41px 41px 0px -30px rgba(255, 255, 255, 1) , 41px -41px 0px -30px rgba(255, 255, 255, 1) , 10px 10px 0px 0px rgba(56, 104, 214, 1) , -10px -10px 0px 0px rgba(56, 104, 214, 1);`}
                  className="border p-2 text-sm font-semibold"
                >
                  <button onClick={codeCopyNotification}>COPY CODE</button>
                </CopyToClipboard>
              </div>

              <div
                className="h-[14rem] flex items-center justify-center bg-white"
                style={{
                  boxShadow:
                    "0px 0px 0px 7px #1F1E62 , 0px 0px 0px 14px #ec060f",
                }}
              >
                <CopyToClipboard
                  text={`box-shadow:0px 0px 0px 7px #1F1E62 , 0px 0px 0px 14px #ec060f;`}
                  className="border p-2 text-sm font-semibold"
                >
                  <button onClick={codeCopyNotification}>COPY CODE</button>
                </CopyToClipboard>
              </div>

              <div
                className="h-[14rem] flex items-center justify-center bg-white"
                style={{
                  boxShadow:
                    "-85px 85px 0px -75px #1F1E62 , 85px -85px 0px -75px #de6232 , 10px 10px 0px 0px #3b8676 , -10px -10px 0px 0px rgba(0, 145, 255, 1)",
                }}
              >
                <CopyToClipboard
                  text={`box-shadow:-85px 85px 0px -75px #1F1E62 , 85px -85px 0px -75px #de6232 , 10px 10px 0px 0px #3b8676 , -10px -10px 0px 0px rgba(0, 145, 255, 1);`}
                  className="border p-2 text-sm font-semibold"
                >
                  <button onClick={codeCopyNotification}>COPY CODE</button>
                </CopyToClipboard>
              </div>

              <div
                className="h-[14rem] flex items-center justify-center bg-white"
                style={{
                  boxShadow:
                    "10px 10px 23px -13px rgba(0, 0, 0, 1) , -8px -8px 15px -8px rgba(255, 255, 255, 1)",
                  backgroundColor: "#4c4ad9",
                }}
              >
                <CopyToClipboard
                  text={`box-shadow:10px 10px 23px -13px rgba(0, 0, 0, 1) , -8px -8px 15px -8px rgba(255, 255, 255, 1);\n background-color:#4c4ad9;`}
                  className="border p-2 text-sm dark:text-white font-semibold"
                >
                  <button onClick={codeCopyNotification}>COPY CODE</button>
                </CopyToClipboard>
              </div>
            </div>
          </div>

          {/* Box shadow examples section ends here */}

          {/* Explanation of box shadow starts from here */}
          <div className="p-4 dark:text-white">
            <h2 className="text-3xl font-semibold pb-5 pt-3">
              Box Shadow Explanation
            </h2>
            <p className="text-lg  space-x-2 tracking-wide leading-loose">
              Box Shadow is a CSS property to create shadow effect to any
              element of webpage. We can provide multiple shadow effects (to the
              same element of webpage) with the help of box shadow in CSS.
            </p>
            <p className="text-2xl font-semibold my-4">
              Syntax of box shadow property
            </p>
            <SyntaxHighlighter language="css" style={docco}>
              box-shadow: h-offset v-offset blur-radius spread-radius color
              inset;
            </SyntaxHighlighter>

            <p className="text-2xl font-semibold my-4">Horizontal Offset</p>
            <p className="text-lg  space-x-2 tracking-wide leading-loose">
              Horizontal offset put the shadow in left and right side of the
              element. Positive value to Horizontal offset (h-offset) will shift
              the shadow to right side and negative value will shift the shadow
              to the left side of the element.
            </p>
            <p className="text-xl font-semibold my-3">Example</p>
            <p className="text-lg  space-x-2 tracking-wider py-3">
              Postive value to h-offset
            </p>
            <SyntaxHighlighter language="css" style={docco}>
              box-shadow:20px 0px 0px 0px black;
            </SyntaxHighlighter>
            <div className="bg-white p-5 mt-2">
              <div
                className="md:w-[45%] w-[70%] mx-auto h-32 border-2 bg-white my-8"
                style={{ boxShadow: "20px 0px 0px 0px black" }}
              ></div>
            </div>
            <p className="text-lg  space-x-2 tracking-wider py-3">
              Negative value to h-offset
            </p>
            <SyntaxHighlighter language="css" style={docco}>
              box-shadow:-20px 0px 0px 0px black;
            </SyntaxHighlighter>
            <div className="bg-white p-5 mt-2">
              <div
                className="md:w-[45%] w-[70%] mx-auto h-32 border-2 bg-white my-8"
                style={{ boxShadow: "-20px 0px 0px 0px black" }}
              ></div>
            </div>

            <p className="text-2xl font-semibold my-4">Vertical Offset</p>
            <p className="text-lg  space-x-2 tracking-wide leading-loose">
              Vertical offset put the shadow in up and down direction of the
              element. Positive value to vertical offset (v-offset) will shift
              the shadow to down side and negative value will shift the shadow
              to the up side of the element.
            </p>
            <p className="text-xl font-semibold my-3">Example</p>
            <p className="text-lg  space-x-2 tracking-wider py-3">
              Postive value to v-offset
            </p>
            <SyntaxHighlighter language="css" style={docco}>
              box-shadow:0px 20px 0px 0px black;
            </SyntaxHighlighter>
            <div className="bg-white p-5 mt-2">
              <div
                className="md:w-[45%] w-[70%] mx-auto h-32 border-2 bg-white my-8"
                style={{ boxShadow: "0px 20px 0px 0px black" }}
              ></div>
            </div>
            <p className="text-lg  space-x-2 tracking-wider py-3">
              Negative value to v-offset
            </p>
            <SyntaxHighlighter language="css" style={docco}>
              box-shadow:0px -20px 0px 0px black;
            </SyntaxHighlighter>

            <div className="bg-white p-5 mt-2">
              <div
                className="md:w-[45%] w-[70%] mx-auto h-32 border-2 bg-white my-8"
                style={{ boxShadow: "0px -20px 0px 0px black" }}
              ></div>
            </div>

            <p className="text-2xl font-semibold my-4">Blur Radius</p>
            <p className="text-lg  space-x-2 tracking-wide leading-loose">
              Blur radius is used to control the sharpness of shadow. In the 4
              examples given above, blur radius is 0 means that shadow edges are
              sharp. As we increase the value of blur radius it will make the
              shadow more blurry.
            </p>
            <p className="text-xl font-semibold my-3">Example</p>
            <p className="text-lg  space-x-2 tracking-wider py-3">
              Blur value (3rd property) along with x-offset and y-offset values.
            </p>
            <SyntaxHighlighter language="css" style={docco}>
              box-shadow:7px 10px 10px 0px black;
            </SyntaxHighlighter>
            <div className="bg-white p-5 mt-2">
              <div
                className="md:w-[45%] w-[70%] mx-auto h-32 border-2 bg-white my-8"
                style={{ boxShadow: "7px 10px 10px 0px black" }}
              ></div>
            </div>
            <p className="text-2xl font-semibold my-4">
              Spread Radius (optional)
            </p>
            <p className="text-lg  space-x-2 tracking-wide leading-loose">
              Spread radius is used to control the size of the shadow. Postive
              value will increase the size of shadow of element
              and negative value will decrease the size of shadow.
            </p>
            <p className="text-xl font-semibold my-3">Example</p>
            <p className="text-lg  space-x-2 tracking-wider py-3">
              Positive value to Spread Radius (4rd property)
            </p>
            <SyntaxHighlighter language="css" style={docco}>
              box-shadow:7px 10px 10px 20px black;
            </SyntaxHighlighter>
            <div className="bg-white p-5 mt-2">
              <div
                className="md:w-[45%] w-[70%] mx-auto h-32 border-2 bg-white my-8"
                style={{ boxShadow: "7px 10px 10px 20px black" }}
              ></div>
            </div>
            <p className="text-lg  space-x-2 tracking-wider py-3">
              Negative value to Spread Radius (4rd property)
            </p>
            <SyntaxHighlighter language="css" style={docco}>
              box-shadow:7px 10px 10px -4px black;
            </SyntaxHighlighter>

            <div className="bg-white p-5 mt-2">
              <div
                className="md:w-[45%] w-[70%] mx-auto h-32 border-2 bg-white my-8"
                style={{ boxShadow: "7px 10px 10px -4px black" }}
              ></div>
            </div>

            <p className="text-2xl font-semibold my-4">Color</p>
            <p className="text-lg  space-x-2 tracking-wide leading-loose">
              Color property of box shadow is used to provide the color to the
              shadow of the element. We can provide color in any type like hex
              code, name of color, rgba or hsla.{" "}
            </p>
            <p className="text-xl font-semibold my-3">Example</p>
            <p className="text-lg  space-x-2 tracking-wider py-3">
              Color value to box shadow
            </p>
            <SyntaxHighlighter language="css" style={docco}>
              box-shadow:7px 7px 11px 0px rgba(62, 177, 193, 1);
            </SyntaxHighlighter>
            <div className="bg-white p-5 mt-2">
              <div
                className="md:w-[45%] w-[70%] mx-auto h-32 border-2 bg-white my-8"
                style={{ boxShadow: "7px 7px 11px 0px rgba(62, 177, 193, 1)" }}
              ></div>
            </div>

            <p className="text-2xl font-semibold my-4">Inset</p>
            <p className="text-lg  space-x-2 tracking-wide leading-loose">
              Inset property is used to determine position of box shadow. By
              default in box-shadow property is is not defined it means shadow
              will be provided outside and if we add inset, shadow will be
              provided inner side of the box.
            </p>
            <p className="text-xl font-semibold my-3">Example</p>
            <SyntaxHighlighter language="css" style={docco}>
              box-shadow:7px 7px 11px 0px rgba(62, 177, 193, 1) inset;
            </SyntaxHighlighter>
            <div className="bg-white p-5 mt-2">
              <div
                className="md:w-[45%] w-[70%] mx-auto h-32 border-2 bg-white my-8"
                style={{
                  boxShadow: "7px 7px 11px 0px rgba(62, 177, 193, 1) inset",
                }}
              ></div>
            </div>

            <p className="text-3xl font-semibold my-4">Multiple shadows</p>
            <p className="text-lg  space-x-2 tracking-wide leading-loose">
              With box shadow property of CSS, we can put multiple shadows to
              single element. We can create many beautiful effects with the help
              of multiple box shadow property.
            </p>
            <p className="text-xl font-semibold my-3">Example</p>
            <SyntaxHighlighter language="css" style={docco}>
              box-shadow:-41px 41px 0px -30px rgba(255, 255, 255, 1) , 41px
              -41px 0px -30px rgba(255, 255, 255, 1) , 10px 10px 0px 0px
              rgba(56, 104, 214, 1) , -10px -10px 0px 0px rgba(56, 104, 214, 1)
              ;
            </SyntaxHighlighter>
            <div className="bg-white p-5 mt-2">
              <div
                className="flex items-center justify-center md:w-[45%] w-[70%] bg-white text-black mx-auto h-32 my-8"
                style={{
                  boxShadow:
                    "-41px 41px 0px -30px rgba(255, 255, 255, 1) , 41px -41px 0px -30px rgba(255, 255, 255, 1) , 10px 10px 0px 0px rgba(56, 104, 214, 1) , -10px -10px 0px 0px rgba(56, 104, 214, 1)",
                }}
              >
                <p className="text-lg">Write your text here...</p>
              </div>
            </div>
            <p className="text-lg  space-x-2 tracking-wide leading-loose">
              In the example given above, this effect is created with the help
              of 4 shadows. Two are of same color as of box color and two
              shadows are blue colored. Blur radius is zero as you can see edges
              are sharp.
            </p>

            <p className="text-xl font-semibold my-3">Example</p>
            <SyntaxHighlighter language="css" style={docco}>
              box-shadow:0px 0px 0px 17px #1F1E62 , 0px 0px 0px 33px #ec060f;
            </SyntaxHighlighter>
            <div className="bg-white p-5 mt-2 text-black">
              <div
                className="flex items-center justify-center md:w-[45%] w-[70%] mx-auto h-32 my-16"
                style={{
                  boxShadow:
                    "0px 0px 0px 17px #1F1E62 , 0px 0px 0px 33px #ec060f",
                }}
              >
              <p className="text-lg">Write your text here...</p>
              </div>
            </div>
            <p className="text-lg  space-x-2 tracking-wide leading-loose">
              In the example given above, this effect is created with the help
              two shadow using high value of spread radius.
            </p>

            <p className="text-xl  space-x-2 tracking-wide leading-loose">
              You can try out with box shadow generator tool and make more
              designs.
            </p>
          </div>
          {/* Explanation of box shadow end here */}
        </div>

        {/* center div ends here ------------------------------------------------------------------- */}
      </div>
    </>
  );
}