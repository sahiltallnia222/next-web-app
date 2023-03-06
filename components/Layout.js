import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from "next/router";

export default function Layout({ children }) {
    const [darkMode,setDarkMode]=useState(true);
    const [progress, setProgress] = useState(0);
    const router = useRouter();
  const toggleDarkMode = () => {
    let DarkMode = localStorage.getItem("darkMode");
    if (DarkMode) {
      localStorage.removeItem("darkMode");
    } else {
      localStorage.setItem("darkMode", true);
    }
    setDarkMode(localStorage.getItem("darkMode"))
  };
  const isDarkMode = () => {
    let DarkMode = localStorage.getItem("darkMode");
    if (DarkMode) {
      return true;
    } else {
      return false;
    }
  };
  useEffect(() => {
    setDarkMode(isDarkMode);
  },[]);
  useEffect(()=>{
    router.events.on('routeChangeStart',()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete',()=>{
      setProgress(100)
    })
  },[router.query])
  return (
    <>
      <div className={darkMode?"dark":""}>
        <div className="relative w-full dark:bg-[#0f172a]">
        <LoadingBar color='#3b82f6' progress={progress} waitingTime={400} onLoaderFinished={()=>{setProgress(0)}}
        />
          <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          <div className="min-h-screen mt-20">{children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
}
