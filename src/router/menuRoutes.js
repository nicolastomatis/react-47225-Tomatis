import AddItemsToDBContainer from "../components/pages/addItemsToDB/AddItemsToDBContainer";
import CartPageContainer from "../components/pages/cart/CartPageContainer";
import CheckoutFormikContainer from "../components/pages/checkoutFormik/CheckoutFormikContainer";
import ItemDetailContainer from "../components/pages/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/pages/itemListContainer/ItemListContainer";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "category",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartPageContainer,
  },
  {
    id: "itemDetail",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutFormikContainer,
  },
  {
    id: "AddItemsToDB",
    path: "/AddItemsToDB",
    Element: AddItemsToDBContainer,
  },
];
