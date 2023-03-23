import Head from "next/head";
import styles from "styles/style.module.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaRegCopy } from "react-icons/fa";
import {RxReset} from 'react-icons/rx'
import {BsCursorFill } from "react-icons/bs";
import {BsFillLightningFill} from 'react-icons/bs'
import { CgScrollV } from "react-icons/cg";
import { MdGradient} from "react-icons/md";
import Link from "next/link";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import nightOwl from 'react-syntax-highlighter/dist/cjs/styles/prism/night-owl';
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('css', css);


export default function ButtonGenerator() {
  const [showShadow,setShowShadow]=useState(true);
  const [showHover,setShowHover]=useState(true);
  const [properties, setProperties] = useState({});
  
  useEffect(()=>{
    if(localStorage.getItem('button-generator')){
      setProperties(JSON.parse(localStorage.getItem('button-generator')))
    }else{
      let prop={
        paddingX: 17,
        paddingY: 11,
        borderRadius: 36,
        color: "#ffffff",
        bgColor: "#9a48ef",
        fontSize: 20,
        fontWeight: 400,
        hoverBgColor: "#9a48ef",
        hoverColor: "#ffffff",
        transitionTime:0.1,
        borderWidth:0,
        borderColor:'#aef954',
        translateY:5,
        shadowDepth:7,
      }
      localStorage.setItem('button-generator',JSON.stringify(prop))
      setProperties(prop)
    }
  },[])

  useEffect(()=>{
    if(Object.keys(properties).length>0){localStorage.setItem('button-generator',JSON.stringify(properties))}
  },[properties])

  const codeCopyNotification = () => {
    toast.success("Code copied successfully !", {
      position: "top-center",
      autoClose: 3000,
      theme: "light",
    });
  };

  const handleGenReset=()=>{
    let prop={
      paddingX: 17,
      paddingY: 11,
      borderRadius: 36,
      color: "#ffffff",
      bgColor: "#9a48ef",
      fontSize: 20,
      fontWeight: 400,
      hoverBgColor: "#9a48ef",
      hoverColor: "#ffffff",
      transitionTime:0.1,
      borderWidth:0,
      borderColor:'#aef954',
      translateY:5,
      shadowDepth:7,
    }
    localStorage.setItem('button-generator',JSON.stringify(prop))
    setProperties(prop)
  }

  return (
    <>
      <Head>
        <title>CSS Button Generator | WebVerse</title>
        <meta
        name="description"
        content="Make stunning buttons in css using free css button generator. This css button generator contains all the properties that requires to make a button. People can also add hover effect and shadow effects using this css button generator and see the live preview of changes."
      />
      <meta name="keywords" content="Webverse, web tools, free css generators, button generator,button generator online"></meta>
      <meta property="og:title" content="CSS Button Generator | WebVerse" />
        <meta
          property="og:description"
          content="Make stunning buttons in css using free css button generator. This css button generator contains all the properties that requires to make a button. People can also add hover effect and shadow effects using this css button generator and see the live preview of changes."
        />
        <meta
          property="og:image"
          content="/images/og-images/home-page-og.png"
        />
      </Head>
      <div>
        <div className="lg:w-[64rem] mx-auto w-full dark:text-white">
          <h1
            className={`md:text-5xl text-4xl text-blue-500 text-center font-semibold pb-5  pt-3 ${styles.textGrad}`}
          >
            CSS Button Generator
          </h1>
          <p className=" leading-9 text-lg text-justify p-4  py-4 lg:px-0 dark:text-white">
          Make stunning buttons in css using free css button generator. This css button generator contains all the properties that requires to make a button. People can also add hover effect and shadow effects using this css button generator and see the live preview of changes.
          </p>
          {/* generator starts */}
         {Object.keys(properties).length>0 && <div className="lg:dark:bg-[#1d2537] lg:bg-gray-100  p-4 dark:text-white mx-2 md:mx-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <div className="flex items-center justify-center h-[12rem] border-b-2 ">
                  <style jsx>{`
                    .btn {
                      padding: ${properties.paddingY}px ${properties.paddingX}px;
                      border-radius: ${properties.borderRadius}px;
                      font-size: ${properties.fontSize}px;
                      background-color: ${properties.bgColor};
                      color: ${properties.color};
                      font-weight: ${properties.fontWeight};
                      transition:all ${properties.transitionTime}s;
                      border:${properties.borderWidth}px solid ${properties.borderColor} ;
                      outline:'none';
                      display: inline-block;
                    }
                    .actv{
                      box-shadow:0 ${properties.shadowDepth}px #ababab;
                    }
                    .hvr:hover {
                      color: ${properties.hoverColor};
                      background-color: ${properties.hoverBgColor};
                    }
                    .actv:active {
                      box-shadow:0 ${properties.shadowDepth-3}px #404344;
                      transform: translateY(${properties.translateY}px);
                    }
                  `}</style>
                  <button
                    className={`btn ${showShadow && 'actv'} ${showHover && 'hvr'}`}>
                    Click Here
                  </button>
                </div>
                <div className="flex justify-between items-center lg:dark:bg-[#0f172a] dark:bg-[#1d2537] bg-white p-2 mt-4  dark:text-white">
                  <span>Color</span>
                  <span className="flex items-center justify-center">
                    <label
                      htmlFor="color"
                      className="border-2 border-black cursor-pointer  px-10 py-4 rounded"
                      style={{ backgroundColor: properties.color }}
                    ></label>
                    <input
                      type="color"
                      id="color"
                      value={properties.color}
                      className="w-0 invisible"
                      onChange={(e) => {
                        let values = { ...properties };
                        values.color = e.target.value;
                        setProperties(values);
                      }}
                    />
                  </span>
                </div>
                <div className="flex justify-between items-center lg:dark:bg-[#0f172a] dark:bg-[#1d2537] bg-white p-2 mt-4  dark:text-white">
                  <span>Backgound Color</span>
                  <span className="flex items-center justify-center">
                    <label
                      htmlFor="bg-color"
                      className="border-2 border-black cursor-pointer  px-10 py-4 rounded"
                      style={{ backgroundColor: properties.bgColor }}
                    ></label>
                    <input
                      type="color"
                      id="bg-color"
                      value={properties.bgColor}
                      className="w-0 invisible"
                      onChange={(e) => {
                        let values = { ...properties };
                        values.bgColor = e.target.value;
                        setProperties(values);
                      }}
                    />
                  </span>
                </div>
               {showHover &&  <div className="flex justify-between items-center lg:dark:bg-[#0f172a] dark:bg-[#1d2537] bg-white p-2 mt-4  dark:text-white">
                  <span>Hover Color</span>
                  <span className="flex items-center justify-center">
                    <label
                      htmlFor="hoverColor"
                      className="border-2 border-black cursor-pointer  px-10 py-4 rounded"
                      style={{ backgroundColor: properties.hoverColor }}
                    ></label>
                    <input
                      type="color"
                      id="hoverColor"
                      value={properties.color}
                      className="w-0 invisible"
                      onChange={(e) => {
                        let values = { ...properties };
                        values.hoverColor = e.target.value;
                        setProperties(values);
                      }}
                    />
                  </span>
                </div>}
               {showHover && <div className="flex justify-between items-center lg:dark:bg-[#0f172a] dark:bg-[#1d2537] bg-white p-2 mt-4  dark:text-white">
                  <span>Hover Backgound Color</span>
                  <span className="flex items-center justify-center">
                    <label
                      htmlFor="hover-bg-color"
                      className="border-2 border-black cursor-pointer  px-10 py-4 rounded"
                      style={{ backgroundColor: properties.hoverBgColor }}
                    ></label>
                    <input
                      type="color"
                      id="hover-bg-color"
                      value={properties.hoverBgColor}
                      className="w-0 invisible"
                      onChange={(e) => {
                        let values = { ...properties };
                        values.hoverBgColor = e.target.value;
                        setProperties(values);
                      }}
                    />
                  </span>
                </div>}
                <div className="flex justify-between items-center lg:dark:bg-[#0f172a] dark:bg-[#1d2537] bg-white p-2 mt-4  dark:text-white">
                  <span>Border Color</span>
                  <span className="flex items-center justify-center">
                    <label
                      htmlFor="borderColor-color"
                      className="border-2 border-black cursor-pointer  px-10 py-4 rounded"
                      style={{ backgroundColor: properties.borderColor }}
                    ></label>
                    <input
                      type="color"
                      id="borderColor-color"
                      value={properties.borderColor}
                      className="w-0 invisible"
                      onChange={(e) => {
                        let values = { ...properties };
                        values.borderColor = e.target.value;
                        setProperties(values);
                      }}
                    />
                  </span>
                </div>
                <div>
                <button onClick={handleGenReset} className="mt-4 px-4 py-2 text-white flex items-center justify-between gap-2 font-semibold dark:hover:bg-blue-600 transition-all duration-300 border-blue-500 bg-blue-500 rounded-lg text-sm">
                  <span>Reset</span>
                  <span><RxReset /></span>
                </button>
                </div>
              </div>
              {/* right side */}
              <div>
                <div>
                  <div className="lg:px-4 py-2">
                    <div className="flex items-center justify-between text-sm">
                      <div>Padding X</div>
                      <div>{properties.paddingX} px</div>
                    </div>
                    <div>
                      <input
                        type="range"
                        value={properties.paddingX}
                        onChange={(e) => {
                          let values = { ...properties };
                          values.paddingX = e.target.value;
                          setProperties(values);
                        }}
                        min="0"
                        max="50"
                        className="w-full h-1 bg-gray-300 rounded-md appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="lg:px-4 py-2">
                    <div className="flex items-center justify-between text-sm">
                      <div>Padding Y</div>
                      <div>{properties.paddingY} px</div>
                    </div>
                    <div>
                      <input
                        type="range"
                        value={properties.paddingY}
                        onChange={(e) => {
                          let values = { ...properties };
                          values.paddingY = e.target.value;
                          setProperties(values);
                        }}
                        min="0"
                        max="50"
                        className="w-full h-1 bg-gray-300  rounded-md appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="lg:px-4 py-2">
                    <div className="flex items-center justify-between text-sm">
                      <div>Border Radius</div>
                      <div>{properties.borderRadius} px</div>
                    </div>
                    <div>
                      <input
                        type="range"
                        value={properties.borderRadius}
                        onChange={(e) => {
                          let values = { ...properties };
                          values.borderRadius = e.target.value;
                          setProperties(values);
                        }}
                        min="0"
                        max="100"
                        className="w-full h-1 bg-gray-300 rounded-md appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="lg:px-4 py-2">
                    <div className="flex items-center justify-between text-sm">
                      <div>Font Size</div>
                      <div>{properties.fontSize} px</div>
                    </div>
                    <div>
                      <input
                        type="range"
                        value={properties.fontSize}
                        onChange={(e) => {
                          let values = { ...properties };
                          values.fontSize = e.target.value;
                          setProperties(values);
                        }}
                        min="15"
                        max="50"
                        className="w-full h-1 bg-gray-300 rounded-md appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="lg:px-4 py-2">
                    <div className="flex items-center justify-between text-sm">
                      <div>Font Weight</div>
                      <div>{properties.fontWeight}</div>
                    </div>
                    <div>
                      <input
                        type="range"
                        value={properties.fontWeight}
                        onChange={(e) => {
                          let values = { ...properties };
                          values.fontWeight = e.target.value;
                          setProperties(values);
                        }}
                        min="100"
                        max="900"
                        step={100}
                        className="w-full h-1 bg-gray-300 rounded-md appearance-none cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="lg:px-4 py-2">
                    <div className="flex items-center justify-between text-sm">
                      <div>Transition Time</div>
                      <div>{properties.transitionTime}</div>
                    </div>
                    <div>
                      <input
                        type="range"
                        value={properties.transitionTime}
                        onChange={(e) => {
                          let values = { ...properties };
                          values.transitionTime = e.target.value;
                          setProperties(values);
                        }}
                        min="0"
                        max="1"
                        step={0.001}
                        className="w-full h-1 bg-gray-300 rounded-md appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="lg:px-4 py-2">
                    <div className="flex items-center justify-between text-sm">
                      <div>Border Width</div>
                      <div>{properties.borderWidth}</div>
                    </div>
                    <div>
                      <input
                        type="range"
                        value={properties.borderWidth}
                        onChange={(e) => {
                          let values = { ...properties };
                          values.borderWidth = e.target.value;
                          setProperties(values);
                        }}
                        min="0"
                        max="20"
                        step={1}
                        className="w-full h-1 bg-gray-300 rounded-md appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                  {showShadow && <div className="lg:px-4 py-2">
                    <div className="flex items-center justify-between text-sm">
                      <div>Shadow depth</div>
                      <div>{properties.shadowDepth}</div>
                    </div>
                    <div>
                      <input
                        type="range"
                        value={properties.shadowDepth}
                        onChange={(e) => {
                          let values = { ...properties };
                          values.shadowDepth = e.target.value;
                          setProperties(values);
                        }}
                        min="5"
                        max="15"
                        step={1}
                        className="w-full h-1 bg-gray-300 rounded-md appearance-none cursor-pointer"
                      />
                    </div>
                  </div>}
                 <div className="flex justify-between items-center gap-2 md:flex-row flex-col">

                 <div className="lg:w-1/2 flex w-full justify-between lg:px-4 py-2">
                    <span>Hover Effect</span>
                    <span className="flex items-center justify-center">
                      <label className="switch">
                        <input
                          type="checkbox"
                          checked={showHover}
                          onChange={(e) => {
                          setShowHover(e.target.checked)
                          }}
                          className={styles.checkbox}
                        />
                        <div className={styles.slider}></div>
                      </label>
                    </span>
                  </div>

                  <div className="lg:w-1/2 flex justify-between w-full items-center lg:px-4 py-2">
                    <span>Shadow Effect</span>
                    <span className="flex items-center justify-center">
                      <label className="switch">
                        <input
                          type="checkbox"
                          checked={showShadow}
                          onChange={(e) => {
                            setShowShadow(e.target.checked)
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
              {/* right side */}
            </div>
          </div>}
          <div>
            {/* generatro ends here */}

            {/* generator code starts */}
          <div className="lg:dark:bg-[#1d2537] lg:bg-gray-100  mt-4">
          <div className="w-full p-4 dark:text-white">
              <div className="flex items-center justify-between mb-3">
                <p className="font-medium text-lg py-2">HTML Code</p>
                <CopyToClipboard
                  text={`<button class='btn${showHover?' hvr':''}${showShadow?' actv':''}'> Click Here </button>`}

                  className=" px-4 py-2 text-white flex items-center justify-between gap-2 font-semibold dark:hover:bg-blue-600 transition-all duration-300 border-blue-500 bg-blue-500 rounded-lg text-sm"
                >
                  <button onClick={codeCopyNotification} className="flex">
                    <span>Copy</span>
                    <span>
                      <FaRegCopy />
                    </span>
                  </button>
                </CopyToClipboard>
              </div>
              <SyntaxHighlighter language="jsx" style={nightOwl}>
                {`<button class='btn${showHover?' hvr':''}${showShadow?' actv':''}'> Click Here </button>`}
              </SyntaxHighlighter>
            </div>
            <div className="w-full p-4 dark:text-white">
              <div className="flex items-center justify-between mb-3">
                <p className="font-medium text-lg py-2">CSS Code</p>
                <CopyToClipboard
                  text={`.btn {
  padding: ${properties.paddingY}px ${properties.paddingX}px;
  border-radius: ${properties.borderRadius}px;
  font-size: ${properties.fontSize}px;
  background-color: ${properties.bgColor};
  color: ${properties.color};
  font-weight: ${properties.fontWeight};
  transition:all ${properties.transitionTime}s;
  border:${properties.borderWidth}px solid ${properties.borderColor} ;
  outline:'none';
  display: inline-block;
}
${showHover ? `.hvr:hover {
  color: ${properties.hoverColor};
  background-color: ${properties.hoverBgColor};
}`:``}
${showShadow ?`.actv{
  box-shadow:0 ${properties.shadowDepth}px #ababab;
}
.actv:active {
  box-shadow:0 ${properties.shadowDepth-3}px #404344;
  transform: translateY(${properties.translateY}px);
}`:``}`}

                  className=" px-4 py-2 text-white flex items-center justify-between gap-2 font-semibold dark:hover:bg-blue-600 transition-all duration-300 border-blue-500 bg-blue-500 rounded-lg text-sm"
                >
                  <button onClick={codeCopyNotification} className="flex">
                    <span>Copy</span>
                    <span>
                      <FaRegCopy />
                    </span>
                  </button>
                </CopyToClipboard>
              </div>
              <SyntaxHighlighter language="css" style={nightOwl}>
                {`.btn {
  padding: ${properties.paddingY}px ${properties.paddingX}px;
  border-radius: ${properties.borderRadius}px;
  font-size: ${properties.fontSize}px;
  background-color: ${properties.bgColor};
  color: ${properties.color};
  font-weight: ${properties.fontWeight};
  transition:all ${properties.transitionTime}s;
  border:${properties.borderWidth}px solid ${properties.borderColor} ;
  outline:'none';
  display: inline-block;
}
${showHover ? `.hvr:hover {
  color: ${properties.hoverColor};
  background-color: ${properties.hoverBgColor};
}`:``}
${showShadow ? `.actv{
  box-shadow:0 ${properties.shadowDepth}px #ababab;
}
.actv:active {
  box-shadow:0 ${properties.shadowDepth-3}px #404344;
  transform: translateY(${properties.translateY}px);
}`:``}`}

              </SyntaxHighlighter>
            </div>
          </div>
          {/* generator codes ends here */}

          {/* explore css generators starts here  */}
          <div className="lg:w-[64rem] mx-auto w-full p-4 lg:p-0 lg:py-4 dark:text-white">
              <div className="flex items-center justify-between ">
                <div className="flex items-center text-xl md:text-2xl gap-4 py-4">
                  <div>
                    <BsFillLightningFill />
                  </div>
                  <h2 className="font-semibold">Explore other tools</h2>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/cursor-options`} passHref>
              <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                <BsCursorFill size={"2.3rem"} />
                <p className="text-xl font-medium text-center">
                  Cursor CSS Generator
                </p>
              </div>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/gradient-generator`} passHref>
              <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                <MdGradient size={"2.3rem"} />
                <p className="text-xl font-medium text-center">
                  Gradient Generator
                </p>
              </div>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/scrollbar-css-generator`} passHref>
              <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                <CgScrollV size={"2.3rem"} />
                <p className="text-xl font-medium text-center">
                  Scrollbar CSS Generator
                </p>
              </div>
            </Link>
              </div>
            </div>
            {/*explore  css generator ends here */}

          </div>
        </div>
      </div>
    </>
  );
}
