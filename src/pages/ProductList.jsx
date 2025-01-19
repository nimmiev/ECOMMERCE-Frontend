import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { Link } from "react-router-dom"
import axios from 'axios'


function ProductList() {

    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("https://ecommerce-backend-rho.vercel.app/")
        .then((res) => {
            setProducts(res.data)
        })
    },[])
  return (
    <>
        <div className="container">
            <div className='form-container1'>
                <form>
                    <input
                        type="text"
                        className="input1"
                        placeholder="Search for products..."
                    />
                    <button type="submit" className="btn1">Search</button>
                </form>
            </div>
            <h1>Our Products</h1>
            <div className="product-list">
                {products.map((product, index) => (
                    <Link to={`/product-details/${product._id}`} key={index}>
                        <ProductCard product={product} />
                    </Link>
                ))}
            </div>
            <div className="text-center">
                <button className="loadmore-btn">Load More</button>
            </div>
        </div>
    </>
  )
}

export default ProductList
