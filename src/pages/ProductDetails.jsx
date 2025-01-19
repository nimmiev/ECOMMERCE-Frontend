import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ProductDetails() {
  const {id} = useParams()
  const [product, setProduct] = useState({})
  // console.log(id)
  useEffect(() => {
    axios.get(`https://ecommerce-backend-rho.vercel.app/products/${id}`)
    .then((res) => {
      setProduct(res.data)
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
  })
  return (
    <>
        <div className='container-details'>
          <Link to={"/product-details/:id"}>
              <img src= {product.image} width={'500px'} />
          </Link>
          <div className='details'> 
              <p className='product-title'>{product.title}</p>
              <p className='product-price'>{product.price}</p>
              <Link to = "/cart" className={"btn3-btn"}>Add to cart</Link>
          </div>
        </div>
    </>
  )
}

export default ProductDetails
