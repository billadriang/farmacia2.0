import {React, useContext, useState } from 'react';
import {addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { cartContext } from '../../context/CartContext';

// import { doc, getDoc, getFirestore, updateDoc} from 'firebase/firestore';
// import CircularProgress from '@mui/material/CircularProgress';


import { db } from '../firebase/firebase';


const Checkout = () => {


    // TE FALTA MODIFICAR EL STOCK, HACER BIEN EL FORMULARIO DEL CHECKOUT Y LAS AGREGAR LAS VARIABLES DE ENTORNO, HACER EL README CON EL MARKDOWN

    const { products, costo } = useContext(cartContext);
    const [idVenta, setIdVenta] = useState("")

    const datosComprador = {
        nombre: 'Bill1',
        apellido: 'Gaize',
        email: 'billadriang@gmail.com'
    }

    const finalizarCompra = () => {
        const ventasCollection = collection(db, 'ventas');
        addDoc(ventasCollection, {
            datosComprador,
            items : [{nombre: products.map(product => product.title) , id:products.map(product => product.id), precio:products.map(product => product.price)}],
            date : serverTimestamp(),
            total: costo(),
            compraId: idVenta
        })
        .then((result) => {
            setIdVenta(result.id)
        });
        
} 


return(
    <>
    {products.length === 0 
    ? <h1>No tienes productos en el carrito</h1>
    : <> {products.map(product => <h1 key={product.id}> {product.title} </h1>)}
    <button onClick={finalizarCompra} >Finalizar Compra</button>
    </>


    }
    </>
)



}


// const createOrder = async (order) => {
//     const ventasCollection = collection(db, 'ventas');
//     return await addDoc(ventasCollection, order)
// }


// const getItemById = async (id) => {
//     const itemRef = doc(db, 'productos', id);
//     console.log(itemRef)
//     return await getDoc(itemRef);
// }

// const updateItem = async (id, changes) => {
//     const itemRef = doc(db, 'productos', id);
//     await updateDoc(itemRef, changes);
// }

// const Checkout = () => {

//     const CartContext = useContext(cartContext);

//     const [orderId, setOrderId] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [data, setData] = useState({
//         name: '',
//         phone: '',
//         email: ''
//     });

//     const handleChange = (event) => {
//         setData({
//             ...data,
//             [event.target.id]: event.target.value
//         })
//     };

//     const saveOrder = async (order) => {
//         setLoading(true);
//         const { id } = await createOrder(order);
//         setOrderId(id);
//         setLoading(false);
//     }

//     const updateProductsStock = async (products) => {
//         for(const product of products) {
//             const item = await getItemById(product.id);
//             await updateItem(item.id, { stock: item.data().stock - product.quantity});
//         }
//     }

//     const handleSubmit = event => {
//         event.preventDefault();
        
//         const order = {
//             buyer: { name: data.name, phone: data.phone, email: data.email },
//             items: CartContext.products.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
//             date: new Date(),
//             total: CartContext.getTotalPrice()
//         }

//         // Se guarda la orden
//         saveOrder(order);

//         // Se actualiza el stock de cada producto adquirido
//         updateProductsStock(CartContext.products);

//         // Se limpia el carrito
//         CartContext.clear();
//     };
    

//     return (

//         console.log(`${orderId}`)

//     )
// }

export default Checkout;

