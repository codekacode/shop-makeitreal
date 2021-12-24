import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import ProductDetail from '../../components/ProductDetail'
import './styles.css'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import ProductDetail from '../../components/ProductDetail'
import './styles.css'

function Product(){
  const { id } = useParams();
  const[ productData , setProductData ] = useState([])
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setProductData(json))
  },[])
  
  return(
    <div className="product_view">
      <ProductDetail product_data={productData}/>
    </div>
  )
}

export default Product