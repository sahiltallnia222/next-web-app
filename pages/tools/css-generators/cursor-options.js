import Head from "next/head";
import styles from "styles/style.module.css";
import { FaRegCopy } from "react-icons/fa";
import { toast } from "react-toastify";
import CopyToClipboard from "react-copy-to-clipboard";
import {BsFillLightningFill} from 'react-icons/bs'
import Link from "next/link";
import { MdGradient,MdOutlineTextRotateVertical} from "react-icons/md";
import { CgScrollV } from "react-icons/cg";

export default function CursorOptions() {
  const codeCopyNotification = () => {
    toast.success("Code copied successfully !", {
      position: "top-center",
      autoClose: 3000,
      theme: "light",
    });
  };


  const cursors=['alias','all-scroll','auto','cell','col-resize','context-menu','copy','crosshair','default','e-resize','ew-resize','grab','grabbing','help','move','n-resize','ne-resize','nesw-resize','ns-resize','nw-resize','nwse-resize','no-drop','none','not-allowed','pointer','progress','row-resize','s-resize','se-resize','sw-resize','text','w-resize','wait','zoom-in','zoom-out']

  return (
    <>
      <Head>
        <title>Cursors in CSS | WebVerse</title>
        <meta
        name="description"
        content="For different types of elements, different type of cursors are used. Here is the list of all the cursors in css. Hover over the box, it will show you the type of cursor. Now just copy the cursor css and paste in your website. "
      />
      <meta name="keywords" content="Webverse, web tools, free cursor tool, cursor in css,cursor pointer in css,change cursor in css,cursor css options,css cursor image,cursor values in css,cursor css disabled,cursor css pointer,cursor css custom,custom cursor in css,cursor css examples,cursor in css property,cursor in css hand"></meta>
      <meta property="og:title" content="Cursors in CSS | WebVerse" />
        <meta
          property="og:description"
          content="For different types of elements, different type of cursors are used. Here is the list of all the cursors in css. Hover over the box, it will show you the type of cursor. Now just copy the cursor css and paste in your website. "
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
            Cursors in CSS
          </h1>
          <p className=" leading-9 text-lg text-justify p-4  py-4 lg:px-0 dark:text-white">
              For different types of elements, different type of cursors are used. Here is the list of all the cursors in css. Hover over the box, it will show you the type of cursor. Now just copy the cursor css and paste in your website. 
          </p>
          {/* cursor div starts */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4 lg:p-0 lg:py-4">
           {
            cursors.map((cursor)=>{
                return (
                    <div className="dark:bg-[#1d2537] border h-40 flex items-center justify-center flex-col rounded-sm dark:text-white  text-md">
                    <div className="w-full h-full flex items-center justify-center flex-col" style={{cursor:`${cursor}`}}>
                      <p className="p-3 text-center">Hover me  !</p>
                      <p className="text-center">cursor: {cursor};</p>
                    </div>
                    <div className="h-16 w-full rounded-lg">
                      <CopyToClipboard
                        text={`cursor: ${cursor};`}
                        className="h-full dark:text-white flex items-center gap-4 justify-center font-semibold w-full dark:hover:bg-[#1d2537] transition-all duration-500 text-black  dark:bg-[#0f172a] bg-gray-100  hover:bg-gray-300 rounded-sm text-sm "
                      >
                        <button onClick={codeCopyNotification}>
                          <span>Copy Code</span>
                          <span>
                            <FaRegCopy />
                          </span>
                        </button>
                      </CopyToClipboard>
                    </div>
                  </div>
                )
            })
           }



          </div>
          {/* cursor div ends here */}
          
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
            <Link href={`${process.env.NEXT_PUBLIC_HOST}/tools/css-generators/text-animations`} passHref>
              <div className=" flex items-center justify-center flex-col gap-4 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300  dark:bg-[#1d2537] py-14 border-2 dark:border-transparent ">
                <MdOutlineTextRotateVertical size={"2.3rem"} />
                <p className="text-xl font-medium text-center">
                  Text Animations
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
