import React from 'react'
import { Link } from 'react-router-dom'

const Checkout = () => {
  return (
    <>
        <h1>Address</h1>
        <form>
            <input type="text" className='input2' placeholder='Address Line 1' />            
            <input type="text"  className='input2' placeholder='Address Line 2' />
            <input type="email"  className='input2' placeholder='Country' />
            <input type="text"  className='input2' placeholder='State' />
            <input type="text"  className='input2' placeholder='City' />
            <input type="text"  className='input2' placeholder='Pincode' />
            <input type="text"  className='input2' placeholder='Phone' />
            <Link to="/my-orders" className='btn3-btn'>Confirm</Link>
        </form>
    </>
  )
}

export default Checkout
