import React from 'react'

const ProductContent = ({product}) => {
  return (
    <div>
        <img src={product.src} alt="" />
    </div>
  )
}

export default ProductContent