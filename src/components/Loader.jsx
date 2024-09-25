import React from 'react'
import styles from './Loader.module.css'
import { RotatingLines } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className={styles.Loader}>
        <RotatingLines width='100px' heigth='100px' strokeWidth='3' strokeColor='#fe5d42' />
    </div>
  )
}

export default Loader