import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";

import ErrorPage from "../components/pages/errorPage/ErrorPage";
import { routes } from "./menuRoutes";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="itemDetail/:id" element={<ItemDetailContainer />} /> */}

        {routes.map(({ id, path, Element }) => {
          return <Route key={id} path={path} element={<Element />} />;
        })}
      </Route>

    

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouter;
