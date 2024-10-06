import React from 'react'
import { useCart } from '../context/CartContext'
import BasketProduct from '../components/BasketProduct'
import BasketSidbar from '../components/BasketSidbar'
import styles from './Checkout.module.css'
const CheckOutPage = () => {
  const [state, dispatch] = useCart()

  const clickHandler = (type , payload) => dispatch({type , payload})

  if (!state.itemsCounter) {
    return (
      <div className={styles.container}>
        <p>  خالی !!!</p>
      </div>
    )
  }
  return (
    <div className={styles.container}>
      <BasketSidbar state={state} clickHandler={clickHandler}/>
      <div className={styles.products}>
        {
          state.selectedItems.map((product) => (
            <BasketProduct key={product.id} data={product} clickHandler={clickHandler} />
          ))
        }
      </div>
    </div>
  )
}

export default CheckOutPage