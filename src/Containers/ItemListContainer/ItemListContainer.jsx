import React, { useEffect, useState } from 'react'
// EL SPINNER
import CircularProgress from '@mui/material/CircularProgress';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../Components/firebase/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';


export const ItemListContainer = () => {
    // EL USESTATE PARA IR CONTANDO
    const [products, setProducts] = useState([]);
    // PARA SETEAR EL SPINNER
    const [loaded, setLoaded] = useState(true);
    // PARA RECIBIR LA CATEGORIA SLECCIONADA
    const { categoryId } = useParams();
    
    
    useEffect(() => {
        
        const productCollection = collection(db, 'productos');
        const cosas = categoryId 

        ? query( productCollection, where("category", "==", `${categoryId}`)) 
        : productCollection


        getDocs(cosas)
        .then((resultado) => {
            const docs =resultado.docs.map(doc => {
                        return {
                            id: doc.id,
                            ...doc.data(),
                        }
                    })
                    setProducts(docs)
                })
                .catch(err => console.log(err))
                .finally(() => setLoaded(false))
            });

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}  >
        {loaded ? <CircularProgress  /> : <ItemList products={products} />}
        </div>
    )
}

export default ItemListContainer