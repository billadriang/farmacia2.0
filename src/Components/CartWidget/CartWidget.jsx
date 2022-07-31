import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { cartContext } from "../../context/CartContext";

const CartWidget = () => {

    const { products, cantidadProducts } = useContext(cartContext)

    return (
        <>
            {products.length === 0
                ? <ShoppingCartIcon fontSize="large" />
                : <div> <ShoppingCartIcon fontSize="large" /> <p> {cantidadProducts} </p></div>}
        </>
    )
};

export default CartWidget