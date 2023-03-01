import { useState } from "react";
import styles from "styles/style.module.css";
import { toast } from "react-toastify";
import CopyToClipboard from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import {FaRegCopy} from 'react-icons/fa'
import Head from "next/head";

export default function TransformGenerator() {
  const [transform, setTransform] = useState({
    rotateX: 0,
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
    perspectiveOriginY: 50,
  });
  const [colors, setColors] = useState({
    bgColor: "#3456ed",
    text: "#ffffff",
  });

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
      <title>2D Transform CSS Generator</title>
    </Head>
      <div>
        <div className="lg:w-[64rem] mx-auto w-full">
          <h1 className={`md:text-5xl text-4xl text-blue-500 text-center font-semibold pb-5  pt-3 ${styles.textGrad}`}>
            2D Transform CSS Generator
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-6 dark:bg-[#1d2537] md:h-[32rem]">
            <div className="flex items-center justify-center md:col-span-4 p-6 pt-12 " style={{
                  perspective: `${transform.perspective}px`,
                  perspectiveOrigin: `${transform.perspectiveOriginX}% ${transform.perspectiveOriginY}%`,
                }}>
              <div
                className="w-80 h-80 flex items-center justify-center font-semibold text-2xl"
                style={{transformStyle: "preserve-3d",transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) rotateZ(${transform.rotateZ}deg) scaleX(${transform.scaleX}) 
                scaleY(${transform.scaleY}) scaleZ(${transform.scaleZ}) translateX(${transform.translateX}px) translateY(${transform.translateY}px) translateZ(${transform.translateZ}px) skew(${transform.skewX}deg, ${transform.skewY}deg)`,
                  color: `${colors.text}`,backgroundColor:`${colors.bgColor}`
                }}
              >2D Transform</div>
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
                        max="180"
                        value={transform.rotateX}
                        className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
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
                        max="180"
                        value={transform.rotateY}
                        className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
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
                        max="180"
                        value={transform.rotateZ}
                        className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
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
                        className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
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
                        className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
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
                        className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
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
                        className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
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
                        className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
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
                        className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
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
                        className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
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
                        className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
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
                        min="300"
                        max="3000"
                        value={transform.perspective}
                        className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
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
                        className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
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
                        className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
                        onChange={(e) => {
                          let values = { ...transform };
                          values.perspectiveOriginY = e.target.value;
                          setTransform(values);
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 mt-2">
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
                    <div className="flex font-semibold justify-between items-center w-full dark:text-white">
                      <span>Background Color</span>
                      <span className="flex items-center">
                        <label
                          htmlFor="bgColor-color"
                          className="border-2 border-black  px-16 py-3 rounded"
                          style={{ backgroundColor: colors.bgColor }}
                        ></label>
                        <input
                          type="color"
                          id="bgColor-color"
                          value={colors.bgColor}
                          className="w-0 invisible"
                          onChange={(e) => {
                            let values = { ...colors };
                            values.bgColor = e.target.value;
                            setColors(values);
                          }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end right box */}
          </div>
{/* New Box starts  */}
          <div className="dark:bg-[#1d2537] mt-4">
            <div className="w-full p-4 dark:text-white">
              <div className="flex items-center justify-between mb-3">
                <p className="font-medium text-lg py-2">Generated CSS code</p>
                <CopyToClipboard
                  text={`.outer-box{
  perspective:${transform.perspective}px;
  perspective-origin: ${transform.perspectiveOriginX}% ${transform.perspectiveOriginY}%;
  width:20rem;
  height:20rem;
  align-items:center;
  justify-content:center;
  position:relative;
}
.inner-box{
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:600;
  font-size:1.5rem;
  line-height:2rem;
  transform-style: preserve-3d;
  transform:rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) rotateZ(${transform.rotateZ}deg) scaleX(${transform.scaleX}) scaleY(${transform.scaleY}) scaleZ(${transform.scaleZ}) translateX(${transform.translateX}px) translateY(${transform.translateY}px) translateZ(${transform.translateZ}px) skew(${transform.skewX}deg, ${transform.skewY}deg);
  color:${colors.text};
  background-color:${colors.bgColor};
}
`}
                  className=" px-4 py-2 text-white flex items-center justify-between gap-2 font-semibold dark:hover:bg-blue-600 transition-all duration-300 border-blue-500 bg-blue-500 rounded-lg text-sm"
                >
                  <button onClick={codeCopyNotification} className='flex'>
                    <span>Copy</span>
                    <span><FaRegCopy/></span>
                  </button>
                </CopyToClipboard>
              </div>
              <SyntaxHighlighter language="css" style={docco}>
                {`.outer-box{
  perspective:${transform.perspective}px;
  perspective-origin: ${transform.perspectiveOriginX}% ${transform.perspectiveOriginY}%;
  width:20rem;
  height:20rem;
  display:flex;
  align-items:center;
  justify-content:center;
  position:relative;
}
.inner-box{
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:600;
  font-size:1.5rem;
  line-height:2rem;
  transform-style: preserve-3d;
  transform:rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) rotateZ(${transform.rotateZ}deg) scaleX(${transform.scaleX}) scaleY(${transform.scaleY}) scaleZ(${transform.scaleZ}) translateX(${transform.translateX}px) translateY(${transform.translateY}px) translateZ(${transform.translateZ}px) skew(${transform.skewX}deg, ${transform.skewY}deg);
  color:${colors.text};
  background-color:${colors.bgColor};
}
`}
              </SyntaxHighlighter>
            </div>

            <div className="w-full p-4 dark:text-white">
              <div className="flex items-center justify-between mb-3">
                <p className="font-medium text-lg py-2">HTML code</p>
                <CopyToClipboard
                  text={`<div class='outer-box'>
  <div class='inner-box'>2D Transform</div>
</div>`}
                  className=" px-4 py-2 text-white flex items-center justify-between gap-2 font-semibold dark:hover:bg-blue-600 transition-all duration-300 border-blue-500 bg-blue-500 rounded-lg text-sm"
                >
                  <button onClick={codeCopyNotification} className='flex'>
                    <span>Copy</span>
                    <span><FaRegCopy/></span>
                  </button>
                </CopyToClipboard>
              </div>
              <SyntaxHighlighter language="javascript" style={docco}>
              {`<div class='outer-box'>
  <div class='inner-box'>2D Transform</div>
</div>`}
              </SyntaxHighlighter>
            </div>
          </div>
          {/* New Box ends Here */}
        </div>
      </div>
    </>
  );
}
