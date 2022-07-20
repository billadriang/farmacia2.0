import React, { useEffect, useState } from 'react'
// EL SPINNER
import CircularProgress from '@mui/material/CircularProgress';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


export const ItemListContainer = () => {
    // EL USESTATE PARA IR CONTANDO
    const [products, setProducts] = useState([]);
    // PARA SETEAR EL SPINNER
    const [loaded, setLoaded] = useState(true);
    // PARA RECIBIR LA CATEGORIA SLECCIONADA
    const { categoryId } = useParams();


    useEffect(() => {
        // AQUI FETCHEAS EL JSON LOCAL EN LA CARPETA PUBLIC
        // const URL = categoryId ? `https://api.npoint.io/7687914a9899ad5ae301/${categoryId}` : `https://api.npoint.io/7687914a9899ad5ae301/` 
        fetch("https://api.npoint.io/7687914a9899ad5ae301")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err))
            // AQUI TERMINAS EL SPINNER
            .finally(() => setLoaded(false))

    }, [categoryId]);

    // var finalArray = products.map(function (obj) {

    //     return obj.category
    //   });
    //   console.log(finalArray)

    return (
        <>
            {/* DE AQUI ES QUE LE MANDAS A ITEMLIST  A TRAVES DE PROPS EL PRODUCTO */}
            {loaded ? <CircularProgress /> : <ItemList products={products} />}
        </>
    )
}

export default ItemListContainer