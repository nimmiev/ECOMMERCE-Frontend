import React from 'react'
import { Link } from 'react-router-dom'

const login = () => {
  return (
    <>
        <h1>Login</h1>
        <form>
            <input type="email" className='input2' placeholder='Email' />            
            <input type="password"  className='input2' placeholder='Password' />
            <input type="submit" className='btn3-btn' value='Login'/>
        </form>
        <div className='btn4'>
            <p>Don't have an account!</p><Link to="/register" className='btn4-btn'>Register</Link>
        </div>
    </>
  )
}

export default login
