import {React, useContext} from 'react';
import { cartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Carrito = () => {

    const {products} = useContext(cartContext);

    return(
    <>
    {products.length === 0 
    ? <h1> No tienes nada en el carrito aun, puedes ir <Link to="/"> Aca </Link> para econtrar productos </h1>
    : <div> {products.map(product =>  <h1 key={product.id}> {product.title} </h1> )} </div>
    }
    </>
    )
};
export default Carrito
