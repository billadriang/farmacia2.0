import React, { useContext, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { cartContext } from "../../context/CartContext";
import { db } from "../firebase/firebase";
import Swal from "sweetalert2";

const Checkout = () => {
    const { products, costo, clear } = useContext(cartContext);
    const [idVenta, setIdVenta] = useState("1");

    const [BuyerInfo, setBuyerInfo] = useState({
        buyerName: "",
        buyerLastName: "",
        buyerEmail: "",
        buyerPhone: "",
    });

    const formHandler = (e) => {
        e.preventDefault();
        setBuyerInfo({
            ...BuyerInfo,
            [e.target.name]: e.target.value,
        });
    };

    const finalizarCompra = (e) => {
        e.preventDefault();
        const ventasCollection = collection(db, "ventas");
        addDoc(ventasCollection, {
            BuyerInfo,
            items: [
                {
                    nombre: products.map((product) => product.title),
                    id: products.map((product) => product.id),
                    precio: products.map((product) => product.price),
                },
            ],
            date: serverTimestamp(),
            total: costo(),
            compraId: idVenta,
        }).then((result) => {
            Swal.fire({
                title: "Compra Realizada",
                text: `El Id de tu compra es: ${result.id}\n\n
                El total fue de: $${costo()}`,
                icon: "success",
            });
            setIdVenta(result.id);
        });
        clear();
    };

    const styles = {
        container: {
            height: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
    
        },
        entrada: {
            padding: 5
        }
    };

    return (
        <>
            {products.length === 0 ? (
                <h1>No tienes productos en el carrito</h1>
            ) : (
                <>
                    
                    {products.map((product) => (
                        <h1 key={product.id}> {product.cantidad} x {product.title} </h1>
                    ))}
                    <div style={styles.container}>
                    <form onSubmit={finalizarCompra}>
                        <input
                            value={BuyerInfo.buyerName}
                            onChange={formHandler}
                            required
                            type="text"
                            name="buyerName"
                            placeholder="Nombre"
                        ></input>
                        <input
                            value={BuyerInfo.buyerLastName}
                            onChange={formHandler}
                            required
                            type="text"
                            name="buyerLastName"
                            placeholder="Apellido"
                        ></input>
                        <input
                            value={BuyerInfo.buyerEmail}
                            onChange={formHandler}
                            required
                            type="email"
                            name="buyerEmail"
                            placeholder="Tu mail"
                        ></input>
                        <input
                            value={BuyerInfo.buyerPhone}
                            onChange={formHandler}
                            type="number"
                            name="buyerPhone"
                            placeholder="Telefono"
                        ></input>
                        <div>
                            <button style={styles.container} stype="submit">
                                <h3> Pagar </h3>
                            </button>
                        </div>
                    </form>
                    </div>
                </>
            )}
        </>
    );
};

export default Checkout;
