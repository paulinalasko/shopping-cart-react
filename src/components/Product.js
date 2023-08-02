import React from 'react'

export default function Product(props) {
    const { product, onAdd } = props;
  return (
      <div>
         <div className='product-container'> 
          <div className='product'>
              <img className={product.css} src={product.imagePath} alt={product.alt}></img>
              <p className='product-description'>{product.name} <br /> ${product.price}</p>
              <button onClick={() => onAdd(product)} className="click-btn standard-btn">Add to Cart</button>
            </div>
          </div>
    </div>
  )
}
