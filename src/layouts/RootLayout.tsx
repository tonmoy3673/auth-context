import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/Footer";


const RootLayout = () => {
    return (
        <div className="flex flex-col min-h-screen max-w-screen-2xl mx-auto">
           <Navbar/>
           <main className="flex-1">
            <Outlet/>
           </main>
           <Footer/>
        </div>
    );
};

export default RootLayout;