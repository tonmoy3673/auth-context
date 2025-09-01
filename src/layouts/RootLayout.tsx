import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/Footer";


const RootLayout = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
           <Navbar/>
           <Outlet/>
           <Footer/>
        </div>
    );
};

export default RootLayout;