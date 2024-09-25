import React, { useEffect, useState } from 'react'
import { useProducts } from '../context/ProductContext'
import styles from './Products.module.css'
import Card from '../components/Card';
import Loader from '../components/Loader';
import { ImSearch } from 'react-icons/im';
import { FaListUl } from 'react-icons/fa';

const ProductsPage = () => {
    const products = useProducts();

    const [search, setSearch] = useState("");
    const [displayed, setDisplayed] = useState([]);

    useEffect(() => {
        setDisplayed(products)
    }, [products])

    const searchHandler = () => {
        console.log("search")
    };
    const categoriHandler = (e) => {
        const { tagName } = e.target;
        const category = e.target.innerText.toLowerCase();

        if (tagName !== 'LI') return;
        console.log(category)
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