import { Outlet } from "react-router-dom";
import Header from "./Header.component";
import Footer from "./Footer.component";

const Layout = () => {
  return (
    <>
      <Header />
      <main children={<Outlet />} />
      <Footer />
    </>
  );
};

export default Layout;
