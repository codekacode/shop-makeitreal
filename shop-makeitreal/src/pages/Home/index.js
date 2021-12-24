import { useState, useEffect } from 'react'
import ProductCard from '../../components/ProductCard'
import './styles.css'

function Homeimport { useState, useEffect } from 'react'
import ProductCard from '../../components/ProductCard'
import './styles.css'

function Home(){
  const[ data , setData ] = useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setData(json))
  },[])
  return(
    <div className='home_view'>
      {data.map(product => (
        <div key={product.id}>
          <ProductCard product_data={product} />
        </div>
      ))}
    </div>
  )
}

export default Home