import React from 'react'
import ProductCard from '../components/ProductCard'
import { Link } from "react-router-dom"

function ProductList() {
  return (
    <>
        <form className='text-right'>
            <input type="text" className='input1' placeholder="Search" />
            <input type="submit" className='btn1' value="Search" />
        </form>
        <h1>Product List</h1>
        <div className='product-list'>
            <Link to = "/product-details/10">
                <ProductCard />
            </Link>
            <Link to = "/product-details/11">
                <ProductCard />
            </Link>
            <Link to = "/product-details/12">
                <ProductCard />
            </Link>
            <Link to = "/product-details/13">
                <ProductCard />
            </Link>
            <Link to = "/product-details/14">
                <ProductCard />
            </Link>
            <Link to = "/product-details/15">
                <ProductCard />
            </Link>
        </div>
        <div className='text-center'>
            <button className='loadmore-btn'>Load More..</button>
        </div>
    </>
  )
}

export default ProductList
