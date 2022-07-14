import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../../Components/ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  const onAdd = (cuenta) =>{
    alert(`Gracias por comprar ${cuenta} ${product.title}`)
  }
  return (
    <div style={styles.infoContainer}>
      <img style={styles.img} src={product.image} alt={product.title} />
      <div style={styles.infoTextContainer}>
        <div style={styles.infoText}>
          <h1>{product.title}</h1>
          <span>${product.price}</span>
          <p>{product.description}</p>
        </div>
        <Link to="/cart">
          <button>Ir al carrito</button>
        </Link>
        <div><ItemCount initial={1} stock={7} onAdd={onAdd}  /></div>
      </div>
    </div>
  );
};

const styles = {
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    width: "50%"
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
    justifyContent: "space-around"
  }
};

export default ItemDetail