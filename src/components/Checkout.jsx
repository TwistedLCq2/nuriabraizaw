import { useState } from "react";
import { useAuth } from "../context/AuthenticatorContext";
import { useCart } from "../context/CartContext";
import { getFirestore } from "../firebase";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  increment,
} from "firebase/firestore";

function Checkout({ close }) {
  const { user, preference } = useAuth();
  const { cart, clearCart } = useCart();

  const [formFields, setFormFields] = useState({
    name: user ? `${user.name} ${user.lastName}` : "",
    tel: user && user.tel ? `${user.tel}` : "",
    mail: user && user.mail ? `${user.mail}` : "",
  });

  const [newOrder, setNewOrder] = useState(null);
  const [popUpBox, setPopUpBox] = useState(false);

  const inputHandler = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };
  const confirmHandler = (e) => {
    e.preventDefault();
    setPopUpBox(true);
  };
  const closeHandler = () => {
    if (newOrder) {
      clearCart();
      close();
    } else {
      close();
    }
  };

  const buy = () => {
    const items = cart.map((i) => {
      return {
        id: i.id,
        qty: i.qty,
        price: i.price,
        title: i.title,
        category: i.category,
      };
    });

    const order = {
      buyer: {
        name: formFields.name,
        phone: formFields.tel,
        email: formFields.mail,
      },
      items,
      total: cart.reduce((acum, item) => acum + item.price * item.qty, 0),
    };

    const db = getFirestore();

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then(({ id }) => setNewOrder(id));

    cart.forEach((i) => {
      const productInBase = doc(db, "items", i.id);

      updateDoc(productInBase, { stock: increment(-i.qty) });
    });
  };

  return (
    <div className="bkg-Checkout">
      <form
        className={`Checkout ${
          preference.theme === "light" ? "dark" : "light"
        }`}
      >
        <i onClick={closeHandler} className="exitIcn far fa-times-circle"></i>
        {!newOrder && (
          <>
            <h3>Confirma tus datos</h3>

            <div className="inputContainer">
              <label>Nombre y Apellido</label>
              <input
                name="name"
                type="text"
                value={formFields.name}
                onChange={inputHandler}
              />
            </div>
            <div className="inputContainer">
              <label>Teléfono</label>
              <input
                name="tel"
                type="text"
                value={formFields.tel}
                onChange={inputHandler}
              />
            </div>
            <div className="inputContainer">
              <label>Email</label>
              <input
                name="mail"
                type="email"
                value={formFields.mail}
                onChange={inputHandler}
              />
            </div>

            <button onClick={confirmHandler} className="addBtn">
              Confirmar
            </button>
          </>
        )}
        {newOrder && (
          <>
            <h3>Gracias por tu compra, {formFields.name}!</h3>

            <div className="inputContainer">
              <p>
                Ya hemos procesado tu pedido bajo el numero de orden{" "}
                <span>{newOrder}</span>
              </p>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default Checkout;
