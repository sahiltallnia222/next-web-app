import Head from "next/head";
import { useRef, useEffect, useState } from "react";
import Draggable, { DraggableCore } from "react-draggable";
import {VscDebugBreakpointLogUnverified} from 'react-icons/vsc'


export default function BorderRadiusGenerator() {
  const borderBoxParentRef = useRef();
  const borderBoxRef = useRef();
  const leftYTRef = useRef();
  const leftYBRef = useRef();
  const rightYTRef=useRef();
  const rightYBRef=useRef();
  const topXLRef=useRef();
  const bottomXLRef=useRef();
  const topXRRef=useRef();
  const bottomXRRef=useRef();
  const bRef=useRef()
  const [dotMargin, setDotMargin] = useState(0);
  const [bounds,setBounds]=useState({ left:0,top:0,right:0,bottom:0})
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [radiusValues,setRadiusValues]=useState({YLT:0,YLB:0,YRT:0,YRB:0,XTL:0,XTR:0,XBL:0,XBR:0})
  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };
  useEffect(() => {
    const handleResize = () => {
      if (borderBoxParentRef.current && borderBoxRef.current) {
        const parentBoxHeight = borderBoxParentRef.current.clientHeight;
        const height = borderBoxRef.current.clientHeight;
        setDotMargin((parentBoxHeight - height) / 2);
        let values={...bounds}
        values.bottom= height - 34;
        values.top=-height+34;
        values.right=height-34;
        values.left=-height+34;
        setBounds(values)
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
   const handleRadiusValues=(x)=>{

   }
  console.log(radiusValues);
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
              <p>Current position: {position.x}, {parseInt((position.y*100)/(bounds.bottom))}</p>
            </h1>
            <div className="p-4 w-full dark:text-white">
              Here is your border radius tool
              <div
                ref={borderBoxParentRef}
                className="border-2 border-white w-[88vw] md:w-[30rem] h-[88vw] md:h-[30rem] mx-auto flex justify-center items-center relative"
              >
                <div
                  className="w-[90%] h-[90%] flex items-center justify-center"
                  ref={borderBoxRef}
                ><div className="w-[95%] h-[95%] border-2" ref={bRef}></div></div>
                <Draggable onDrag={handleDrag} axis="y" nodeRef={leftYTRef} position={null} bounds={{ left: 0, top: 0, right: 0,  bottom: bounds.bottom}} scale={1} >
                  <div ref={leftYTRef} className="absolute cursor-pointer left-[-17px] flex items-center justify-center" style={{ top: `${dotMargin}px` }} ><VscDebugBreakpointLogUnverified size={'34px'}/></div>
                </Draggable>
                
                <Draggable  axis="y" nodeRef={rightYTRef} position={null} bounds={{ left: 0, top: 0, right: 0,  bottom: bounds.bottom}} scale={1} >
                  <div ref={rightYTRef} className="absolute cursor-pointer right-[-17px] flex items-center justify-center" style={{ top: `${dotMargin}px` }} ><VscDebugBreakpointLogUnverified size={'34px'}/></div>
                </Draggable>

                <Draggable  axis="y" nodeRef={leftYBRef} position={null} bounds={{ left: 0, top: bounds.top, right: 0,  bottom:0}}  scale={1} >
                  <div ref={leftYBRef} className="absolute cursor-pointer left-[-17px] flex items-center justify-center" style={{ bottom: `${dotMargin}px` }} ><VscDebugBreakpointLogUnverified size={'34px'}/></div>
                </Draggable>
                <Draggable  axis="y" nodeRef={rightYBRef} position={null} bounds={{ left: 0, top: bounds.top, right: 0,  bottom: 0}}  scale={1} >
                  <div ref={rightYBRef} className="absolute cursor-pointer right-[-17px] flex items-center justify-center" style={{ bottom: `${dotMargin}px` }} ><VscDebugBreakpointLogUnverified size={'34px'}/></div>
                </Draggable>


                <Draggable  axis="x" nodeRef={topXLRef} position={null} bounds={{ left: 0, top: 0, right: bounds.right,  bottom: 0}} scale={1} >
                  <div ref={topXLRef} className="absolute cursor-pointer top-[-17px] flex items-center justify-center" style={{ left: `${dotMargin}px` }} ><VscDebugBreakpointLogUnverified size={'34px'}/></div>
                </Draggable>
                <Draggable  axis="x" nodeRef={bottomXLRef} position={null} bounds={{ left: 0, top: 0, right: bounds.right,  bottom: 0}} scale={1} >
                  <div ref={bottomXLRef} className="absolute cursor-pointer bottom-[-17px] flex items-center justify-center" style={{ left: `${dotMargin}px` }} ><VscDebugBreakpointLogUnverified size={'34px'}/></div>
                </Draggable>
                <Draggable  axis="x" nodeRef={topXRRef} position={null} bounds={{ left: bounds.left, top: 0, right: 0,  bottom: 0}} scale={1} >
                  <div ref={topXRRef} className="absolute cursor-pointer top-[-17px] flex items-center justify-center" style={{ right: `${dotMargin}px` }} ><VscDebugBreakpointLogUnverified size={'34px'}/></div>
                </Draggable>
                <Draggable  axis="x" nodeRef={bottomXRRef} position={null} bounds={{ left: bounds.left, top: 0, right: 0,  bottom: 0}} scale={1} >
                  <div ref={bottomXRRef} className="absolute cursor-pointer  bottom-[-17px] flex items-center justify-center" style={{ right: `${dotMargin}px` }}><VscDebugBreakpointLogUnverified size={'34px'}/></div>
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
