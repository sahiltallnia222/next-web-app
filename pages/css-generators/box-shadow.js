import Head from "next/head";
import styles from "styles/style.module.css";
import { useState } from "react";
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
  return (
    <>
      <Head>
        <title>Box Shadow Generator</title>
      </Head>
      <div className="border-4">

        {/* center div ------------------------------------------------------------------- */}
        <div className="lg:w-[64rem] mx-auto w-full mt-2 border-2">
          <h1 className="text-3xl font-semibold py-2 w-[95vw] md:w-96 border mx-auto text-center mb-5" style={{
                  boxShadow: `${horizontalOffset}px ${verticalOffset}px ${blurRadius}px ${spreadRadius}px ${shadowColor} ${inset}`,
                  backgroundColor: `${boxColor}`,
                }}>
            Box Shadow Generator
          </h1>
          
          <div className="w-full grid grid-cols-1 items-center md:grid-cols-2">
            <div className=" flex justify-center items-center h-[40vh] md:h-full">
              <div
                className="shadow-xl w-[80%] h-[80%] border flex justify-center items-center"
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
        </div>

        {/* center div ends here ------------------------------------------------------------------- */}
      </div>
    </>
  );
}