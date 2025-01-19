import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function login() {

  const navigate = useNavigate()
  const [data, setData] = useState({})

  const loginformSubmitHandler = (e) => {
    e.preventDefault()
    console.log(data)
    axios.post("https://ecommerce-backend-rho.vercel.app/user/login", data)
    .then(res => {
      localStorage.setItem("token", res.data.token)
      navigate("/")
    })
    .catch(err => {
      alert(err.response.data.meassage)
    })
  }

  const formchangeHandler = (event, field) => {
    let tempData = {...data}
    tempData[field] = event.target.value
    console.log(tempData)
    setData(tempData)
  }
  return (
    <>
      <h1>Login</h1>
      <div className='form-container'>
        <form onSubmit={loginformSubmitHandler}>
            <input type="email" className='input2' placeholder='Email' onChange = {(e) => formchangeHandler(e,"email")} />            
            <input type="password"  className='input2' placeholder='Password' onChange = {(e) => formchangeHandler(e,"password")} />
            <input type="submit" className='btn3-btn' value='Login'/>
        </form>
        <div className='btn4'>
            <p>Don't have an account!</p><Link to="/register" className='btn4-btn'>Register</Link>
        </div>
      </div>
    </>
  )
}

export default login
