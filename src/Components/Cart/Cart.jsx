import { React, useContext } from "react";
import { cartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardActions } from "@mui/material";

const styles = {
    container: {
        height: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "rgb(255,250,250)",
        
    },
    carrito: {
        width: 1000,
        margin: 20
    },
};

const Carrito = () => {
    const { products, clear, costo, deleteProduct } = useContext(cartContext);

    return (
        <div style={styles.container}>
            {products.length === 0 ? (
                <h1>
                    No tienes nada en el carrito aun, puedes ir <Link to="/">
                        
                        Aca
                    </Link>
                    para econtrar productos
                </h1>
            ) : (
                <Card   >
                    {products.map((product) => (
                        <Card style={styles.carrito} key={product.id}>
                            <CardContent  />
                            <h1 style={styles.carrito}>
                                
                                {product.title} X {product.cantidad}
                            </h1>
                            <h3 style={styles.carrito}>{product.cantidad} x {product.price}$ =
                            {product.cantidad * product.price}$</h3><CardContent />
                            <CardActions>
                                <Button
                                    onClick={() => deleteProduct(product.id)}
                                    size="small"
                                    color="primary"
                                >
                                    Borrar
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                    <Button onClick={clear} size="small" color="primary">
                        Limpiar Carrito
                    </Button>
                    <h2> TOTAL = {costo()}</h2>
                </Card>
            )}
        </div>
    );
};

export default Carrito;
