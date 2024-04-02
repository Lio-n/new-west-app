import { Outlet } from 'react-router-dom';
import Footer from './Footer.component';
import Header from './Header/Header.component';

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
