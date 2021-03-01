import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const dataBase = doc(db, "items", id);

    getDoc(dataBase).then((snapshot) => {
      if (snapshot.exists()) {
        setItem({ ...snapshot.data(), id });
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  }, [id]);

  return <>{loading ? "Loading..." : <ItemDetail item={item.id} />}</>;
};
export default ItemDetailContainer;
