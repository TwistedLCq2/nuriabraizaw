import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Servicios from "./components/Servicios";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContextProvider from "./context/CartContext";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/category/:categoryId">
            <Servicios />
          </Route>
          <Route exact path="/category/:categoryId/:prodId">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
