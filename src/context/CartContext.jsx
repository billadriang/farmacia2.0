import { React,  createContext, useState, useEffect } from 'react'
export const cartContext = createContext();
const { Provider } = cartContext;

const CartCustomProvider = ({ children }) => {

    const [products, setProducts] = useState([])
    const [cantidadProducts, setCantidadProducts] = useState(0);


    const getCantidadProducts = () => {
        let cantidad  = 0;
        products.forEach( product=>{
            // AQUI ESTAS SUMANDO UNO A UNO LOS PRODUCTOS
            cantidad += product.cantidad;
        })
        setCantidadProducts(cantidad)
    }
    useEffect(() => {
        getCantidadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products])

    const addProduct = (product) => {

        if (isInCart(product.id)){

            const encontrado = product.find(p => p.id === product.id);
            const index = products.indexOf(encontrado);
            const otro = [...product];
            otro[index].cantidad += product.cantidad;
            setProducts(otro);
        }else{
            setProducts([...products, product])
        };

    }
    const deleteProduct = (id) =>{
        setProducts(products.filter(product => product.id !== id));

    }
    const isInCart =(id) => {
        products.some(product => product.id === id);
    }

    const clear =() => {
        setProducts([]);
    }

    return(
        <Provider value={{products, addProduct, deleteProduct, clear, cantidadProducts, isInCart}} >
                {children}
        </Provider>
    )
}

export default CartCustomProvider;
