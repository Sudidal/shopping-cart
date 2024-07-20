import App from "./app";
import ErrorPage from "./components/errorPage/errorPage";
import Shop from "./components/shop/shop";
import Cart from "./components/cart/cart";
import Home from "./components/home/home";
import ProductPopup from "./components/productPopup/productPopup";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "shop",
        element: <Shop />,
        children: [
          {
            path: "product/:productId",
            element: <ProductPopup />,
          },
        ],
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
];

export default routes;
