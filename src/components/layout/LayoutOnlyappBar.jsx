import { Outlet } from "react-router-dom";
import AppContainer from "./appFi/AppContainer";
import AppSpace from "./appFi/AppSpace";
import Footer from "./footer/Footer";

const LayoutOnlyappBar = () => {
  return (
    <>
      <AppContainer />
      <AppSpace />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutOnlyappBar;
