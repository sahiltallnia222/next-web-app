import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({children}) {
    return (
        <>
            <div className="relative w-full bg-[#131b2e]">
                <Navbar/>
                <div className="min-h-screen mt-20">{children}</div>
                <Footer/>
            </div>
        </>
    )
};