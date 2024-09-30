import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

import { useProducts } from '../context/ProductContext'
import { createQueryObject, filterProducts, getInitialQuery, searchProducts } from '../helper/helper';

import styles from './Products.module.css'

import Card from '../components/Card';
import Loader from '../components/Loader';
import SearchBox from '../components/SearchBox';
import SideBar from '../components/SideBar';

const ProductsPage = () => {
    const products = useProducts();

    const [search, setSearch] = useState("");
    const [displayed, setDisplayed] = useState([]);
    const [query, setQuery] = useState({});
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        setDisplayed(products)

        setQuery(getInitialQuery(searchParams))
    }, [products]);

    useEffect(() => {
        setSearchParams(query);
        setSearch(query.search || "")
        let fainalProducts = searchProducts(products, query.search)
        fainalProducts = filterProducts(fainalProducts, query.category)
        setDisplayed(fainalProducts)
    }, [query])

  
    return (
        <>
            <SearchBox  search={search} setSearch={setSearch} setQuery={setQuery}/>
            <div className={styles.container}>
                <div className={styles.product}>
                    {!displayed.length && <Loader />}
                    {displayed.map((pro) => (<Card key={pro.id} data={pro} />))}
                </div>
                
            <SideBar query={query} setQuery={setQuery}/>
            </div>
        </>
    )
}

export default ProductsPage