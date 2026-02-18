import React from 'react'
import ProductBanner from './ProductBanner'
import ProductDetails from './ProductDetails'



const Product = ({ productData }) => {
  return (
    <div className="">
        <ProductBanner/>
         <ProductDetails productData={productData} />
    </div>
  )
}

export default Product