import React from 'react'
import { PiShoppingCartSimpleBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import styles from './Layout.module.css'

const Layout = ({ children }) => {
    const [state] = useCart()
    return (
        <>
            <header className={styles.header}>
                <Link to='/products'>BotoShop</Link>
                <Link to='/checkout'>
                    <div>
                        <PiShoppingCartSimpleBold />
                        {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
                    </div>
                </Link>
            </header>
            {children}
            <footer className={styles.footer}>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </footer>
        </>
    )
}

export default Layout