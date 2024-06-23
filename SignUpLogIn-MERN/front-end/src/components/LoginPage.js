import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"

const LoginPage = () => {
const [loginData, setLoginData] = useState({
  username: " ",
  password : " "
})

// Submit function

const handleSubmit = async(e) =>{
  e.preventDefault();

  try{
    const response = await axios.post('http://localhost:8000/login', loginData);

    const {success, message} = response.data;

    if(success){
      console.log("Login Successfully")
    }else{
      console.log("message")
    }

  }catch(error){
      console.log("login error", error)    
  }

  setLoginData({
    username: " ",
    password: " "
  })
}

  const handleLogin = (e) =>{
     const {name, value} = e.target;
     setLoginData((prevData) =>({
      ...prevData, [name] : value
     }))
  }

  return (
    <div>
      <h2>  Login page</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name='username' placeholder='Username' required onChange={handleLogin} value={loginData.username} />
        <input type="password" name='password' placeholder='Password' required onChange={handleLogin} value={loginData.password} />
        <button type='submit'>Login</button>

        <p>Not Registered yet ?  <Link to="/register">Register Here</Link></p>
      </form>
    </div>
  )
}

export default LoginPage
