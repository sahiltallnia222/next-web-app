import chroma from "chroma-js";

import Head from "next/head";
import {useState } from "react";
import styles from "styles/style.module.css";
export default function ColorTools() {
const [color,setColor]=useState('#00ffaa')
const [dark,setDark]=useState(0)
const [bright,setBright]=useState(0)
const [saturate,setSaturate]=useState(0)
  return (
    <>
      <Head>
        <title>Color Lightness</title>
      </Head>
      <div>
        <div className="lg:w-[64rem] mx-auto w-full">
          <h1
            className={`md:text-5xl text-4xl text-blue-500 text-center font-semibold pb-5  pt-3 ${styles.textGrad}`}
          >
            Color Lightness
          </h1>
          <div className="dark:bg-[#1d2537] p-4 bg-gray-100 w-full">
          <div className="flex flex-1  w-full justify-between items-center dark:bg-[#1d2537] p-2 dark:text-white">
                <span>Choose Color</span>
                <span className="flex items-center justify-center cursor-pointer">
                  <label
                    htmlFor="ChooseColor"
                    className="border-2 border-black cursor-pointer px-10 py-4 rounded"
                    style={{
                      backgroundColor:color,
                    }}
                  ></label>
                  <input
                    type="color"
                    id="ChooseColor"
                    className="w-0 invisible"
                    onChange={(e) => {
                        setColor(e.target.value)
                    }}
                  />
                </span>
              </div>
            <div className="dark:text-white">
                <div className=" h-40 mt-4" style={{backgroundColor:chroma(color).darken(dark)}}></div>
                <div className=" py-2">
                <div className="flex items-center justify-between text-sm py-2">
                  <div>Darkness</div>
                  <div>{dark}</div>
                </div>
                <div>
                  <input
                    type="range"
                    value={dark*10}
                    onChange={(e) => {
                        setDark(e.target.value/10)
                    }}
                    min="0"
                    max="50"
                    className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
                  />
                </div>
              </div>
                <div className=" h-40 mt-4" style={{backgroundColor:chroma(color).brighten(bright)}}></div>
                <div className=" py-2">
                <div className="flex items-center justify-between text-sm py-2">
                  <div>Brightness</div>
                  <div>{bright}</div>
                </div>
                <div>
                  <input
                    type="range"
                    value={bright*10}
                    onChange={(e) => {
                        setBright(e.target.value/10)
                    }}
                    min="0"
                    max="50"
                    className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
                  />
                </div>
              </div>
              <div className=" h-40 mt-4" style={{backgroundColor:chroma(color).saturate(saturate)}}></div>
                <div className=" py-2">
                <div className="flex items-center justify-between text-sm py-2">
                  <div>Saturation</div>
                  <div>{saturate}</div>
                </div>
                <div>
                  <input
                    min="0"
                    max="100"
                    type="range"
                    value={saturate*10}
                    onChange={(e) => {
                        let value=(e.target.value)/10;
                        setSaturate(value)
                    }}
                    className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
