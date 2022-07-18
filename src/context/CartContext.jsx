import { React,  createContext, useState, useEffect } from 'react'

export const cartContext = createContext();

const { Provider } = cartContext;

const CartCustomProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [quantityProducts, setQuantityProducts] = useState(0);
    const getQuantityProducts = () => {
        
    }

    const addProduct = (product) => {

    }
    const deleteProduct = (id) =>{

    }
    const isInCart =(id) => {

    }

    const clear =() => {
        setProducts([])
    }

    return(
        <Provider value={{products, addProduct, deleteProduct, clear, quantityProducts, isInCart}} >
                {children}
        </Provider>
    )
}

export default CartCustomProvider;
