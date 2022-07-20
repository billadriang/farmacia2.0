import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(true)

    const { productId } = useParams();


    useEffect(() => {
        fetch(`https://api.npoint.io/7687914a9899ad5ae301/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.log(err))
            .finally(() => setLoaded(false))
    }, [productId]);

    return (
        <>
            {loaded ? <CircularProgress /> : <ItemDetail product={product} />}
        </>
    )
}


export default ItemDetailContainer