import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate()
  const [data, setData] = useState({ email: '', password: '' })
  const [otp, setOtp] = useState('')
  const [otpToken, setOtpToken] = useState('')
  const [showOtpModal, setShowOtpModal] = useState(false)

  // Handle login form submission
  const loginformSubmitHandler = (e) => {
    e.preventDefault()
    axios.post( `${API_URL}/login`, data)
      .then(res => {
        // Store the token from the response
        localStorage.setItem("token", res.data.token)
        // Store the OTP token to verify OTP
        setOtpToken(res.data.token)
        // Show OTP modal
        setShowOtpModal(true)
      })
      .catch(err => {
        alert(err.response?.data?.message || 'Something went wrong!')
      })
  }

  // Handle changes in form input
  const formchangeHandler = (event, field) => {
    let tempData = { ...data }
    tempData[field] = event.target.value
    setData(tempData)
  }

  // Handle OTP submission
  const handleOtpSubmit = (e) => {
    e.preventDefault()
    // Send OTP for verification
    axios.post("http://localhost:3000/verify-otp", { token: otpToken, otp })
      .then(res => {
        alert('Login successful!')
        navigate("/") // Redirect to the home page or desired route
      })
      .catch(err => {
        alert(err.response?.data?.message || 'Invalid OTP, please try again!')
      })
  }

  return (
    <>
      <h1>Login</h1>
      <div className="form-container">
        <form onSubmit={loginformSubmitHandler}>
          <input
            type="email"
            className="input2"
            placeholder="Email"
            onChange={(e) => formchangeHandler(e, "email")}
            value={data.email}
          />
          <input
            type="password"
            className="input2"
            placeholder="Password"
            onChange={(e) => formchangeHandler(e, "password")}
            value={data.password}
          />
          <input type="submit" className="btn3-btn" value="Login" />
        </form>
        <div className="btn4">
          <p>Don't have an account?</p>
          <Link to="/register" className="btn4-btn">Register</Link>
        </div>
      </div>

      {/* OTP Modal */}
      {showOtpModal && (
        <div className="otp-modal">
          <div className="otp-modal-content">
            <span className="close" onClick={() => setShowOtpModal(false)}>&times;</span>
            <h2>Enter OTP</h2>
            <input
              type="text"
              className="input2"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
              value={otp}
            />
            <button className="btn3-btn" onClick={handleOtpSubmit}>Submit OTP</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Login
