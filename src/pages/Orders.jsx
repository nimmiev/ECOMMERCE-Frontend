import React from 'react'
import { Link } from 'react-router-dom'

const Orders = () => {
  return (
    <>
        <h1>Order List</h1>
        <ul className='cart-list'>
            <li className='cart-item'>
                <img src="data:image/jpeg;base64,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" alt="Product image" width={"100px"}/>
                <p className='product-title'>Product 1</p>
                <span className='cartItem-count'>3</span>
                <p className='product-price'>$1500</p>
                <p>13-01-2025</p>
            </li>
            <li className='cart-item'>
                <img src="data:image/jpeg;base64,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" alt="Product image" width={"100px"}/>
                <p className='product-title'>Product 1</p>
                <span className='cartItem-count'>3</span>
                <p className='product-price'>$1500</p>
                <p>13-01-2025</p>
            </li>
            <li className='cart-item'>
                <img src="data:image/jpeg;base64,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" alt="Product image" width={"100px"}/>
                <p className='product-title'>Product 1</p>
                <span className='cartItem-count'>3</span>
                <p className='product-price'>$1500</p>
                <p>13-01-2025</p>
            </li>
        </ul>
    </>
  )
}

export default Orders
