import Head from "next/head";
import { useRef, useEffect, useState } from "react";
import Draggable, { DraggableCore } from "react-draggable";
export default function BorderRadiusGenerator() {
  const borderBoxParentRef = useRef(null);
  const borderBoxRef = useRef(null);
  const leftYTRef = useRef();
  const leftYBRef = useRef();
  const rightYTRef=useRef();
  const rightYBRef=useRef();
  const topXLRef=useRef();
  const bottomXLRef=useRef();
  const topXRRef=useRef();
  const bottomXRRef=useRef();
  const [dotMargin, setDotMargin] = useState(0);
  const [boundsYT, setBoundsYT] = useState({ left: 0, top: 0, right: 0,  bottom: 500});
  const [boundsYB, setBoundsYB] = useState({ left: 0, top: -500, right: 0,  bottom: 0});
  const [boundsXL, setBoundsXL] = useState({ left: 0, top: 0, right: 500,  bottom: 0});
  const [boundsXR, setBoundsXR] = useState({ left: -500, top: 0, right: 0,  bottom: 0});
  useEffect(() => {
    const handleResize = () => {
      if (borderBoxParentRef.current && borderBoxRef.current) {
        const parentBoxHeight = borderBoxParentRef.current.clientHeight;
        const height = borderBoxRef.current.clientHeight;
        let values = { ...boundsYT };
        values.top = 0;
        setDotMargin((parentBoxHeight - height) / 2);
        values.bottom = height - 16;
        setBoundsYT(values);
        values={...boundsYB};
        values.top=-height+16
        setBoundsYB(values)
        values={...boundsXL}
        values.right=height-16;
        setBoundsXL(values)
        values={...boundsXR}
        values.left=-height+16;
        setBoundsXR(values)
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Head>
        <title>Border radius</title>
      </Head>
      {borderBoxParentRef && (
        <div>
          <div className="lg:w-[64rem] mx-auto w-full dark:bg-[#0f172a]">
            <h1 className="text-3xl md:text-5xl text-blue-500 text-center font-semibold pb-5  pt-3">
              Box Shadow Generators
            </h1>
            <div className="p-4 w-full dark:text-white">
              Here is your border radius tool
              <div
                ref={borderBoxParentRef}
                className="border-2 border-white w-[88vw] md:w-[30rem] h-[88vw] md:h-[30rem] mx-auto flex justify-center items-center relative"
              >
                <div
                  className="border-white w-[90%] h-[90%] bg-white"
                  ref={borderBoxRef}
                ></div>
                <Draggable  axis="y" nodeRef={leftYTRef} position={null} bounds={boundsYT} scale={1} >
                  <div ref={leftYTRef} className=" w-4 h-4 bg-red-600 absolute left-[-0.5rem] rounded-full" style={{ top: `${dotMargin}px` }} ></div>
                </Draggable>
                
                <Draggable  axis="y" nodeRef={rightYTRef} position={null} bounds={boundsYT} scale={1} >
                  <div ref={rightYTRef} className=" w-4 h-4 bg-green-600 absolute right-[-0.5rem] rounded-full" style={{ top: `${dotMargin}px` }} ></div>
                </Draggable>
                <Draggable  axis="y" nodeRef={leftYBRef} position={null} bounds={boundsYB} scale={1} >
                  <div ref={leftYBRef} className=" w-4 h-4 bg-green-600 absolute left-[-0.5rem] rounded-full" style={{ bottom: `${dotMargin}px` }} ></div>
                </Draggable>
                <Draggable  axis="y" nodeRef={rightYBRef} position={null} bounds={boundsYB} scale={1} >
                  <div ref={rightYBRef} className=" w-4 h-4 bg-red-600 absolute right-[-0.5rem] rounded-full" style={{ bottom: `${dotMargin}px` }} ></div>
                </Draggable>
                <Draggable  axis="x" nodeRef={topXLRef} position={null} bounds={boundsXL} scale={1} >
                  <div ref={topXLRef} className=" w-4 h-4 bg-pink-600 absolute top-[-0.5rem] rounded-full" style={{ left: `${dotMargin}px` }} ></div>
                </Draggable>
                <Draggable  axis="x" nodeRef={bottomXLRef} position={null} bounds={boundsXL} scale={1} >
                  <div ref={bottomXLRef} className=" w-4 h-4 bg-yellow-600 absolute bottom-[-0.5rem] rounded-full" style={{ left: `${dotMargin}px` }} ></div>
                </Draggable>
                <Draggable  axis="x" nodeRef={topXRRef} position={null} bounds={boundsXR} scale={1} >
                  <div ref={topXRRef} className=" w-4 h-4 bg-yellow-600 absolute top-[-0.5rem] rounded-full" style={{ right: `${dotMargin}px` }} ></div>
                </Draggable>
                <Draggable  axis="x" nodeRef={bottomXRRef} position={null} bounds={boundsXR} scale={1} >
                  <div ref={bottomXRRef} className=" w-4 h-4 bg-pink-600 absolute bottom-[-0.5rem] rounded-full" style={{ right: `${dotMargin}px` }} ></div>
                </Draggable>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
