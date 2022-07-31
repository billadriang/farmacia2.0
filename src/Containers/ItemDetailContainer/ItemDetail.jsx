import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../../Components/ItemCount/ItemCount";
import { cartContext } from "../../context/CartContext";

const ItemDetail = ({ product }) => {
  const [compraFinalizada, setCompraFinalizada] = useState(false);
  const { addProduct } = useContext(cartContext);

  const onAdd = (cuenta) => {
    addProduct({ ...product, cantidad: cuenta });
    setCompraFinalizada(true);
  };
  return (
    <div style={styles.infoContainer}>
      <img style={styles.img} src={product.image} alt={product.title} />
      <div style={styles.infoTextContainer}>
        <div style={styles.infoText}>
          <h1>{product.title}</h1>
          <span>${product.price}</span>
          <p>{product.description}</p>
        </div>
        {compraFinalizada ? (
          <Link to="/cart">
            <button> Finalizar compra </button>
          </Link>
        ) : (
          <ItemCount initial={1} stock={7} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

const styles = {
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "50%",
  },
  infoTextContainer: {
    display: "flex",
    flexDirection: "column",
  },
  infoText: {
    padding: "15px",
    marging: "8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
};

export default ItemDetail;
