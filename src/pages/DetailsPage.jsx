import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useProductsDetails } from '../context/ProductContext';
import Loader from '../components/Loader'
import { SiOpenproject } from 'react-icons/si';
import { IoMdPricetag } from 'react-icons/io';
import styles from './DetailsPage.module.css'
import { FaArrowLeft } from 'react-icons/fa';
const DetailsPage = () => {

  const {id} = useParams();
  const productDetails = useProductsDetails(+id)
  
  if (!productDetails) return <Loader/>
  return (
    <div className={styles.container}>
      <img src={productDetails.image}/>
      <div className={styles.information}>
        <h3 className={styles.title}>{productDetails.title}</h3>
        <p className={styles.description}>{productDetails.description}</p>
        <p className={styles.category}>
          <SiOpenproject/>
          {productDetails.category}
        </p>
        <div >
          <span className={styles.price}>
            <IoMdPricetag/>
            {productDetails.price}
          </span>
          <Link to='/products'>
            <FaArrowLeft/>
            <span>back to shop</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage