import chroma from "chroma-js";

import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "styles/style.module.css";

export default function ColorTools() {
  const [shades, setShades] = useState([]);
  const [lrgbShades,setLrgbShades]=useState([])
  const [clShades,setClShades]=useState([])
  const [colors, setColors] = useState({
    startColor: "#000000",
    endColor: "#ffffff",
  });
  const shadesGenerator = () => {
    setShades(
      chroma.scale([colors.startColor, colors.endColor]).mode("lab").colors(10)
    );
    setLrgbShades(
        chroma.scale([colors.startColor, colors.endColor]).mode("lrgb").colors(10)
    );
    setClShades(
        chroma.scale([colors.startColor, colors.endColor]).classes(10)
    );
  };
  useEffect(() => {
    shadesGenerator();
}, [colors]);
console.log(clShades);
  return (
    <>
      <Head>
        <title>Color Tools</title>
      </Head>
      <div>
        <div className="lg:w-[64rem] mx-auto w-full">
          <h1
            className={`md:text-5xl text-4xl text-blue-500 text-center font-semibold pb-5  pt-3 ${styles.textGrad}`}
          >
            Color Tools
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
            <div className="flex items-center md:flex-row flex-col w-full">
              {shades.map((color, index) => {
                return (
                  <div key={index}
                    className="flex h-40 w-full items-center justify-center font-semibold"
                    style={{
                      backgroundColor: color,
                      color: shades[9-index],
                    }}
                  >
                    {color}
                  </div>
                );
              })}
            </div>
            <div className="flex items-center md:flex-row flex-col w-full mt-4">
              {lrgbShades.map((color, index) => {
                return (
                  <div key={index}
                    className="flex h-40 w-full items-center justify-center font-semibold"
                    style={{
                      backgroundColor: color,
                      color: shades[9-index],
                    }}
                  >
                    {color}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}