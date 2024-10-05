import React, { createContext, useContext, useEffect, useState } from 'react'
import api from '../services/config';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setProducts(await api.get("/products"));
            } catch (error) {
                console.log(error.message)
            }

        };
        fetchProducts();
    }, [])
    return (
       <ProductsContext.Provider value={products}>
        {children}
       </ProductsContext.Provider>
    )
}

const useProducts = () => {
    const products = useContext(ProductsContext);
    return products;
}
const useProductsDetails = (id) => {
    const products = useContext(ProductsContext);
    const res = products.find((item) => item.id === id)
    return res;
}

export default ProductsProvider
export {useProducts , useProductsDetails};