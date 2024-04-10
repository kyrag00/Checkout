import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";
import CartProvider from "../context/CartContext";

const Layout = ()=> {

        return (
          <>
          <CartProvider>
            <header>
              <Navigation/>
            </header>
            <main>
              <Outlet />
            </main>
            </CartProvider>
          </>
        );
      };

export default Layout
