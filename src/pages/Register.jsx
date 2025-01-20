import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Register() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [userData, setUserData] = useState({})
  const navigate = useNavigate()
  const register = (e) => {
    e.preventDefault()
    
    axios.post("http://localhost:3000/user/register", userData)
    .then(res => {
      alert("Registered successfully")
      navigate("/login")
    })
    .catch(err => {
      console.log(err)
      alert("something went wrong")
    })
  }

  const changeHandler = (event, field) => {
    let tempUserData = {...userData}
    tempUserData[field] = event.target.value
    console.log(tempUserData)
    setUserData(tempUserData)
  }

  return (
    <>
        <h1>Register</h1>
        <div className='form-container'>
          <form onSubmit={register}>
              <input type="text" className='input2' placeholder='Username' onChange={(e) => changeHandler(event, "username")} />  
              <input type="email"  className='input2' placeholder='Email' onChange={(e) => changeHandler(event, "email")} />          
              <input type="password"  className='input2' placeholder='Password' onChange={(e) => changeHandler(event, "password")} />
              <input type="password"  className='input2' placeholder='Confirm Password' onChange={(e) => changeHandler(event, "confirmpassword")} />
              <input type="text"  className='input2' placeholder='Phone Number' onChange={(e) => changeHandler(event, "phone")} />
              <div className='check-box'>
                  <p>Agree to terms and conditions </p><input type='checkbox'/>
              </div>
              <input type="submit" className='btn3-btn' value='Register'/>
          </form>
          <div className='btn4'>
              <p>Already have an account ?</p><Link to="/login" className='btn4-btn'>Login</Link>
          </div>
        </div>
    </>
  )
}

export default Register
