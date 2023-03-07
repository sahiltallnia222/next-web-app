import Head from "next/head";
import styles from "styles/style.module.css";
import {SiConvertio} from 'react-icons/si'
import { toast } from "react-toastify";
import { useRef,useState } from "react";

export default function HextoRgbaConverter() {
  const [color,setColor]=useState();
  const hexRef=useRef()
  const errorNotification = () => {
    toast.error("Invalid Hex Value !", {
      position: "top-center",
      autoClose: 3000,
      theme: "light",
    });
  };


  function hexToRgba(hexCode) {
    hexCode = hexCode.replace('#', '');
    const hexLen = hexCode.length;
    const hexVals=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
    for(let i=0;i<hexCode.length;i++){
      if(!hexVals.includes(hexCode[i])){
        errorNotification()
        setColor('Invalid hex code')
        return;
      }
    }
    if (hexLen === 3) {
      hexCode = hexCode.split('').map(char => char + char).join('');
    } else if (hexLen !== 8 && hexLen !== 6) {
      errorNotification()
      setColor('Invalid hex code')
      return;
    }
    let r, g, b, a;
    
    if (hexLen === 8) {
      r = parseInt(hexCode.slice(0, 2), 16);
      g = parseInt(hexCode.slice(2, 4), 16);
      b = parseInt(hexCode.slice(4, 6), 16);
      a = (parseInt(hexCode.slice(6), 16) / 255).toFixed(2);
    } else {
      const hexInt = parseInt(hexCode, 16);
      r = (hexInt >> 16) & 0xff;
      g = (hexInt >> 8) & 0xff;
      b = hexInt & 0xff;
      a = 1;
    }
    setColor(`rgba(${r}, ${g}, ${b}, ${a})`)
    // return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
  
  return (
    <>
      <Head>
        <title>Hex to RGBA Converter</title>
      </Head>
      <div>
        <div className="lg:w-[64rem] mx-auto w-full">
          <h1
            className={`md:text-5xl text-4xl text-blue-500 text-center font-semibold pb-5  pt-3 ${styles.textGrad}`}
          >
            Hex to RGBA Converter
          </h1>
          <div className="dark:text-white">
            <div className="dark:bg-[#1d2537] p-4 bg-gray-200 w-full">
              <div className="md:w-1/2 w-full dark:bg-[#0f172a] bg-white p-4 mx-auto">
                <div>
                  <div className="md:border flex flex-col md:bg-white gap-2 md:gap-0 items-center md:flex-row text-white">
                    <input required type="text" ref={hexRef} className="flex-1 w-full md:w-auto outline-none p-2 border-none text-black px-4 " placeholder="Hex Code" />
                    <span className="w-full md:w-auto">
                      <button onClick={()=>{hexToRgba(hexRef.current.value)}} className="flex w-full md:w-auto justify-center items-center gap-2 bg-blue-500 hover:bg-blue-600 px-5 py-2">Convert <SiConvertio/></button>
                    </span>
                  </div>
                </div>
                {color &&<p className="mt-4 text-center">{color=='Invalid hex code'?'Invalid hex code':`rgba code : ${color}`}</p>}
                <div className="h-40 flex items-center justify-center border-2 mt-4 text-2xl" style={{backgroundColor:color}}>{color}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
