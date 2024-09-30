import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

import { ImSearch } from 'react-icons/im';
import { FaListUl } from 'react-icons/fa';

import { useProducts } from '../context/ProductContext'
import { createQueryObject, filterProducts, searchProducts } from '../helper/helper';

import styles from './Products.module.css'

import Card from '../components/Card';
import Loader from '../components/Loader';

const ProductsPage = () => {
    const products = useProducts();

    const [search, setSearch] = useState("");
    const [displayed, setDisplayed] = useState([]);
    const [query, setQuery] = useState({});
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        setDisplayed(products)
    }, [products]);

    useEffect(() => {
        setSearchParams(query);
        let fainalProducts = searchProducts(products, query.search)
        fainalProducts = filterProducts(fainalProducts, query.category)
        setDisplayed(fainalProducts)
    }, [query])

    const searchHandler = () => {
        setQuery((query) => createQueryObject(query , {search}))
    };
    const categoriHandler = (e) => {
        const { tagName } = e.target;
        const category = e.target.innerText.toLowerCase();
        if (tagName !== 'LI') return;
        setQuery((query) => createQueryObject(query , {category}))
    }
    return (
        <>
            <div>
                <input type="text" placeholder='Search...' value={search} onChange={e => setSearch(e.target.value.toLowerCase().trim())} />
                <button onClick={searchHandler}><ImSearch /></button>
            </div>
            <div className={styles.container}>
                <div className={styles.product}>
                    {!displayed.length && <Loader />}
                    {displayed.map((pro) => (<Card key={pro.id} data={pro} />))}
                </div>
                <div>
                    <div>
                        <FaListUl />
                        <p>دسته بندی</p>
                    </div>
                    <ul onClick={categoriHandler}>
                        <li>All</li>
                        <li>Electronics</li>
                        <li>Jewelery</li>
                        <li>Men's Clothing</li>
                        <li>Women's Clothing</li>
                    </ul>
                </div>
            </div>c
        </>
    )
}

export default ProductsPage