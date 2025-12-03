
import { Outlet } from 'react-router-dom';
import Navbar from './../../Components/Navbar/Navbar';
import Footer from './../../Components/Footer/Footer';
import TopNavbar from './../../Components/TopNavbar/TopNavbar';
export default function Layout() {
    return (
        <>
            <TopNavbar />
            <Navbar />
            
            <Outlet />
            <Footer />
        </>
    )
}
