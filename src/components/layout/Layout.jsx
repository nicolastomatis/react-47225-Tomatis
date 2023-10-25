import { Outlet } from "react-router-dom";
import FilterSectionContainer from "../common/filterSection/FilterSectionContainer";
import AppContainer from "./appFi/AppContainer";
import AppSpace from "./appFi/AppSpace";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <>
      <AppContainer />
      <AppSpace />
      <FilterSectionContainer />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
