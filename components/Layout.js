import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({children}) {
    return (
        <>
            <div className="relative w-full overflow-hidden">
                <Navbar/>
                <div className="min-h-screen mt-16">{children}</div>
                <Footer/>
            </div>
        </>
    )
};