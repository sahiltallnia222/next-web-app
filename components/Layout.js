import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
    const [darkMode,setDarkMode]=useState(true);
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
  return (
    <>
      <div className={darkMode?"dark":""}>
        <div className="relative w-full dark:bg-[#0f172a]">
          <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          <div className="min-h-screen mt-20">{children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
}
