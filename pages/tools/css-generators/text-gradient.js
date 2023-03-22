import Head from "next/head";
import styles from "styles/style.module.css";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";
import CopyToClipboard from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { toast } from "react-toastify";
import { FaRegCopy } from "react-icons/fa";
import {MdAddToPhotos} from 'react-icons/md'
import { useEffect } from "react";
import {RxReset} from 'react-icons/rx'
import Link from "next/link";
import {BsFillLightningFill} from 'react-icons/bs'
import {GiCube} from 'react-icons/gi'
import {MdTransform} from "react-icons/md";
import { GoTextSize } from "react-icons/go";

export default function TextGradientGenerator() {
  const gradients = [
    "linear-gradient",
    "radial-gradient",
    "conic-gradient",
    "repeating-linear-gradient",
    "repeating-radial-gradient",
    "repeating-conic-gradient",
  ];
  const sizes = [
    "",
    "closest-side",
    "farthest-side",
    "closest-corner",
    "farthest-corner",
  ];
  const shapes = ["circle", "ellipse"];

  const [stopColors, setStopColors] = useState([]);
  // show and hide selection tab of size
  const [showSize, setShowSize] = useState(false);
  // gradient setting
  const [gradient, setGradient] = useState({});
 
  const [stopColorsString, setStopColorsString] = useState("");

  const [startColor, setStartColor] = useState({});
  const [endColor, setEndColor] = useState({});

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

  const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return "#" + n.slice(0, 6);
  };

  const removeStopColor = (index) => {
    let values = [...stopColors];
    values.splice(index, 1);
    setStopColors(values);
  };

  const codeCopyNotification = () => {
    toast.success("Code copied successfully !", {
      position: "top-center",
      autoClose: 3000,
      theme: "light",
    });
  };

  const addStopColor = () => {
    let values = [...stopColors];
    let colorCode = randomHexColorCode();
    values.push({
      hexColorCode: colorCode,
      percentage: 50,
      opacity: 1,
      degree: 90,
    });
    setStopColors(values);
  };

  // handle show and hide size

  useEffect(()=>{
    if(localStorage.getItem('text-gradient-generator')){
      let data=JSON.parse(localStorage.getItem('text-gradient-generator'));
      setGradient(data.gradient)
      setStopColors(data.stopColors)
      setStartColor(data.startColor)
      setEndColor(data.endColor)
    }
    else{
      setGradient({gradientType: 0,direction: 90,textSize: 50,shape: 0,size: 0,positionX: 50,positionY: 50,})
      setStopColors([])
      setStartColor({colorHexCode: "#9900FF", opacity: 1, percentage: 0, degree: 0})
      setEndColor({color: "#fcb045",colorHexCode: "#fcb045", opacity: 1, percentage: 100,degree: 250})
      localStorage.setItem('text-gradient-generator',JSON.stringify({
        gradient:{gradientType: 0,direction: 90,textSize: 50,shape: 0,size: 0,positionX: 50,positionY: 50,},
        stopColors:[],
        startColor:{ colorHexCode: "#9900FF", opacity: 1, percentage: 0, degree: 0},
        endColor:{colorHexCode: "#fcb045", opacity: 1, percentage: 100,degree: 250}
      }))
    }
  },[])

  useEffect(()=>{
    if(Object.keys(gradient).length>0){
      if(localStorage.getItem('text-gradient-generator')){
        let data=JSON.parse(localStorage.getItem('text-gradient-generator'));
        data.gradient=gradient;
        localStorage.setItem('text-gradient-generator',JSON.stringify(data))
      }
    }
    if(Object.keys(startColor).length>0){
        let data=JSON.parse(localStorage.getItem('text-gradient-generator'));
        data.startColor=startColor;
        localStorage.setItem('text-gradient-generator',JSON.stringify(data))
    }
    if(Object.keys(endColor).length>0){
        let data=JSON.parse(localStorage.getItem('text-gradient-generator'));
        data.endColor=endColor;
        localStorage.setItem('text-gradient-generator',JSON.stringify(data))
    }
    if(stopColors.length>0){
      let data=JSON.parse(localStorage.getItem('text-gradient-generator'));
        data.stopColors=stopColors;
        localStorage.setItem('text-gradient-generator',JSON.stringify(data))
    }
  },[gradient,stopColors,startColor,endColor])



  useEffect(() => {
    let stCString = "";
    stopColors.forEach((color) => {
      if((gradient.gradientType==2 || gradient.gradientType==5)){
        stCString += `${hexToRGB(color.hexColorCode,color.opacity)} ${color.degree}deg ,`;
      }
      else{
        stCString += `${hexToRGB(color.hexColorCode,color.opacity)} ${color.percentage}% ,`;
      }
    });
    setStopColorsString(stCString);
  }, [stopColors,gradient]);

  const toggleSize = (e) => {
    if (
      e.target.value == "radial-gradient" ||
      e.target.value == "repeating-radial-gradient"
    )
      setShowSize(true);
    else setShowSize(false);
    let values = { ...gradient };
    values.gradientType = e.target.value;
    setGradient(values);
  };
  let backgroundGradient=``
  if(Object.keys(gradient).length>0 ){
    backgroundGradient=`${
      gradients[gradient.gradientType]
    }(${
      gradient.gradientType == 0 || gradient.gradientType == 3
        ? gradient.direction + "deg,"
        : ""
    }${
      gradient.gradientType == 1 || gradient.gradientType == 4
        ? shapes[gradient.shape] + " "
        : ""
    }${
      (gradient.gradientType == 1 || gradient.gradientType == 4) &&
      sizes[gradient.size] != ""
        ? sizes[gradient.size] + " "
        : ""
    }${
      gradient.gradientType == 1 ||
      gradient.gradientType == 4 ||
      gradient.gradientType == 2 ||
      gradient.gradientType == 5
        ? `at ${gradient.positionX}% ${gradient.positionY}% , `
        : ""
    } ${hexToRGB(startColor.colorHexCode,startColor.opacity)} ${
      gradient.gradientType == 2 || gradient.gradientType == 5
        ? startColor.degree + "deg"
        : startColor.percentage + "%"
    }, ${stopColorsString} ${hexToRGB(endColor.colorHexCode,endColor.opacity)} ${
      gradient.gradientType == 2 || gradient.gradientType == 5
        ? endColor.degree + "deg"
        : endColor.percentage + "%"
    })`
  }

  const handleGenReset=()=>{
    setGradient({gradientType: 0,direction: 90,textSize: 50,shape: 0,size: 0,positionX: 50,positionY: 50,})
    setStopColors([])
    setStartColor({ color: "#9900FF", colorHexCode: "#9900FF", opacity: 1, percentage: 0, degree: 0})
    setEndColor({color: "#fcb045",colorHexCode: "#fcb045", opacity: 1, percentage: 100,degree: 250})
    localStorage.setItem('text-gradient-generator',JSON.stringify({
      gradient:{gradientType: 0,direction: 90,textSize: 50,shape: 0,size: 0,positionX: 50,positionY: 50,},
      stopColors:[],
      startColor:{ color: "#9900FF", colorHexCode: "#9900FF", opacity: 1, percentage: 0, degree: 0},
      endColor:{color: "#fcb045",colorHexCode: "#fcb045", opacity: 1, percentage: 100,degree: 250}
    }))
}


  return (
    <>
    <Head>
      <title>Text Gradient Generator | WebVerse</title>
        <meta
        name="description"
        content="Create beautiful text gradients with our free CSS Text gradient generator! This generator allows you to quickly generate stunning text gradients and copy the CSS code to use on your own website. With a variety of customization options and a user-friendly interface, you can create unique and eye-catching designs in no time. Try our text gradient generator today and take your website to the next level!"
      />
      <meta name="keywords" content="Webverse, web tools, free css generators,free css text gradient,css text gradient color,css text gradient generator,css text linear gradient,css text gradient generator,text gradient in css,css text gradient left to right,css gradient text effect"></meta>
      <meta property="og:title" content="Text Gradient Generator | WebVerse" />
        <meta
          property="og:description"
          content="Create beautiful text gradients with our free CSS Text gradient generator! This generator allows you to quickly generate stunning text gradients and copy the CSS code to use on your own website. With a variety of customization options and a user-friendly interface, you can create unique and eye-catching designs in no time. Try our text gradient generator today and take your website to the next level!"
        />
        <meta
          property="og:image"
          content="/images/og-images/home-page-og.png"
        />
    </Head>
      <div>
      <div className="lg:w-[64rem] mx-auto w-full">
        <h1 className={`md:text-5xl text-4xl text-blue-500 text-center font-semibold pb-5  pt-3 ${styles.textGrad}`}>
          Text Gradient Generator
        </h1>
        <p className="leading-9 text-lg text-justify p-4  py-4 lg:px-0 dark:text-white">
        Create beautiful text gradients with our free CSS Text gradient generator! This generator allows you to quickly generate stunning text gradients and copy the CSS code to use on your own website. With a variety of customization options and a user-friendly interface, you can create unique and eye-catching designs in no time. Try our text gradient generator today and take your website to the next level!
        </p>
        {/* start */}
        {Object.keys(gradient).length>0  && <div className="w-full grid grid-cols-1 gap-3 items-start md:grid-cols-6 p-4 dark:text-white bg-gray-100  dark:bg-[#1d2537]">
          {/* left box */}
          <div className=" h-[70vh] md:h-[32rem] md:col-span-4 flex justify-start flex-col items-center">
            <h1
             // key for text gradient (without it will not work https://stackoverflow.com/questions/53676000/css-background-clip-property-not-being-applied-in-react-when-background-is-dinam)
             className="h-[46%] flex items-center justify-center font-medium  text-center"
            key={backgroundGradient}
              style={{
                background:backgroundGradient,
                fontSize: `${gradient.textSize}px`,
                'color': 'transparent',
                backgroundClip:'text',
                WebkitBackgroundClip:'text'
              }}
            >Text Gradient</h1>

            <div className="w-full  flex justify-between items-center mt-3 gap-4">
              <div className="w-full">
                <div>
                  <div className="flex text-sm justify-between items-center font-medium">
                    <div>Font size</div>
                    <div>{gradient.textSize} px</div>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="80"
                    value={gradient.textSize}
                    className="w-full h-1  rounded-md appearance-none cursor-pointer"
                    onChange={(e) => {
                      let values = { ...gradient };
                      values.textSize = e.target.value;
                      setGradient(values);
                    }}
                  />
                </div>
              </div>
              <div>
                <button
                  className="w-[8rem] px-3 py-2 text-white flex rounded-lg items-center gap-2 font-semibold dark:hover:bg-blue-600 transition-all duration-300 border-blue-500 text-sm bg-blue-500 "
                  onClick={addStopColor}
                >
                  <span>Add color</span>
                  <span><MdAddToPhotos/></span>
                </button>
              </div>
            </div>

            <div className="w-full  dark:text-white mt-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-lg font-medium">Generated CSS code</p>
                <CopyToClipboard
                  text={`background: ${backgroundGradient};
  font-size: ${gradient.textSize}px;
  color: transparent;
  background-clip:text;
  -webkit-background-clip:text;
  display: inline;`}
                  className=" px-4 py-2 text-white flex items-center justify-between gap-2 font-semibold dark:hover:bg-blue-600 transition-all duration-300 border-blue-500 bg-blue-500 rounded-lg text-sm"
                  >
                  <button onClick={codeCopyNotification}> <span>Copy</span><span><FaRegCopy/></span></button>
                </CopyToClipboard>
              </div>
              <SyntaxHighlighter language="css" style={docco}>
                {`background: ${
                  gradients[gradient.gradientType]
                }(${
                  gradient.gradientType == 0 || gradient.gradientType == 3
                    ? gradient.direction + "deg,"
                    : ""
                }${
                  gradient.gradientType == 1 || gradient.gradientType == 4
                    ? shapes[gradient.shape] + " "
                    : ""
                }${
                  (gradient.gradientType == 1 || gradient.gradientType == 4) &&
                  sizes[gradient.size] != ""
                    ? sizes[gradient.size] + " "
                    : ""
                }${
                  gradient.gradientType == 1 ||
                  gradient.gradientType == 4 ||
                  gradient.gradientType == 2 ||
                  gradient.gradientType == 5
                    ? `at ${gradient.positionX}% ${gradient.positionY}% , `
                    : ""
                } ${hexToRGB(startColor.colorHexCode,startColor.opacity)} ${
                  gradient.gradientType == 2 || gradient.gradientType == 5
                    ? startColor.degree + "deg"
                    : startColor.percentage + "%"
                }, ${stopColorsString} ${hexToRGB(endColor.colorHexCode,endColor.opacity)} ${
                  gradient.gradientType == 2 || gradient.gradientType == 5
                    ? endColor.degree + "deg"
                    : endColor.percentage + "%"
                });\nfont-size: ${gradient.textSize}px;\ncolor: transparent;\nbackground-clip:text;\n-webkit-background-clip:text;\ndisplay: inline;`}
              </SyntaxHighlighter>
            </div>
            <div className="w-full">
                <button onClick={handleGenReset}  className="mt-4 px-4 py-2 text-white flex items-center justify-between gap-2 font-semibold dark:hover:bg-blue-600 transition-all duration-300 border-blue-500 bg-blue-500 rounded-lg text-sm">
                  <span>Reset</span>
                  <span><RxReset /></span>
                </button>
            </div>
          </div>
          {/* right box  sizes[gradient.size]!=''?sizes[gradient.size]:'' */}
          <div
            className={`md:h-[32rem] md:col-span-2 md:overflow-scroll md:overflow-x-hidden ${styles.scrollbarClass}`}
          >
            <div className=" border border-gray-200 cursor-pointer text-sm block w-full p-4 dark:border-none dark:bg-[#0f172a] dark:placeholder-gray-400 dark:text-white outline-none">
              <label
                htmlFor="gradient-type"
                className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
              >
                Gradient Type
              </label>
              <select
                id="gradient-type"
                defaultValue="linear-gradient"
                onChange={toggleSize}
                className="p-2.5 w-full dark:text-white outline-none text-sm block dark:bg-[#1d2537] cursor-pointer dark:border-none border-gray-200 border"
              >
                <option value="0">Linear Gradient</option>
                <option value="1">Radial Gradient</option>
                <option value="2">Conic Gradient</option>
                <option value="3">Repeat Linear Gradient</option>
                <option value="4">Repeat Radial Gradient</option>
                <option value="5">Repeating Conic Gradient</option>
              </select>
            </div>

            {(gradient.gradientType == 1 || gradient.gradientType == 4) && (
              <div className="mt-2 p-4 border border-gray-200 cursor-pointer text-sm block w-full dark:border-none dark:bg-[#0f172a] dark:placeholder-gray-400 dark:text-white outline-none">
                <label
                  htmlFor="gradient-type"
                  className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Size
                </label>
                <select
                  id="gradient-type"
                  defaultValue={gradient.size}
                  onChange={(e) => {
                    let values = { ...gradient };
                    values.size = e.target.value;
                    setGradient(values);
                  }}
                  className="p-2.5 w-full dark:text-white outline-none text-sm block dark:bg-[#1d2537] cursor-pointer dark:border-none border-gray-200 border"
                >
                  <option value="0">Choose a value</option>
                  <option value="1">Closest side</option>
                  <option value="2">Farthest side</option>
                  <option value="3">Closest corner</option>
                  <option value="4">Farthest corner</option>
                </select>
              </div>
            )}
            {((gradient.gradientType == 1 || gradient.gradientType == 4) &&
              gradient.size != 0 ||
              (gradient.gradientType == 2 || gradient.gradientType == 5)) && (
                <div className="mt-2 p-4 border border-gray-200 cursor-pointer text-sm block w-full dark:border-none dark:bg-[#0f172a] dark:placeholder-gray-400 dark:text-white outline-none">
                  <div>
                    <div className="flex items-center justify-between font-medium text-sm mt-3">
                      <div>Position-X</div>
                      <div>{gradient.positionX} %</div>
                    </div>
                    <div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        defaultValue={gradient.positionX}
                        className="w-full h-1  rounded-md appearance-none cursor-pointer"
                        onChange={(e) => {
                          let values = { ...gradient };
                          values.positionX = e.target.value;
                          setGradient(values);
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between font-medium text-sm mt-3">
                      <div>Position-Y</div>
                      <div>{gradient.positionY} %</div>
                    </div>
                    <div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        defaultValue={gradient.positionY}
                        className="w-full h-1  rounded-md appearance-none cursor-pointer"
                        onChange={(e) => {
                          let values = { ...gradient };
                          values.positionY = e.target.value;
                          setGradient(values);
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}
            {(gradient.gradientType == 1 || gradient.gradientType == 4) && (
              <div className="mt-2 border border-gray-200 cursor-pointer text-sm block w-full p-2.5 dark:border-none dark:bg-[#0f172a] dark:placeholder-gray-400 dark:text-white outline-none">
                <label
                  htmlFor="gradient-type"
                  className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Shape
                </label>
                <select
                  id="gradient-type"
                  defaultValue={gradient.shape}
                  onChange={(e) => {
                    let values = { ...gradient };
                    values.shape = e.target.value;
                    setGradient(values);
                  }}
                  className="p-2.5 w-full dark:text-white outline-none text-sm block dark:bg-[#1d2537] cursor-pointer dark:border-none border-gray-200 border"
                >
                  <option value="0">Circle</option>
                  <option value="1">Ellipse</option>
                </select>
              </div>
            )}

            {showSize && (
              <div className="mt-3">
                <label
                  htmlFor="size"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Size
                </label>
                <select
                  id="size"
                  defaultValue="FC"
                  className="bg-gray-50 border cursor-pointer border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
                >
                  <option value="FC">Farthest-corner</option>
                  <option value="FS">Farthest-side</option>
                </select>
              </div>
            )}
            {showSize && (
              <div className="mt-3">
                <label
                  htmlFor="shape"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Shape
                </label>
                <select
                  id="shape"
                  defaultValue="circle"
                  className="bg-gray-50 border cursor-pointer border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
                >
                  <option value="circle">Circle</option>
                  <option value="ellipse">Ellipse</option>
                </select>
              </div>
            )}
            {/* <div className="mt-3">
              <label
                htmlFor="direction"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Direction
              </label>
              <select
                id="direction"
                defaultValue="TL"
                onChange={(e)=>{console.log(e.target.value.split('-').join(' '));}}
                className="bg-gray-50 cursor-pointer border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
              >
                <option value="to-left">Left</option>
                <option value="to-right">Right</option>
                <option value="T">Top</option>
                <option value="B">Bottom</option>
                <option value="TL">Top Left</option>
                <option value="TR">Top Right</option>
                <option value="BL">Bottom Left</option>
                <option value="BR">Bottom Right</option>
              </select>
            </div> */}

            {(gradient.gradientType == 0 || gradient.gradientType == 3) && (
              <div className="mt-2 dark:bg-[#0f172a] bg-none dark:border-none border border-gray-200 p-4">
                <div className="flex justify-between items-center mb-1 text-sm font-medium text-gray-900 dark:text-white">
                  <div className="flex justify-between items-center w-40">
                    <div>Direction</div>
                  </div>
                  <div>{gradient.direction} deg</div>
                </div>
                <div>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={gradient.direction}
                    onChange={(e) => {
                      let values = { ...gradient };
                      values.direction = e.target.value;
                      setGradient(values);
                    }}
                    className="w-full h-1  rounded-md appearance-none cursor-pointer"
                  />
                </div>
              </div>
            )}

            {/* color */}
            <div className="mt-2 dark:bg-[#0f172a] bg-none dark:border-none border border-gray-200 p-4">
              <div className="flex justify-between items-center mb-1 text-sm font-medium text-gray-900 dark:text-white">
                <div className="flex justify-between items-center w-40">
                  <div>Start color</div>
                  <div className="flex items-center">
                    <div>
                      <label
                        htmlFor="start-color"
                        className="border-2 rounded px-3 py-1"
                        style={{ backgroundColor:  startColor.colorHexCode}}
                      ></label>
                    </div>
                    <div>
                      <input
                        type="color"
                        id="start-color"
                        className="w-0 invisible"
                        value={startColor.colorHexCode}
                        onChange={(e) => {
                          let values = { ...startColor };
                          values.colorHexCode = e.target.value;
                          setStartColor(values);
                        }}
                      />
                    </div>
                  </div>
                </div>
                {gradient.gradientType == 2 || gradient.gradientType == 5 ? (
                  <div>{startColor.degree} deg</div>
                ) : (
                  <div>{startColor.percentage} %</div>
                )}
              </div>
              <div>
                <input
                  type="range"
                  min="0"
                  max={
                    gradient.gradientType == 2 || gradient.gradientType == 5
                      ? 360
                      : 100
                  }
                  value={
                    gradient.gradientType == 2 || gradient.gradientType == 5
                      ? startColor.degree
                      : startColor.percentage
                  }
                  className="w-full h-1  rounded-md appearance-none cursor-pointer"
                  onChange={(e) => {
                    let values = { ...startColor };
                    if (
                      gradient.gradientType == 2 ||
                      gradient.gradientType == 5
                    ) {
                      values.degree = e.target.value;
                    } else values.percentage = e.target.value;
                    setStartColor(values);
                  }}
                />
              </div>
              <div>
                <div className="flex items-center justify-between font-medium text-sm mt-3">
                  <div>Color opacity</div>
                  <div>{startColor.opacity}</div>
                </div>
                <div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={startColor.opacity * 100}
                    className="w-full h-1  rounded-md appearance-none cursor-pointer"
                    onChange={(e) => {
                      let values = { ...startColor };
                      values.opacity = e.target.value / 100;
                      setStartColor(values);
                    }}
                  />
                </div>
              </div>
            </div>
            {stopColors.map((stopColor, index) => {
              return (
                <div
                  className="mt-2 dark:bg-[#0f172a] bg-none dark:border-none border border-gray-200 p-4"
                  key={index}
                >
                  <div className="flex justify-between items-center mb-1 text-sm font-medium text-gray-900 dark:text-white">
                    <div className="flex justify-between items-center w-40">
                      <div>Stop color</div>
                      <div className="flex items-center">
                        <div>
                          <label
                            htmlFor={`stopColor-${index}`}
                            className="border-2 rounded px-3 py-1"
                            style={{ backgroundColor: `${stopColor.hexColorCode}` }}
                          ></label>
                        </div>
                        <div>
                          <input
                            type="color"
                            id={`stopColor-${index}`}
                            className="w-0 invisible"
                            value={stopColor.hexColorCode}
                            onChange={(e) => {
                              let values = [...stopColors];
                              values[index].hexColorCode = e.target.value;
                              setStopColors(values);
                            }}
                          />
                        </div>
                      </div>
                      <TiDelete
                        size={"2em"}
                        className="cursor-pointer"
                        onClick={() => {
                          removeStopColor(index);
                        }}
                      />
                    </div>
                    {gradient.gradientType == 2 ||
                    gradient.gradientType == 5 ? (
                      <div>{stopColor.degree} deg</div>
                    ) : (
                      <div>{stopColor.percentage} %</div>
                    )}
                  </div>

                  <div>
                    <input
                      type="range"
                      min="0"
                      max={
                        gradient.gradientType == 2 || gradient.gradientType == 5
                          ? 360
                          : 100
                      }
                      value={
                        gradient.gradientType == 2 || gradient.gradientType == 5
                          ? stopColor.degree
                          : stopColor.percentage
                      }
                      className="w-full h-1  rounded-md appearance-none cursor-pointer"
                      onChange={(e) => {
                        let values = [...stopColors];
                        if (
                          gradient.gradientType == 2 ||
                          gradient.gradientType == 5
                        ) {
                          values[index].degree = e.target.value;
                        } else values[index].percentage = e.target.value;
                        setStopColors(values);
                      }}
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between font-medium text-sm mt-3">
                      <div>Color opacity</div>
                      <div>{stopColor.opacity}</div>
                    </div>
                    <div>
                      <input
                        type="range"
                        min="1"
                        max="100"
                        value={stopColor.opacity * 100}
                        className="w-full h-1  rounded-md appearance-none cursor-pointer"
                        onChange={(e) => {
                          let values = [...stopColors];
                          values[index].opacity = e.target.value / 100;
                          setStopColors(values);
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="mt-2 dark:bg-[#0f172a] bg-none dark:border-none border border-gray-200 p-4">
              <div className="flex justify-between items-center mb-1 text-sm font-medium text-gray-900 dark:text-white">
                <div className="flex justify-between items-center w-40">
                  <div>End color</div>
                  <div className="flex items-center">
                    <div>
                      <label
                        htmlFor="end-color"
                        className="border-2 rounded px-3 py-1"
                        style={{ backgroundColor: endColor.colorHexCode }}
                      ></label>
                    </div>
                    <div>
                      <input
                        type="color"
                        id="end-color"
                        className="w-0 invisible"
                        value={endColor.colorHexCode}
                        onChange={(e) => {
                          let values = { ...endColor };
                          values.colorHexCode = e.target.value;
                          setEndColor(values);
                        }}
                      />
                    </div>
                  </div>
                </div>
                {gradient.gradientType == 2 || gradient.gradientType == 5 ? (
                  <div>{endColor.degree} deg</div>
                ) : (
                  <div>{endColor.percentage} %</div>
                )}
              </div>
              <div>
                <input
                  type="range"
                  min="0"
                  max={
                    gradient.gradientType == 2 || gradient.gradientType == 5
                      ? 360
                      : 100
                  }
                  value={
                    gradient.gradientType == 2 || gradient.gradientType == 5
                      ? endColor.degree
                      : endColor.percentage
                  }
                  className="w-full h-1  rounded-md appearance-none cursor-pointer"
                  onChange={(e) => {
                    let values = { ...endColor };
                    if (
                      gradient.gradientType == 2 ||
                      gradient.gradientType == 5
                    ) {
                      values.degree = e.target.value;
                    } else values.percentage = e.target.value;
                    setEndColor(values);
                  }}
                />
              </div>
              <div>
                <div className="flex items-center justify-between font-medium text-sm mt-3">
                  <div>Color opacity</div>
                  <div>{endColor.opacity}</div>
                </div>
                <div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={endColor.opacity * 100}
                    className="w-full h-1  rounded-md appearance-none cursor-pointer"
                    onChange={(e) => {
                      let values = { ...endColor };
                      values.opacity = e.target.value / 100;
                      setEndColor(values);
                    }}
                  />
                </div>
              </div>
            </div>

            {/* <button
              className=" px-4 py-2 text-white font-semibold mt-3 dark:hover:bg-white dark:hover:text-blue-500 transition-all duration-500 border-blue-500 bg-blue-500 "
              onClick={addStopColor}
            >
              Add Color
            </button> */}
          </div>
          {/* right box ends here */}
        </div>}
        {/* end-------- */}

        
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
              <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/text-shadow`} passHref>
              <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                <GoTextSize size={"2.3rem"} />
                <p className="text-xl font-medium text-center">
                  Text Shadow Generator
                </p>
              </div>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/transform-generator-2d`} passHref>
              <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                <MdTransform size={"2.3rem"} />
                <p className="text-xl font-medium text-center">
                  2D Transform CSS Generator
                </p>
              </div>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/transform-generator-3d`} passHref>
              <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                <GiCube size={"2.3rem"} />
                <p className="text-xl font-medium text-center">
                  3D Transform CSS Generator
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
