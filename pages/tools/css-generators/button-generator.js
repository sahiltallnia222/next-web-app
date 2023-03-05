import Head from "next/head";
import styles from "styles/style.module.css";
import { useState } from "react";
import { toast } from "react-toastify";
import CopyToClipboard from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { FaRegCopy } from "react-icons/fa";

export default function ButtonGenerator() {
  // useEffect(()=>{
  //   if(typeof(window)!=undefined){
  //     const x=document.getElementById('icon')
  //     console.log(x.innerHTML);
  //   }
  // })

  const [showShadow,setShowShadow]=useState(true);
  const [showHover,setShowHover]=useState(true);

  const [properties, setProperties] = useState({
    paddingX: 10,
    paddingY: 10,
    borderRadius: 10,
    color: "#ffffff",
    bgColor: "#9a48ef",
    fontSize: 20,
    fontWeight: 400,
    hoverBgColor: "#2345ae",
    hoverColor: "#a22eaf",
    transitionTime:0.1,
    borderWidth:1,
    borderColor:'#aef954',
    translateY:5,
    shadowDepth:7,
  });

  const codeCopyNotification = () => {
    toast.success("Code copied successfully !", {
      position: "top-center",
      autoClose: 3000,
      theme: "light",
    });
  };

  return (
    <>
      <Head>
        <title>Button Generator</title>
      </Head>
      <div>
        <div className="lg:w-[64rem] mx-auto w-full ">
          <h1
            className={`md:text-5xl text-4xl text-blue-500 text-center font-semibold pb-5  pt-3 ${styles.textGrad}`}
          >
            Button Generator
          </h1>
          <div className="dark:bg-[#1d2537] p-4 dark:text-white mx-2 md:mx-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <div className="flex items-center justify-center h-[12rem] border-b-2">
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
                <div className="flex justify-between items-center dark:bg-[#0f172a] p-2 mt-4  dark:text-white">
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
                <div className="flex justify-between items-center dark:bg-[#0f172a] p-2 mt-4  dark:text-white">
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
               {showHover &&  <div className="flex justify-between items-center dark:bg-[#0f172a] p-2 mt-4  dark:text-white">
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
               {showHover && <div className="flex justify-between items-center dark:bg-[#0f172a] p-2 mt-4  dark:text-white">
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
                <div className="flex justify-between items-center dark:bg-[#0f172a] p-2 mt-4  dark:text-white">
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
              </div>
              {/* right side */}
              <div>
                <div>
                  <div className="px-4 py-2">
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
                        className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="px-4 py-2">
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
                        className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="px-4 py-2">
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
                        className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="px-4 py-2">
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
                        className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="px-4 py-2">
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
                        className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="px-4 py-2">
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
                        className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="px-4 py-2">
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
                        className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                  {showShadow && <div className="px-4 py-2">
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
                        className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer"
                      />
                    </div>
                  </div>}
                 <div className="flex justify-between items-center md:flex-row flex-col">

                 <div className="md:w-1/2 flex w-full justify-between px-4 py-2">
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

                  <div className="md:w-1/2 flex justify-between w-full items-center px-4 py-2">
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
          </div>
          <div>
          <div className="dark:bg-[#1d2537] mt-4">
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
              <SyntaxHighlighter language="css" style={docco}>
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
              <SyntaxHighlighter language="css" style={docco}>
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
          </div>
        </div>
      </div>
    </>
  );
}
