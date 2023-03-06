import chroma from "chroma-js";

import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "styles/style.module.css";

export default function ColorTools() {
    const [colors, setColors] = useState({
        startColor: "#000000",
        endColor: "#ffffff",
      });
      const [ratio,setRatio]=useState(0.5)
      const [color,setColor]=useState('#00ffaa')
      useEffect(()=>{
        setColor(chroma.mix(colors.startColor,colors.endColor, ratio));
      },[colors,ratio])
  return (
    <>
      <Head>
        <title>Color Mixture Tool</title>
      </Head>
      <div>
        <div className="lg:w-[64rem] mx-auto w-full dark:text-white">
          <h1
            className={`md:text-5xl text-4xl text-blue-500 text-center font-semibold pb-5  pt-3 ${styles.textGrad}`}
          >
            Color Mixture Tool
          </h1>
          <div className="dark:bg-[#1d2537] p-4 bg-gray-100 w-full">
            <div className="flex items-start md:items-center md:flex-row flex-col  justify-center gap-3">
              <div className="flex flex-1  w-full justify-between items-center dark:bg-[#1d2537] p-2 dark:text-white">
                <span>Start Color</span>
                <span className="flex items-center justify-center cursor-pointer">
                  <label
                    htmlFor="StartColor"
                    className="border-2 border-black cursor-pointer px-10 py-4 rounded"
                    style={{
                      backgroundColor:colors.startColor,
                    }}
                  ></label>
                  <input
                    type="color"
                    id="StartColor"
                    className="w-0 invisible"
                    onChange={(e) => {
                        let values={...colors}
                        values.startColor=e.target.value
                        setColors(values)
                    }}
                  />
                </span>
              </div>
              <div className="flex flex-1 w-full justify-between items-center dark:bg-[#1d2537] p-2 dark:text-white">
                <span>End Color</span>
                <span className="flex items-center justify-center cursor-pointer">
                  <label
                    htmlFor="EndColor"
                    className="border-2 border-black cursor-pointer px-10 py-4 rounded"
                    style={{
                      backgroundColor: colors.endColor,
                    }}
                  ></label>
                  <input
                    type="color"
                    id="EndColor"
                    className="w-0 invisible"
                    onChange={(e) => {
                        let values={...colors}
                        values.endColor=e.target.value
                        setColors(values)
                    }}
                  />
                </span>
              </div>
            </div>
            <div className=" py-2">
                <div className="flex items-center justify-between text-sm py-2">
                  <div>Ratio</div>
                  <div>{ratio}</div>
                </div>
                <div>
                  <input
                    min="0"
                    max="100"
                    type="range"
                    value={ratio*100}
                    onChange={(e) => {
                        let value=(e.target.value)/100;
                        setRatio(value)
                    }}
                    className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
                  />
                </div>
              </div>
            <div className="h-40" style={{backgroundColor:color}}>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
