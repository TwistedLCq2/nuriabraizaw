import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logoxl from "../img/logoxl.png";
import "./styles/cart.css";
import CartDetailContainer from "./CartDetailContainer";

function Cart() {
  const { cart } = useCart();

  return (
    <div className="cart">
      <img src={logoxl} alt="logo" />
      {cart.length === 0 ? (
        <section className="empty">
          <div className="empty">
            <article>
              Todavía no has agregado ningún producto a tu carrito
            </article>
          </div>
          <NavLink className="redirect" to="/">
            <button className="btn btn-info">
              Mira todo lo que tenemos para ofrecerte!!{" "}
            </button>
          </NavLink>
        </section>
      ) : (
        <CartDetailContainer cart={cart} />
      )}
    </div>
  );
}

export default Cart;
