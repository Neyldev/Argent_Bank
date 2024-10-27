
import Header from "@/Layouts/Header/Header.jsx";
import Footer from "@/Layouts/Footer/Footer.jsx";

import { Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <div className="layout">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;