import Head from "next/head";
import styles from "styles/style.module.css";
import { useRef } from "react";
import { ImPlay2, ImPause } from "react-icons/im";
import { useState } from "react";
import { toast } from "react-toastify";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaRegCopy } from "react-icons/fa";
import Link from "next/link";
import { GoTextSize } from "react-icons/go";
import {BsFillLightningFill} from 'react-icons/bs'
import {MdTransform,MdFormatColorText} from 'react-icons/md'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import nightOwl from 'react-syntax-highlighter/dist/cjs/styles/prism/night-owl';
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('css', css);


export default function TextAnimations() {
  const textRef = useRef();
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
const cssCode=`.box{
  display: flex;
  justify-content: center;
  align-items: center;
}
.textGrad{
  background: linear-gradient(113deg, #3b82f6 25%,  #dd1fea 100%);
  color: transparent;
  background-clip:text;
  -webkit-background-clip:text;
}
${play=='animation1'?`.animation1 {
    animation:animation1 1.5s cubic-bezier(0.38, 1.2, 1, 1) both infinite ;
    text-align:center;
}
@keyframes animation1{
    0%{
        opacity:0;
        letter-spacing:-1.2rem;
    }
    30%{
        opacity:0.3;
    }
    100%{
        opacity:1;
        letter-spacing:0rem;
    }
}`:''}${play=='animation2'?`.animation2 {
    animation:animation2 1.5s cubic-bezier(0.38, 1.2, 1, 1) both infinite ;
    text-align:center;
}
@keyframes animation2{
    0%{
        opacity:0;
        transform:translateY(-10rem);
        letter-spacing:-1.2rem;
    }
    30%{
        opacity:0.3;
    }
    100%{
        opacity:1;
        transform:translateY(0rem);
        letter-spacing:0rem;
    }
}`:''}${play=='animation3'?`.animation3 {
    animation:animation3 1.8s cubic-bezier(0.38, 1.2, 1, 1) both infinite ;
    text-align:center;
}
@keyframes animation3{
    0%{
        opacity:0;
        transform:translateY(-10rem);
        letter-spacing:-1.2rem;
    }
    30%{
        opacity:0.3;
    }
    50%{
        opacity:1;
        transform:translateY(0rem);
        letter-spacing:0rem;
    }
    100%{
        opacity:0;
        letter-spacing:-1.2rem;
    }
}`:''}${play=='animation4'?`.animation4 {
    animation:animation4 1.6s cubic-bezier(0, 0.66, 1, 1) both infinite ;
    text-align:center;
}
@keyframes animation4{
    0%{
        opacity:0;
        transform:rotateX(90deg);
        filter: blur(10px);
    }
    100%{
        opacity:1;
        transform:rotateX(0deg);
        filter: blur(0px);
    }
}`:''}${play=='animation5'?`.animation5 {
    animation:animation5 1.6s cubic-bezier(0, 1.07, 1, 1) both infinite ;
    transform-style: "preserve-3d";
    text-align:center;
}
@keyframes animation5{
    0%{
        opacity:0;
        transform:rotateZ(360deg);
        letter-spacing:-1.2rem;
        filter: blur(30px);
    }
    50%{
        opacity:0.7;
    }
    100%{
        opacity:1;
        transform:rotateZ(0deg);
        filter: blur(0px);
        letter-spacing:0;
    }
}`:''}${play=='animation6'?`.animation6 {
    animation:animation6 1.6s cubic-bezier(0, 1.07, 1, 1) both infinite ;
    text-align:center;
}
@keyframes animation6{
    0%{
        opacity:0;
        transform:translateY(10rem);
        letter-spacing:-1.2rem;
        filter:blur(20px)
    }
    100%{
        opacity:1;
        filter:blur(0px);
        transform:translateY(0rem);
        letter-spacing:0rem;
    }
}`:''}`

  return (
    <>
      <Head>
        <title>Text Animations | WebVerse</title>
        <meta
        name="description"
        content="Get creative with your text! Our CSS text animation generator provides a range of options for adding visual flair to your written content. You can select and copy-paste the CSS for any animation you like. Elevate your website with dynamic, eye-catching text. Explore our collection now."
      />
      <meta name="keywords" content="Webverse, web tools, free css generators, css gradient generator, css gradient generator with live preview"></meta>
      <meta property="og:title" content="Text Animations | WebVerse" />
        <meta
          property="og:description"
          content="Get creative with your text! Our CSS text animation generator provides a range of options for adding visual flair to your written content. You can select and copy-paste the CSS for any animation you like. Elevate your website with dynamic, eye-catching text. Explore our collection now."
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
          Text Animations
        </h1>

        <p className=" leading-9 text-lg text-justify p-4  py-4 lg:px-0 dark:text-white">
          Get creative with your text! Our CSS text animation generator provides a range of options for adding visual flair to your written content. You can select and copy-paste the CSS for any animation you like. Elevate your website with dynamic, eye-catching text.
          </p>

        <div>

          {/* css generator  */}
          <style jsx>{`
            .animation1 {
                animation:animation1 1.5s cubic-bezier(0.38, 1.2, 1, 1) both infinite ;
                text-align:center;
            }
            @keyframes animation1{
                0%{
                    opacity:0;
                    letter-spacing:-1.2rem;
                }
                30%{
                    opacity:0.3;
                }
                100%{
                    opacity:1;
                    letter-spacing:0rem;
                }
            }
            .animation2 {
                animation:animation2 1.5s cubic-bezier(0.38, 1.2, 1, 1) both infinite ;
                text-align:center;
            }
            @keyframes animation2{
                0%{
                    opacity:0;
                    transform:translateY(-10rem);
                    letter-spacing:-1.2rem;
                }
                30%{
                    opacity:0.3;
                }
                100%{
                    opacity:1;
                    transform:translateY(0rem);
                    letter-spacing:0rem;
                }
            }

            .animation3 {
                animation:animation3 1.8s cubic-bezier(0.38, 1.2, 1, 1) both infinite ;
                text-align:center;
            }
            @keyframes animation3{
                0%{
                    opacity:0;
                    transform:translateY(-10rem);
                    letter-spacing:-1.2rem;
                }
                30%{
                    opacity:0.3;
                }
                50%{
                    opacity:1;
                    transform:translateY(0rem);
                    letter-spacing:0rem;
                }
                100%{
                    opacity:0;
                    letter-spacing:-1.2rem;
                }
            }

            .animation4 {
                animation:animation4 1.6s cubic-bezier(0, 0.66, 1, 1) both infinite ;
                text-align:center;
            }
            @keyframes animation4{
                0%{
                    opacity:0;
                    transform:rotateX(90deg);
                    filter: blur(10px);
                }
                100%{
                    opacity:1;
                    transform:rotateX(0deg);
                    filter: blur(0px);
                }
            }

            .animation5 {
                animation:animation5 1.6s cubic-bezier(0, 1.07, 1, 1) both infinite ;
                transform-style: "preserve-3d";
                text-align:center;
            }
            @keyframes animation5{
                0%{
                    opacity:0;
                    transform:rotateZ(360deg);
                    letter-spacing:-1.2rem;
                    filter: blur(30px);
                }
                50%{
                    opacity:0.7;
                }
                100%{
                    opacity:1;
                    transform:rotateZ(0deg);
                    filter: blur(0px);
                    letter-spacing:0;
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
                    filter:blur(20px)
                }
                100%{
                    opacity:1;
                    filter:blur(0px);
                    transform:translateY(0rem);
                    letter-spacing:0rem;
                }
            }

          `}</style>
          <div className="dark:bg-[#1d2537] bg-gray-100 dark:text-white p-4">
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
              <div className="col-span-2 bg-white row-start-1 border-2 dark:border-transparent row-end-2 md:col-start-2 md:col-end-4 h-80 md:h-96 flex items-center justify-center dark:bg-[#0f172a]">
                <p
                  className={`${styles.textGrad} md:text-5xl text-4xl font-medium text-center ${play}`}
                >
                  Text Animations
                </p>
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
          </div>
          {/* css generator ends here */}

          {/* generated codes */}
          <div className="dark:bg-[#1d2537] bg-gray-100 mt-4 p-4">
            <div className="w-full dark:text-white">
              <div className="flex items-center justify-between mb-3">
                <p className="font-medium text-lg py-2">HTML Code</p>
                <CopyToClipboard
                  text={`<div class='box'><p class='textGrad ${play=='noAnimation'?'':play}'>Text Animations</p></div>`}
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
                {`<div class='box'><p class='textGrad ${play=='noAnimation'?'':play}'>Text Animations</p></div>`}
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
          {/* generated codes ends */}

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
              <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/text-gradient`} passHref>
              <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                <MdFormatColorText size={"2.3rem"} />
                <p className="text-xl font-medium text-center">
                  Text Gradient Generator
                </p>
              </div>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/text-shadow`} passHref>
              <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                <GoTextSize size={"2.3rem"} />
                <p className="text-xl font-medium text-center">
                  Text Shadow Generator
                </p>
              </div>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/transform-generator-2d`} passHref>
              <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                <MdTransform size={"2.3rem"} />
                <p className="text-xl font-medium text-center">
                  2D Transform CSS Generator
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
