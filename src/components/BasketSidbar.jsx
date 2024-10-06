import React from 'react'
import { BsPatchCheck } from 'react-icons/bs'
import { FaHashtag } from 'react-icons/fa'
import { TbChecklist } from 'react-icons/tb'
import styles from './BasketSidbar.module.css'
const BasketSidbar = ({state , clickHandler}) => {
  return (
    <div className={styles.sidbar}>
        <div>
            <TbChecklist/>
            <p>total:</p>
            <span>{state.total}</span>
        </div>
        <div>
            <FaHashtag/>
            <p>quntity:</p>
            <span>{state.quntity}</span>
        </div>
        <div>
            <BsPatchCheck/>
            <p>status:</p>
            <span>{!state.checkout && "pending..."}</span>
        </div>
        <button onClick={() => clickHandler("CHECKOUT")}>checkout</button>
    </div>
  )
}

export default BasketSidbar