import Head from "next/head";
import styles from "styles/style.module.css";
import { ImPlay2, ImPause } from "react-icons/im";
import { useState } from "react";
import { toast } from "react-toastify";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaRegCopy } from "react-icons/fa";
import {BsFillLightningFill} from 'react-icons/bs'
import Link from "next/link";
import {BsCursorFill } from "react-icons/bs";
import {GiPowerButton} from 'react-icons/gi'
import { TbBoxMultiple } from "react-icons/tb";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import nightOwl from 'react-syntax-highlighter/dist/cjs/styles/prism/night-owl';
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('css', css);





export default function TextAnimations() {
  const [play, setPlay] = useState("");

  const codeCopyNotification = () => {
    toast.success("Code copied successfully !", {
      position: "top-center",
      autoClose: 3000,
      theme: "light",
    });
  };

  const playPauseAnimation = (x) => {
    if (play == x) {
      setPlay("noAnimation");
    } else {
      setPlay(x);
    }
  };

const cssCode=`.outer-box{
    perspective:'3000px';
    perspective-origin:'50% 50%';
}
${play=='animation1'?`.animation1 {
    animation:animation1 1.5s cubic-bezier(0.38, 1.2, 1, 1) both infinite ;
    background: linear-gradient(113deg, #3b82f6 25%,  #dd1fea 100%);
    width:15rem;
    height:15rem;
    display:flex;
    align-items:center;
    justify-content:center;
}
@keyframes animation1{
    0%{
        transform:scale(0);
    }
    100%{
        transform:scale(1);
    }
}`:''}${play=='animation2'?`.animation2 {
    animation:animation2 1.5s cubic-bezier(0.38, 1.2, 1, 1) both infinite ;
    text-align:center;
    background: linear-gradient(113deg, #3b82f6 25%,  #dd1fea 100%);
    width:15rem;
    height:15rem;
    display:flex;
    align-items:center;
    justify-content:center;
}
@keyframes animation2{
    0%{
        transform:translateY(-4rem);
    }
    100%{
        transform:translateY(0rem);
        letter-spacing:0rem;
    }
}`:''}${play=='animation3'?`.animation3 {
    animation:animation3 3s linear both infinite ;
    background: linear-gradient(113deg, #3b82f6 25%,  #dd1fea 100%);
    width:15rem;
    height:15rem;
    display:flex;
    align-items:center;
    justify-content:center;
}
@keyframes animation3{
    0%{
        transform:rotateZ(25deg);
        transform-origin: top;
    }
    25%{
        transform:rotateZ(0deg);
        transform-origin: top;
    }
    50%{
        transform:rotateZ(-25deg);
        transform-origin: top;
    }
    75%{
        transform:rotateZ(0deg);
        transform-origin: top;
    }
    100%{
        transform:rotateZ(25deg);
        transform-origin: top;
    }
}`:''}${play=='animation4'?`.animation4 {
    animation:animation4 1.6s cubic-bezier(0, 0.66, 1, 1) both infinite ;
    text-align:center;
    background: linear-gradient(113deg, #3b82f6 25%,  #dd1fea 100%);
    width:15rem;
    height:15rem;
    display:flex;
    align-items:center;
    justify-content:center;
}
@keyframes animation4{
    0%{
        transform:rotateX(120deg);
        transform-origin: bottom;
        opacity:0;
    }
    50%{
        opacity:0.4;
    }
    100%{
        opacity:1;
        transform:rotateX(0deg);
        transform-origin: bottom;
    }
}`:''}${play=='animation5'?`.animation5 {
    animation:animation5 1.6s cubic-bezier(0, 1.07, 1, 1) both infinite ;
    background: linear-gradient(113deg, #3b82f6 25%,  #dd1fea 100%);
    width:15rem;
    height:15rem;
    display:flex;
    align-items:center;
    justify-content:center;
}
@keyframes animation5{
    0%{
        opacity:0;
        transform:rotateZ(360deg);
        filter: blur(30px);
    }
    50%{
        opacity:0.7;
        filter: blur(5px);
    }
    100%{
        opacity:1;
        transform:rotateZ(0deg);
        filter: blur(0px);
    }
}`:''}${play=='animation6'?`.animation6 {
    animation:animation6 1.6s cubic-bezier(0, 1.07, 1, 1) both infinite ;
    text-align:center;
    background: linear-gradient(113deg, #3b82f6 25%,  #dd1fea 100%);
    width:15rem;
    height:15rem;
    display:flex;
    align-items:center;
    justify-content:center;
}
@keyframes animation6{
    0%{
        opacity:0;
        transform:translateY(10rem);
        letter-spacing:-1.2rem;
    }
    100%{
        opacity:1;
        transform:translateY(0rem);
        letter-spacing:0rem;
    }
}`:''}`


  return (
    <>
      <Head>
        <title>CSS Box Animations | WebVerse</title>
        <meta
        name="description"
        content="CSS box animations are the ways to add movement and visual effects to the boxes in our website. CSS animations can be used to draw attention toward any important information. In CSS box animations, we have provided you some awesome css box animation to use in your website. You can see the css animation effects by clicking on play button. After play the animation just copy the generated css code given below and paste in your website."
      />
      <meta name="keywords" content="Webverse, web tools, free css animation tool, css animation,css animation background,css animation hover,css animation on hover,css animation generator,css animation rotate,css animation examples,css animation keyframes,css animation delay,css animation property"></meta>
      <meta property="og:title" content="CSS Box Animations | WebVerse" />
        <meta
          property="og:description"
          content="CSS box animations are the ways to add movement and visual effects to the boxes in our website. CSS animations can be used to draw attention toward any important information. In CSS box animations, we have provided you some awesome css box animation to use in your website. You can see the css animation effects by clicking on play button. After play the animation just copy the generated css code given below and paste in your website."
        />
        <meta
          property="og:image"
          content="/images/og-images/home-page-og.png"
        />
      </Head>
      <div className="lg:w-[64rem] mx-auto w-full ">
        <h1
          className={`md:text-5xl text-4xl text-blue-500 text-center font-semibold pb-5  pt-3 ${styles.textGrad}`}
        >
          CSS Box Animations
        </h1>
        <p className=" leading-9 text-lg text-justify p-4  py-4 lg:px-0 dark:text-white">
            CSS box animations are the ways to add movement and visual effects to the boxes in our website. CSS animations can be used to draw attention toward any important information. In CSS box animations, we have provided you some awesome css box animation to use in your website. You can see the css animation effects by clicking on play button. After play the animation just copy the generated css code given below and paste in your website.  
        </p>
        <div>
          <style jsx>{`
            .animation1 {
                animation:animation1 1.5s cubic-bezier(0.38, 1.2, 1, 1) both infinite ;
            }
            @keyframes animation1{
                0%{
                    transform:scale(0);
                }
                100%{
                    transform:scale(1);
                }
            }
            .animation2 {
                animation:animation2 1.5s cubic-bezier(0.38, 1.2, 1, 1) both infinite ;
                text-align:center;
            }
            @keyframes animation2{
                0%{
                    transform:translateY(-4rem);
                }
                100%{
                    transform:translateY(0rem);
                    letter-spacing:0rem;
                }
            }

            .animation3 {
                animation:animation3 3s linear both infinite ;
            }
            @keyframes animation3{
                0%{
                    transform:rotateZ(25deg);
                    transform-origin: top;
                }
                25%{
                    transform:rotateZ(0deg);
                    transform-origin: top;
                }
                50%{
                    transform:rotateZ(-25deg);
                    transform-origin: top;
                }
                75%{
                    transform:rotateZ(0deg);
                    transform-origin: top;
                }
                100%{
                    transform:rotateZ(25deg);
                    transform-origin: top;
                }
            }

            .animation4 {
                animation:animation4 1.6s cubic-bezier(0, 0.66, 1, 1) both infinite ;
                text-align:center;
            }
            @keyframes animation4{
                0%{
                    transform:rotateX(120deg);
                    transform-origin: bottom;
                    opacity:0;
                }
                50%{
                    opacity:0.4;
                }
                100%{
                    opacity:1;
                    transform:rotateX(0deg);
                    transform-origin: bottom;
                }
            }

            .animation5 {
                animation:animation5 1.6s cubic-bezier(0, 1.07, 1, 1) both infinite ;
            }
            @keyframes animation5{
                0%{
                    opacity:0;
                    transform:rotateZ(360deg);
                    filter: blur(30px);
                }
                50%{
                    opacity:0.7;
                    filter: blur(5px);
                }
                100%{
                    opacity:1;
                    transform:rotateZ(0deg);
                    filter: blur(0px);
                }
            }

            .animation6 {
                animation:animation6 1.6s cubic-bezier(0, 1.07, 1, 1) both infinite ;
                text-align:center;
            }
            @keyframes animation6{
                0%{
                    opacity:0;
                    transform:translateY(10rem);
                    letter-spacing:-1.2rem;
                }
                100%{
                    opacity:1;
                    transform:translateY(0rem);
                    letter-spacing:0rem;
                }
            }

          `}</style>
          <div className="dark:bg-[#1d2537] bg-gray-100 dark:text-white p-4">
            {/* Generator box */}
            <div className=" grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="h-96 md:h-auto grid grid-cols-1 gap-2">
                <div
                  onClick={() => {
                    playPauseAnimation("animation1");
                  }}
                  className=" cursor-pointer border-2 bg-white dark:border-transparent flex items-center justify-center flex-col gap-3 dark:bg-[#0f172a]"
                >
                  <p>
                    {play == "animation1" ? (
                      <ImPause size={"1.5em"} />
                    ) : (
                      <ImPlay2 size={"1.5em"} />
                    )}
                  </p>
                  <p>Play Animation 1</p>
                </div>
                <div
                  onClick={() => {
                    playPauseAnimation("animation2");
                  }}
                  className=" cursor-pointer border-2 bg-white dark:border-transparent flex items-center justify-center flex-col gap-3 dark:bg-[#0f172a]"
                >
                  <p>
                    {play == "animation2" ? (
                      <ImPause size={"1.5em"} />
                    ) : (
                      <ImPlay2 size={"1.5em"} />
                    )}
                  </p>
                  <p>Play Animation 2</p>
                </div>
                <div
                  onClick={() => {
                    playPauseAnimation("animation3");
                  }}
                  className=" cursor-pointer border-2 bg-white dark:border-transparent flex items-center justify-center flex-col gap-3 dark:bg-[#0f172a]"
                >
                  <p>
                    {play == "animation3" ? (
                      <ImPause size={"1.5em"} />
                    ) : (
                      <ImPlay2 size={"1.5em"} />
                    )}
                  </p>
                  <p>Play Animation 3</p>
                </div>
              </div>
              <div style={{ perspective:'3000px', perspectiveOrigin:' 50% 50%'}} 
               className="col-span-2 bg-white row-start-1 text-white border-2 dark:border-transparent row-end-2 md:col-start-2 md:col-end-4 h-80 md:h-96 flex items-center justify-center dark:bg-[#0f172a]">
                <div
                  className={`${styles.boxGrad} w-60 h-60 ${play} flex items-center justify-center`}
                >
                    <p>BOX ANIMATIONS</p>
                </div>
              </div>
              <div className="h-96 md:h-auto grid grid-cols-1 gap-2">
                <div
                  onClick={() => {
                    playPauseAnimation("animation4");
                  }}
                  className="cursor-pointer border-2 bg-white dark:border-transparent flex items-center justify-center flex-col gap-3 dark:bg-[#0f172a]"
                >
                  <p>
                    {play == "animation4" ? (
                      <ImPause size={"1.5em"} />
                    ) : (
                      <ImPlay2 size={"1.5em"} />
                    )}
                  </p>
                  <p>Play Animation 4</p>
                </div>
                <div
                  onClick={() => {
                    playPauseAnimation("animation5");
                  }}
                  className="cursor-pointer border-2 bg-white dark:border-transparent flex items-center justify-center flex-col gap-3 dark:bg-[#0f172a]"
                >
                  <p>
                    {play == "animation5" ? (
                      <ImPause size={"1.5em"} />
                    ) : (
                      <ImPlay2 size={"1.5em"} />
                    )}
                  </p>
                  <p>Play Animation 5</p>
                </div>
                <div
                  onClick={() => {
                    playPauseAnimation("animation6");
                  }}
                  className="cursor-pointer border-2 bg-white dark:border-transparent flex items-center justify-center flex-col gap-3 dark:bg-[#0f172a]"
                >
                  <p>
                    {play == "animation6" ? (
                      <ImPause size={"1.5em"} />
                    ) : (
                      <ImPlay2 size={"1.5em"} />
                    )}
                  </p>
                  <p>Play Animation 6</p>
                </div>
              </div>
            </div>
            {/* End of generated box */}
          </div>
          {/* code section */}
          <div className="lg:dark:bg-[#1d2537] lg:bg-gray-100 mt-4 p-4">
            <div className="w-full dark:text-white">
              <div className="flex items-center justify-between mb-3">
                <p className="font-medium text-lg py-2">HTML Code</p>
                <CopyToClipboard
                  text={`<div class='outer-box'><div class='${play=='noAnimation'?'':play}'>Box Animations</div></div>`}
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
              {`<div class='outer-box'><div class='${play=='noAnimation'?'':play}'>Box Animations</div></div>`}
              </SyntaxHighlighter>
            </div>
            <div className="w-full dark:text-white mt-4">
              <div className="flex items-center justify-between mb-3">
                <p className="font-medium text-lg py-2">CSS Code</p>
                <CopyToClipboard
                  text={cssCode}
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
                {cssCode}
              </SyntaxHighlighter>
            </div>
          </div>
          {/* code section end */}

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
                <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/box-shadow`} passHref>
                  <div className="flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent">
                    <TbBoxMultiple size={"2.3em"} />
                    <p className="text-xl font-medium text-center">
                      Box Shadow Generator
                    </p>
                  </div>
                </Link>
                <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/button-generator`} passHref>
                  <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                    <GiPowerButton size={"2.3rem"} />
                    <p className="text-xl font-medium text-center">
                      Button Generator
                    </p>
                  </div>
              </Link>
              <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/cursor-options`} passHref>
              <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                <BsCursorFill size={"2.3rem"} />
                <p className="text-xl font-medium text-center">
                  Cursor CSS Generator
                </p>
              </div>
            </Link>
              </div>
            </div>
            {/*explore  css generator ends here */}
        </div>
      </div>
    </>
  );
}
