import React from 'react'
import { TbListDetails, TbShoppingBagCheck } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { ShortenText } from '../helper/helper'
import styles from './Card.module.css'

const Card = ({ data }) => {
    const { id, title, price, image } = data

    return (
        <div className={styles.card}>
            <img src={image} alt={title} />
            <h3>{ShortenText(title)}</h3>
            <p>{price}</p>
            <div className={styles.actions}>
                <Link to={`/products/${id}`}>
                    <TbListDetails />
                </Link>
                <div>
                    <button>
                        <TbShoppingBagCheck />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card