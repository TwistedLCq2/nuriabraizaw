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
        <Route exact path="/category/:categoryId">
          <Servicios />
          <ItemListContainer />
        </Route>
        <Route exact path="/category/:categoryId/:prodId">
          <ItemDetailContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
