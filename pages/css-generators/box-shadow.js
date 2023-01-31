import Head from "next/head";
import { useState } from "react";
export default function Boxshadow() {

    const [horizontalOffset,setHorizontalOffset]=useState(50)
    const [verticalOffset,setVerticalOffset]=useState(50)
    const [blurRadius,setBlurRadius]=useState(50)
    const [spreadRadius,setSpreadRadius]=useState(50)
    const [shadowColorOpacity,setShadowColorOpacity]=useState(50)

  return (
    <>
      <Head>
        <title>Box Shadow Generator</title>
      </Head>
      <div className="border-4 h-screen">
        <div className="mt-20 mx-auto border-blue-600 w-[64rem] h-[32rem] flex items-center ">
          <div className="flex-1 border border-green-600 h-full flex justify-center items-center">
            <div className="shadow-xl w-[400px] h-[400px] border-4 flex justify-center items-center">
              Box
            </div>
          </div>
          <div className="flex-1 border border-green-600 h-full font-semibold">
            <div className="px-4 py-2">
                <div className="flex items-center justify-between text-sm p-2 border">
                    <div>Horizontal offset</div>
                    <div>{horizontalOffset} px</div>
                </div>
                <div className="border">
                    <input type="range" onChange={(e)=>{setHorizontalOffset(e.target.value)}} min='0' max='100' className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer" />
                </div>
            </div>
            <div className="px-4 py-2">
                <div className="flex items-center justify-between text-sm p-2 border">
                    <div>Vertical offset</div>
                    <div>{verticalOffset} px</div>
                </div>
                <div className="border">
                    <input type="range" onChange={(e)=>{setVerticalOffset(e.target.value)}} min='0' max='100' className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer" />
                </div>
            </div>
            <div className="px-4 py-2">
                <div className="flex items-center justify-between text-sm p-2 border">
                    <div>Blur radius</div>
                    <div>{blurRadius} px</div>
                </div>
                <div className="border">
                    <input type="range" onChange={(e)=>{setBlurRadius(e.target.value)}} min='0' max='100' className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer" />
                </div>
            </div>
            <div className="px-4 py-2">
                <div className="flex items-center justify-between text-sm p-2 border">
                    <div>Spread radius</div>
                    <div>{spreadRadius} px</div>
                </div>
                <div className="border">
                    <input type="range" min='0' max='100' onChange={(e)=>{setSpreadRadius(e.target.value)}} className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer" />
                </div>
            </div>
            <div className="px-4 py-2">
                <div className="flex items-center justify-between text-sm p-2 border">
                    <div>Shadow Color Opacity</div>
                    <div>{shadowColorOpacity }px</div>
                </div>
                <div className="border">
                    <input type="range" min='0' onChange={(e)=>{setShadowColorOpacity(e.target.value)}} max='100' className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer" />
                </div>
            </div>
            <div className="px-4 py-2">
                background Color
                box Color
                shadow color
                inset
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
