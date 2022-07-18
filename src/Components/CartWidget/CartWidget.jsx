import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { cartContext } from "../../context/CartContext";

const CartWidget = () => {

    const {cantidadProducts} = useContext(cartContext)
    
    console.log(cantidadProducts)
    return(

        <div> <ShoppingCartIcon  fontSize="large" /> <p> {cantidadProducts} </p>   </div>

    )};

export default CartWidget