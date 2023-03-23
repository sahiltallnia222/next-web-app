import Head from "next/head";
import styles from "styles/style.module.css";
import { SiConvertio } from "react-icons/si";
import { toast } from "react-toastify";
import { useRef, useState } from "react";

export default function RgbatoHexConverter() {
  const [color, setColor] = useState();
  const [error,setError]=useState(false);
  const rgbaRef = useRef();
  const errorNotification = () => {
    toast.error("Invalid RGBA Value !", {
      position: "top-center",
      autoClose: 3000,
      theme: "light",
    });
  };

  function rgbaToHex(rgbaCode) {
    const rgbaColor =rgbaCode;
    let [r, g, b, a] = rgbaColor
    .substring(rgbaColor.indexOf("(") + 1, rgbaColor.lastIndexOf(")"))
    .split(",").map(val=>val.split(' ').join('')).map(val=>parseFloat(val.trim()));
    if(r>255 || g>255 || b>255 || a>1 || r<0 || g<0|| b<0||a<0 ||r==undefined||r==NaN || g==undefined||g==NaN||b==undefined||b==NaN){
      errorNotification();
      setColor('Invalid RGBA Code')
      return;
    }
    if(a==undefined||a==NaN){
      a=1;
    }
    r = Math.round(r);
    g = Math.round(g);
    b = Math.round(b);
    a = Math.round(a * 255);
    setColor("#" +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1) +
    ((1 << 8) + a).toString(16).slice(1))
  }


  return (
    <>
      <Head>
        <title>RGBA to Hex Converter | WebVerse</title>
        <meta
        name="description"
        content="RGBA to Hex convertor tool converts rgba values of color codes into hex value."
      />
      <meta name="keywords" content="Webverse, web tools, RGBA to Hex, RGBA to Hex convertor, color code convertor"></meta>
      <meta property="og:title" content="Color Mixture Tool | WebVerse" />
        <meta
          property="og:description"
          content="RGBA to Hex convertor tool converts rgba values of color codes into hex value."
        />
        <meta
          property="og:image"
          content="/images/og-images/home-page-og.png"
        />
      </Head>
      <div>
        <div className="lg:w-[64rem] mx-auto w-full">
          <h1
            className={`md:text-5xl text-4xl text-blue-500 text-center font-semibold pb-5  pt-3 ${styles.textGrad}`}
          >
            RGBA to Hex Converter
          </h1>
          <div className="dark:text-white">
            <div className="dark:bg-[#1d2537] p-4 bg-gray-200  w-full">
              <div className="md:w-1/2 w-full dark:bg-[#0f172a] bg-white p-4 mx-auto">
                <div>
                <div>
                  <div className="md:border flex flex-col md:bg-white gap-2 md:gap-0 items-center md:flex-row text-white">
                    <input required type="text" ref={rgbaRef} className="flex-1 w-full md:w-auto outline-none p-2 border-none text-black px-4 " placeholder="RGBA Code" />
                    <span className="w-full md:w-auto">
                      <button onClick={()=>{rgbaToHex(rgbaRef.current.value)}} className="flex w-full md:w-auto justify-center items-center gap-2 bg-blue-500 hover:bg-blue-600 px-5 py-2">Convert <SiConvertio/></button>
                    </span>
                  </div>
                </div>
                </div>
                {color && (
                  <p className="mt-4 text-center">
                    {color == "Invalid RGBA Code"
                      ? "Invalid RGBA Code"
                      : `hex code : ${color}`}
                  </p>
                )}
                <div
                  className="h-40 flex items-center justify-center border-2 mt-4 text-2xl"
                  style={{ backgroundColor: color }}
                >
                  {color}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
