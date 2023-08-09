import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
