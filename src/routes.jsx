import App from "./app";
import ErrorPage from "./components/errorPage/errorPage";
import Shop from "./components/shop/shop";
import Cart from "./components/cart/cart";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
];

export default routes;
