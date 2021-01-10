import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Servicios from "./components/Servicios";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
          <ItemListContainer />
        </Route>
        <Route exact path="/Servicios">
          <Servicios />
          <ItemListContainer />
          <ItemDetailContainer />
        </Route>
        <Route exact path="/Contacto">
          {/* pendiente */}
        </Route>
        <Route exact path="/Carrito">
          {/* pendiente */}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
