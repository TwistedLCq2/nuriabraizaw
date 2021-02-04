import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  let idStr = parseInt(id);

  useEffect(() => {
    const db = getFirestore();
    const q = query(collection(db, "items"), where("id", "==", idStr));
    getDocs(q)
      .then((snapshot) => {
        setItem(snapshot.docs.map((doc) => doc.data()));
      })
      .catch(() => console.log("error"))
      .finally(() => setLoading(false));
  }, [idStr]);

  return <>{loading ? "Loading..." : <ItemDetail item={item} />}</>;
};
export default ItemDetailContainer;
