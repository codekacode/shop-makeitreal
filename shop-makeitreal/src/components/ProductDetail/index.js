import './styles.css'

function ProductDetail({product_data}){
  return(
    <div className='product_container'>
      <img src={product_data.image} alt='productView_image'/>
      <div>
        <h2>{product_data.title}</h2>
        <p>Category: {product_data.category}</p>
        <p>{product_data.description}</p>
        <div className='product_price'>
          <p>Price</p>
          <p>${product_data.price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail                                                                                                                                                                                                                                                                                                     import './styles.css'

function ProductDetail({product_data}){
  return(
    <div className='product_container'>
      <img src={product_data.image} alt='productView_image'/>
      <div>
        <h2>{product_data.title}</h2>
        <p>Category: {product_data.category}</p>
        <p>{product_data.description}</p>
        <div className='product_price'>
          <p>Price</p>
          <p>${product_data.price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail