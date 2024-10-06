import React from 'react'
import { ShortenText } from '../helper/helper'
import { MdDeleteOutline } from 'react-icons/md'

import styles from './BasketProduct.module.css'
const BasketProduct = ({ data , clickHandler }) => {

    return (
        <div className={styles.card}>
            <img src={data.image} alt={data.title} />
            <p>{ShortenText(data.title)}</p>
            <div className={styles.actions}>
                {data.quantity === 1 && (
                    <button onClick={() =>clickHandler("REMOVE_ITEM" , data)}>
                        <MdDeleteOutline />
                    </button>
                )}
                {data.quantity > 1 && <button onClick={() =>clickHandler("DECREASE" , data)}>-</button>}
                <span>{data.quantity}</span>
                <button onClick={() =>clickHandler("INCREASE" , data)}>+</button>

            </div>
        </div>
    )
}

export default BasketProduct