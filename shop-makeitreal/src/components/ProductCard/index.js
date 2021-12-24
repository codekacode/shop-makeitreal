import { Link } from 'react-router-dom'
import './styles.css'

function ProductCard({ product_data }){
  return(
    <Link to={`/product/${product_data.id}`} className='product_card' >
      <div>
        <img src={product_data.image} alt='product_image' />
        <h3>{product_data.title}</h3>
        <div className='card_info'>
          <p className='card_price'>${product_data.priceimport { Link } from 'react-router-dom'
import './styles.css'

function ProductCard({ product_data }){
  return(
    <Link to={`/product/${product_data.id}`} className='product_card' >
      <div>
        <img src={product_data.image} alt='product_image' />
        <h3>{product_data.title}</h3>
        <div className='card_info'>
          <p className='card_price'>${product_data.price}</p>
          <p className='card_cat'>{product_data.category}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard