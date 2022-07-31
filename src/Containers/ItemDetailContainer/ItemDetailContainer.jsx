import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

import { db } from "../../Components/firebase/firebase";
import { getDoc, collection, doc } from "firebase/firestore";

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(true);

    const { productId } = useParams();

    useEffect(() => {
        const productCollection = collection(db, "productos");
        const refDoc = doc(productCollection, productId);
        getDoc(refDoc)
            .then((result) => {
                const producto = {
                    id: result.id,
                    ...result.data(),
                };
                setProduct(producto);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoaded(false))
            .catch((err) => console.log(err))
            .finally(() => setLoaded(false));
    }, [productId]);

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            {loaded ? <CircularProgress /> : <ItemDetail product={product} />}
        </div>
    );
};

export default ItemDetailContainer;
