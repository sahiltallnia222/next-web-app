import { useEffect, useState } from "react";
import styles from "styles/style.module.css";
import { toast } from "react-toastify";
import CopyToClipboard from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { FaRegCopy } from "react-icons/fa";
import Head from "next/head";
import {RxReset} from 'react-icons/rx'
import Link from "next/link";
import {BsFillLightningFill} from 'react-icons/bs'
import {MdAnimation} from "react-icons/md";
import { TbBoxMultiple } from "react-icons/tb";
import { AiOutlineRadiusSetting } from "react-icons/ai";



export default function TransformGenerator() {
  const [transform, setTransform] = useState({});
  const [colors, setColors] = useState({});

  useEffect(()=>{
    if(localStorage.getItem('3d-transform')){
      let data=JSON.parse(localStorage.getItem('3d-transform'))
      setTransform(data.transform)
      setColors(data.colors)
    }
    else{
      let tr={rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        translateX: 0,
        translateY: 0,
        translateZ: 0,
        skewX: 0,
        skewY: 0,
        perspective: 2500,
        perspectiveOriginX: 50,
        perspectiveOriginY: 50
      }
      let clr={
        front: "#3456ed",
        back: "#4565ae",
        top: "#af1234",
        bottom: "#987634",
        left: "#fea234",
        right: "#aefcde",
        text: "#000000"
      }
      setTransform(tr)
      setColors(clr)
      let data={transform:tr,colors:clr}
      localStorage.setItem('3d-transform',JSON.stringify(data))
    }
  },[])

  const handleGenReset=()=>{
    let tr={rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scaleX: 1,
      scaleY: 1,
      scaleZ: 1,
      translateX: 0,
      translateY: 0,
      translateZ: 0,
      skewX: 0,
      skewY: 0,
      perspective: 2500,
      perspectiveOriginX: 50,
      perspectiveOriginY: 50
    }
    let clr={
      front: "#3456ed",
      back: "#4565ae",
      top: "#af1234",
      bottom: "#987634",
      left: "#fea234",
      right: "#aefcde",
      text: "#000000"
    }
    setTransform(tr)
    setColors(clr)
    let data={transform:tr,colors:clr}
    localStorage.setItem('3d-transform',JSON.stringify(data))
  }

  useEffect(()=>{
    let data=JSON.parse(localStorage.getItem('3d-transform'))
    if(Object.keys(transform).length>0){
      data.transform={...transform}
    }
    if(Object.keys(colors).length>0){
      data.colors={...colors}
    }
    localStorage.setItem('3d-transform',JSON.stringify(data))
  },[transform,colors])

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
      <title>3D Transform CSS Generator | WebVerse</title>
        <meta
        name="description"
        content="Make your website stunning using free CSS 3D transform generator tool. This tool allows you to set the various parameters of transform property and generate CSS code for you. Just copy and paste the code in your website and see the effects."
      />
      <meta name="keywords" content="Webverse, web tools, css transform generator, free css generators,free css 3d transform,3d transform in css,css 3d transform generator,css 3d transform examples"></meta>
      <meta property="og:title" content="3D Transform CSS Generator | WebVerse" />
        <meta
          property="og:description"
          content="Make your website stunning using free CSS transform generator tool. This tool allows you to set the various parameters of transform property and generate CSS code for you. Just copy and paste the code in your website and see the effects."
        />
        <meta
          property="og:image"
          content="/images/og-images/home-page-og.png"
        />
    </Head>
      <div>
        <div className="lg:w-[64rem] mx-auto w-full">
          <h1 className={`md:text-5xl text-4xl text-blue-500 text-center font-semibold pb-5  pt-3 ${styles.textGrad}`}>
            3D Transform CSS Generator
          </h1>

          <p className=" leading-9 text-lg text-justify p-4  py-4 lg:px-0 dark:text-white">
          Make your website stunning using free CSS transform generator tool. This tool allows you to set the various parameters of transform property and generate CSS code for you. Just copy and paste the code in your website and see the effects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-6 lg:dark:bg-[#1d2537] lg:bg-gray-100  md:h-[32rem]">
            <div className="flex items-center justify-center md:col-span-4 p-6 pt-12 ">
              <div
                className="w-80 h-80"
                style={{
                  perspective: `${transform.perspective}px`,
                  perspectiveOrigin: `${transform.perspectiveOriginX}% ${transform.perspectiveOriginY}%`,
                }}
              >
                <div
                  className="box relative w-full h-full"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) rotateZ(${transform.rotateZ}deg) scaleX(${transform.scaleX}) 
                scaleY(${transform.scaleY}) scaleZ(${transform.scaleZ}) translateX(${transform.translateX}px) translateY(${transform.translateY}px) translateZ(${transform.translateZ}px) skew(${transform.skewX}deg, ${transform.skewY}deg)`,
                    color: `${colors.text}`,
                  }}
                >
                  <div
                    className="absolute flex items-center justify-center font-semibold text-2xl  top-0 left-0 w-80 h-80 bg-orange-500"
                    style={{
                      transform: `rotateY(0deg) translateZ(10rem)`,
                      backgroundColor: `${colors.front}`,
                    }}
                  >
                    Front
                  </div>
                  <div
                    className="absolute flex items-center justify-center font-semibold text-2xl  top-0 left-0 w-80 h-80 bg-red-500"
                    style={{
                      transform: `rotateY(180deg) translateZ(10rem)`,
                      backgroundColor: `${colors.back}`,
                    }}
                  >
                    Back
                  </div>
                  <div
                    className="absolute  flex items-center justify-center font-semibold text-2xl top-0 left-0 w-80 h-80 bg-green-600"
                    style={{
                      transform: `rotateY(-90deg) translateZ(10rem)`,
                      backgroundColor: `${colors.left}`,
                    }}
                  >
                    Left
                  </div>
                  <div
                    className="absolute  flex items-center justify-center font-semibold text-2xl top-0 left-0 w-80 h-80 bg-yellow-500"
                    style={{
                      transform: `rotateY( 90deg) translateZ(10rem)`,
                      backgroundColor: `${colors.right}`,
                    }}
                  >
                    Right
                  </div>
                  <div
                    className="absolute flex items-center justify-center font-semibold text-2xl  top-0 left-0 w-80 h-80 bg-blue-600"
                    style={{
                      transform: `rotateX( 90deg) translateZ(10rem)`,
                      backgroundColor: `${colors.top}`,
                    }}
                  >
                    Top
                  </div>
                  <div
                    className="absolute flex items-center justify-center font-semibold text-2xl  top-0 left-0 w-80 h-80 bg-orange-500"
                    style={{
                      transform: `rotateX(-90deg) translateZ(10rem)`,
                      backgroundColor: `${colors.bottom}`,
                    }}
                  >
                    Bottom
                  </div>
                </div>
              </div>
            </div>
            {/* right items */}
            <div
              className={`md:h-[32rem] md:col-span-2 md:overflow-scroll md:overflow-x-hidden ${styles.scrollbarClass}`}
            >
              <div className="md:col-span-2 dark:text-white p-6 ">
                
                <div className="flex flex-col gap-2">
                  <div>
                    <div className="flex items-center justify-between font-medium text-sm">
                      <div>Rotate X</div>
                      <div>{transform.rotateX} deg</div>
                    </div>
                    <div>
                      <input
                        type="range"
                        min="0"
                        max="360"
                        value={transform.rotateX}
                        className="w-full h-1 bg-gray-300  rounded-md appearance-none cursor-pointer"
                        onChange={(e) => {
                          let values = { ...transform };
                          values.rotateX = e.target.value;
                          setTransform(values);
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between font-medium text-sm">
                      <div>Rotate Y</div>
                      <div>{transform.rotateY} deg</div>
                    </div>
                    <div>
                      <input
                        type="range"
                        min="0"
                        max="360"
                        value={transform.rotateY}
                        className="w-full h-1 bg-gray-300  rounded-md appearance-none cursor-pointer"
                        onChange={(e) => {
                          let values = { ...transform };
                          values.rotateY = e.target.value;
                          setTransform(values);
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between font-medium text-sm">
                      <div>Rotate Z</div>
                      <div>{transform.rotateZ} deg</div>
                    </div>
                    <div>
                      <input
                        type="range"
                        min="0"
                        max="360"
                        value={transform.rotateZ}
                        className="w-full h-1 bg-gray-300  rounded-md appearance-none cursor-pointer"
                        onChange={(e) => {
                          let values = { ...transform };
                          values.rotateZ = e.target.value;
                          setTransform(values);
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between font-medium text-sm">
                      <div>Scale X</div>
                      <div>{transform.scaleX}</div>
                    </div>
                    <div>
                      <input
                        type="range"
                        min="0.1"
                        max="2"
                        step="0.1"
                        value={transform.scaleX}
                        className="w-full h-1 bg-gray-300  rounded-md appearance-none cursor-pointer"
                        onChange={(e) => {
                          let values = { ...transform };
                          values.scaleX = e.target.value;
                          setTransform(values);
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between font-medium text-sm">
                      <div>Scale Y</div>
                      <div>{transform.scaleY}</div>
                    </div>
                    <div>
                      <input
                        type="range"
                        min="0.1"
                        max="2"
                        step="0.1"
                        value={transform.scaleY}
                        className="w-full h-1 bg-gray-300  rounded-md appearance-none cursor-pointer"
                        onChange={(e) => {
                          let values = { ...transform };
                          values.scaleY = e.target.value;
                          setTransform(values);
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between font-medium text-sm">
                      <div>Scale Z</div>
                      <div>{transform.scaleZ}</div>
                    </div>
                    <div>
                      <input
                        type="range"
                        min="0.1"
                        max="2"
                        step="0.1"
                        value={transform.scaleZ}
                        className="w-full h-1 bg-gray-300  rounded-md appearance-none cursor-pointer"
                        onChange={(e) => {
                          let values = { ...transform };
                          values.scaleZ = e.target.value;
                          setTransform(values);
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between font-medium text-sm">
                      <div>Translate X</div>
                      <div>{transform.translateX} px</div>
                    </div>
                    <div>
                      <input
                        type="range"
                        min="-100"
                        max="100"
                        value={transform.translateX}
                        className="w-full h-1 bg-gray-300  rounded-md appearance-none cursor-pointer"
                        onChange={(e) => {
                          let values = { ...transform };
                          values.translateX = e.target.value;
                          setTransform(values);
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between font-medium text-sm">
                      <div>Translate Y</div>
                      <div>{transform.translateY} px</div>
                    </div>
                    <div>
                      <input
                        type="range"
                        min="-100"
                        max="100"
                        value={transform.translateY}
                        className="w-full h-1 bg-gray-300  rounded-md appearance-none cursor-pointer"
                        onChange={(e) => {
                          let values = { ...transform };
                          values.translateY = e.target.value;
                          setTransform(values);
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between font-medium text-sm">
                      <div>Transalte Z</div>
                      <div>{transform.translateZ} px</div>
                    </div>
                    <div>
                      <input
                        type="range"
                        min="-100"
                        max="100"
                        value={transform.translateZ}
                        className="w-full h-1 bg-gray-300  rounded-md appearance-none cursor-pointer"
                        onChange={(e) => {
                          let values = { ...transform };
                          values.translateZ = e.target.value;
                          setTransform(values);
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between font-medium text-sm">
                      <div>Skew X</div>
                      <div>{transform.skewX} deg</div>
                    </div>
                    <div>
                      <input
                        type="range"
                        min="0"
                        max="180"
                        value={transform.skewX}
                        className="w-full h-1 bg-gray-300  rounded-md appearance-none cursor-pointer"
                        onChange={(e) => {
                          let values = { ...transform };
                          values.skewX = e.target.value;
                          setTransform(values);
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between font-medium text-sm">
                      <div>Skew Y</div>
                      <div>{transform.skewY} deg</div>
                    </div>
                    <div>
                      <input
                        type="range"
                        min="0"
                        max="180"
                        value={transform.skewY}
                        className="w-full h-1 bg-gray-300  rounded-md appearance-none cursor-pointer"
                        onChange={(e) => {
                          let values = { ...transform };
                          values.skewY = e.target.value;
                          setTransform(values);
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between font-medium text-sm">
                      <div>Perspective</div>
                      <div>{transform.perspective} px</div>
                    </div>
                    <div>
                      <input
                        type="range"
                        min="500"
                        max="4000"
                        value={transform.perspective}
                        className="w-full h-1 bg-gray-300  rounded-md appearance-none cursor-pointer"
                        onChange={(e) => {
                          let values = { ...transform };
                          values.perspective = e.target.value;
                          setTransform(values);
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between font-medium text-sm">
                      <div>Perspective Origin X</div>
                      <div>{transform.perspectiveOriginX} %</div>
                    </div>
                    <div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={transform.perspectiveOriginX}
                        className="w-full h-1 bg-gray-300  rounded-md appearance-none cursor-pointer"
                        onChange={(e) => {
                          let values = { ...transform };
                          values.perspectiveOriginX = e.target.value;
                          setTransform(values);
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between font-medium text-sm">
                      <div>Perspective Origin Y</div>
                      <div>{transform.perspectiveOriginY} %</div>
                    </div>
                    <div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={transform.perspectiveOriginY}
                        className="w-full h-1 bg-gray-300  rounded-md appearance-none cursor-pointer"
                        onChange={(e) => {
                          let values = { ...transform };
                          values.perspectiveOriginY = e.target.value;
                          setTransform(values);
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 mt-2">
                    <div className="flex justify-between items-center gap-3 align-middle">
                      <div className="flex font-semibold justify-between items-center w-full md:w-1/2 dark:text-white">
                        <span>Front Color</span>
                        <span className="flex items-center">
                          <label
                            htmlFor="front-color"
                            className="border-2 border-black  px-3 py-3 rounded"
                            style={{ backgroundColor: colors.front }}
                          ></label>
                          <input
                            type="color"
                            id="front-color"
                            value={colors.front}
                            className="w-0 invisible"
                            onChange={(e) => {
                              let values = { ...colors };
                              values.front = e.target.value;
                              setColors(values);
                            }}
                          />
                        </span>
                      </div>
                      <div className="flex font-semibold justify-between items-center w-full md:w-1/2 dark:text-white">
                        <span>Back Color</span>
                        <span className="flex items-center">
                          <label
                            htmlFor="back-color"
                            className="border-2 border-black  px-3 py-3 rounded"
                            style={{ backgroundColor: colors.back }}
                          ></label>
                          <input
                            type="color"
                            id="back-color"
                            value={colors.back}
                            className="w-0 invisible"
                            onChange={(e) => {
                              let values = { ...colors };
                              values.back = e.target.value;
                              setColors(values);
                            }}
                          />
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center gap-3 align-middle">
                      <div className="flex font-semibold justify-between items-center w-full md:w-1/2 dark:text-white">
                        <span>Top Color</span>
                        <span className="flex items-center">
                          <label
                            htmlFor="top-color"
                            className="border-2 border-black  px-3 py-3 rounded"
                            style={{ backgroundColor: colors.top }}
                          ></label>
                          <input
                            type="color"
                            id="top-color"
                            value={colors.top}
                            className="w-0 invisible"
                            onChange={(e) => {
                              let values = { ...colors };
                              values.top = e.target.value;
                              setColors(values);
                            }}
                          />
                        </span>
                      </div>
                      <div className="flex font-semibold justify-between items-center w-full md:w-1/2 dark:text-white">
                        <span>Bottom Color</span>
                        <span className="flex items-center">
                          <label
                            htmlFor="bottom-color"
                            className="border-2 border-black  px-3 py-3 rounded"
                            style={{ backgroundColor: colors.bottom }}
                          ></label>
                          <input
                            type="color"
                            id="bottom-color"
                            value={colors.bottom}
                            className="w-0 invisible"
                            onChange={(e) => {
                              let values = { ...colors };
                              values.bottom = e.target.value;
                              setColors(values);
                            }}
                          />
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center gap-3 align-middle">
                      <div className="flex font-semibold justify-between items-center w-full md:w-1/2 dark:text-white">
                        <span>Left Color</span>
                        <span className="flex items-center">
                          <label
                            htmlFor="left-color"
                            className="border-2 border-black  px-3 py-3 rounded"
                            style={{ backgroundColor: colors.left }}
                          ></label>
                          <input
                            type="color"
                            id="left-color"
                            value={colors.left}
                            className="w-0 invisible"
                            onChange={(e) => {
                              let values = { ...colors };
                              values.left = e.target.value;
                              setColors(values);
                            }}
                          />
                        </span>
                      </div>
                      <div className="flex font-semibold justify-between items-center w-full md:w-1/2 dark:text-white">
                        <span>Right Color</span>
                        <span className="flex items-center">
                          <label
                            htmlFor="right-color"
                            className="border-2 border-black  px-3 py-3 rounded"
                            style={{ backgroundColor: colors.right }}
                          ></label>
                          <input
                            type="color"
                            id="right-color"
                            value={colors.right}
                            className="w-0 invisible"
                            onChange={(e) => {
                              let values = { ...colors };
                              values.right = e.target.value;
                              setColors(values);
                            }}
                          />
                        </span>
                      </div>
                    </div>
                    <div className="flex font-semibold justify-between items-center w-full dark:text-white">
                      <span>Text Color</span>
                      <span className="flex items-center">
                        <label
                          htmlFor="text-color"
                          className="border-2 border-black  px-16 py-3 rounded"
                          style={{ backgroundColor: colors.text }}
                        ></label>
                        <input
                          type="color"
                          id="text-color"
                          value={colors.text}
                          className="w-0 invisible"
                          onChange={(e) => {
                            let values = { ...colors };
                            values.text = e.target.value;
                            setColors(values);
                          }}
                        />
                      </span>
                    </div>
                  </div>
                  <div>
                    <button onClick={handleGenReset} className="mt-4 px-4 py-2 text-white flex items-center justify-between gap-2 font-semibold dark:hover:bg-blue-600 transition-all duration-300 border-blue-500 bg-blue-500 rounded-lg text-sm">
                      <span>Reset</span>
                      <span><RxReset /></span>
                    </button>
                </div>
                </div>
              </div>
            </div>
            {/* end right box */}
          </div>


{/* CSS codes starts */}
          <div className="lg:dark:bg-[#1d2537] lg:bg-gray-100  mt-4">


          <div className="w-full p-4 dark:text-white">
              <div className="flex items-center justify-between mb-3">
                <p className="font-medium text-lg py-2">HTML code</p>
                <CopyToClipboard
                  text= {`<div class='outer-box'>
  <div class='inner-box'>
    <div class='front side'>Front</div>
    <div class='back side'>Back</div>
    <div class='left side'>Left</div>
    <div class='right side'>Right</div>
    <div class='top side'>Top</div>
    <div class='bottom side'>Bottom</div>
  </div>
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
              <SyntaxHighlighter language="javascript" style={docco}>
              {`<div class='outer-box'>
  <div class='inner-box'>
    <div class='front side'>Front</div>
    <div class='back side'>Back</div>
    <div class='left side'>Left</div>
    <div class='right side'>Right</div>
    <div class='top side'>Top</div>
    <div class='bottom side'>Bottom</div>
  </div>
</div>`}
              </SyntaxHighlighter>
            </div>

            <div className="w-full p-4 dark:text-white">
              <div className="flex items-center justify-between mb-3">
                <p className="font-medium text-lg py-2">Generated CSS code</p>
                <CopyToClipboard
                  text={`.outer-box{
  perspective:${transform.perspective}px;
  perspective-origin: ${transform.perspectiveOriginX}% ${transform.perspectiveOriginY}%;
  width:20rem;
  height:20rem;
}
.inner-box{
  position:relative;
  width:100%;
  height:100%;
  transform-style: preserve-3d;
  transform: rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) rotateZ(${transform.rotateZ}deg) scaleX(${transform.scaleX}) scaleY(${transform.scaleY}) scaleZ(${transform.scaleZ}) translateX(${transform.translateX}px) translateY(${transform.translateY}px) translateZ(${transform.translateZ}px) skew(${transform.skewX}deg, ${transform.skewY}deg);
  color: ${colors.text};
}
.side{
  position:absolute;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:600;
  font-size:1.5rem;
  line-height:2rem;
  top:0;
  left:0;
  width:20rem;
  height:20rem;
}
.front{
  transform: rotateY(0deg) translateZ(10rem);
  background-color: ${colors.front};
}
.back{
  transform: rotateY(180deg) translateZ(10rem);
  background-color: ${colors.back};
}
.left{
  transform: rotateY(-90deg) translateZ(10rem);
  background-color: ${colors.left};
}
.right{
  transform: rotateY(90deg) translateZ(10rem);
  background-color: ${colors.right};
}
.top{
  transform: rotateX(90deg) translateZ(10rem);
  background-color: ${colors.top};
}
.bottom{
  transform: rotateX(-90deg) translateZ(10rem);
  background-color: ${colors.bottom};
}
`}

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
                {`.outer-box{
  perspective:${transform.perspective}px;
  perspective-origin: ${transform.perspectiveOriginX}% ${transform.perspectiveOriginY}%;
  width:20rem;
  height:20rem;
}
.inner-box{
  position:relative;
  width:100%;
  height:100%;
  transform-style: "preserve-3d",
  transform: rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) rotateZ(${transform.rotateZ}deg) scaleX(${transform.scaleX}) scaleY(${transform.scaleY}) scaleZ(${transform.scaleZ}) translateX(${transform.translateX}px) translateY(${transform.translateY}px) translateZ(${transform.translateZ}px) skew(${transform.skewX}deg, ${transform.skewY}deg);
  color: ${colors.text};
}
.side{
  position:absolute;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:600;
  font-size:1.5rem;
  line-height:2rem;
  top:0;
  left:0;
  width:20rem;
  height:20rem;
}
.front{
  transform: rotateY(0deg) translateZ(10rem);
  background-color: ${colors.front};
}
.back{
  transform: rotateY(180deg) translateZ(10rem);
  background-color: ${colors.back};
}
.left{
  transform: rotateY(-90deg) translateZ(10rem);
  background-color: ${colors.left};
}
.right{
  transform: rotateY(90deg) translateZ(10rem);
  background-color: ${colors.right};
}
.top{
  transform: rotateX(90deg) translateZ(10rem);
  background-color: ${colors.top};
}
.bottom{
  transform: rotateX(-90deg) translateZ(10rem);
  background-color: ${colors.bottom};
}
`}

              </SyntaxHighlighter>
            </div>

          </div>

{/* CSS code ends Here */}


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
              <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/border-radius-generator`} passHref>
              <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  lg:dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                <AiOutlineRadiusSetting size={"2.3rem"} />
                <p className="text-xl font-medium text-center">
                  Border Radius Generator
                </p>
              </div>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/box-animations`} passHref>
              <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  lg:dark:bg-[#1d2537] py-14 border-2 dark:border-transparent">
                <MdAnimation size={"2.3em"} />
                <p className="text-xl font-medium text-center">
                  Box Animations
                </p>
              </div>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/box-shadow`} passHref>
              <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  lg:dark:bg-[#1d2537] py-14 border-2 dark:border-transparent">
                <TbBoxMultiple size={"2.3em"} />
                <p className="text-xl font-medium text-center">
                  Box Shadow Generator
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
