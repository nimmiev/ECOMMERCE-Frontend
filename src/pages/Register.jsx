import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
        <h1>Register</h1>
        <form>
            <input type="text" className='input2' placeholder='Username' />  
            <input type="email"  className='input2' placeholder='Email' />          
            <input type="password"  className='input2' placeholder='Password' />
            <input type="text"  className='input2' placeholder='Confirm Password' />
            <input type="text"  className='input2' placeholder='Phone Number' />
            <div className='check-box'>
                <p>Agree to terms and conditions </p><input type='checkbox'/>
            </div>
            <input type="submit" className='btn3-btn' value='Register'/>
        </form>
        <div className='btn4'>
            <p>Already have an account ?</p><Link to="/login" className='btn4-btn'>Login</Link>
        </div>
    </>
  )
}

export default Register
