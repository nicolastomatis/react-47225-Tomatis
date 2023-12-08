import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import Cart from "./components/pages/cart/Cart";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";
import Layout from "./components/layout/Layout";
import Fabainforma from "./components/pages/Fabainforma/Fabainforma";
import Revista from "./components/pages/Revista/Revista";
import Contacto from "./components/pages/Contacto/Contacto";
import CartContextComponent from "./context/CartContext";
import Checkout from "./components/pages/checkout/Checkout";


function App() {
  return (
    <BrowserRouter>
      <CartContextComponent>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/Fabainforma" element={<Fabainforma />} />
            <Route path="/Revista" element={<Revista />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="*" element={<h1>Not found</h1>} />
          </Route>
        </Routes>
      </CartContextComponent>
    </BrowserRouter>
  );
}

export default App;
