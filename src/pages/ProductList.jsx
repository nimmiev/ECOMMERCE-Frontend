import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { Link } from "react-router-dom"
import axios from 'axios'


function ProductList() {

    const API_URL = import.meta.env.VITE_API_URL;

    const [products, setProducts] = useState([])
    useEffect(() => {
        // axios.get("http://localhost:3000")
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
                    <ProductCard product={product} />
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
