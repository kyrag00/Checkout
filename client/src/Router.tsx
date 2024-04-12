import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Products from "./pages/Products";
import Confirmation from "./pages/Confirmation";
import Cart from "./Cart";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
          index: true,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path:"/confirmation",
          element: <Confirmation/>
        },
        {
          path: "/cart",
          element: <Cart/>
        }
      ],
    }
  ]);