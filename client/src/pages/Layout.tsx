import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";
import CartProvider from "../context/CartContext";
import "../styles/footer.css"

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
            <footer className="footer">
              <p>Images were generated with Hotpot AI</p>
            </footer>
            </CartProvider>
          </>
        );
      };

export default Layout
