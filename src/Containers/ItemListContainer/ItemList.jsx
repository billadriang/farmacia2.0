import React from "react";
import Item from "./Item";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  }
}
// ACA SOLO RECIBES LOS PRODUCTOS Y LOS MUESTRAS TIPO LISTA
const ItemList = ({ products }) => {
  return (
    <div style={styles.container}>
      {products.map((product) => (
        // LE MANDAS LOS PRODUCTOS A ITEM
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList


