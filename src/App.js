import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Servicios from "./components/Servicios";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/category/:category">
            <Servicios />
          </Route>
          <Route path="/item/:itemId">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
