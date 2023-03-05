import Head from "next/head";
import styles from "styles/style.module.css";
import { FaRegCopy } from "react-icons/fa";
import { toast } from "react-toastify";
import CopyToClipboard from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";

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
        <title>Cursor Options in CSS</title>
      </Head>
      <div>
        <div className="lg:w-[64rem] mx-auto w-full">
          <h1
            className={`md:text-5xl text-4xl text-blue-500 text-center font-semibold pb-5  pt-3 ${styles.textGrad}`}
          >
            Cursor Options in CSS
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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
                        className="h-full dark:text-white flex items-center gap-4 justify-center font-semibold w-full dark:hover:bg-[#1d2537] transition-all duration-500 text-black  dark:bg-[#0f172a] bg-gray-200 hover:bg-gray-300 rounded-sm text-sm "
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
        </div>
      </div>
    </>
  );
}
