import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  const [registrationData, setRegistrationData] = useState({
    username: "",
    password: "",
  });

  const handleRegisterSubmit = async(e) => {
    e.preventDefault();

    // axios.post("http://localhost:8000/register", registrationData) === app.post("/register", async (req, res) => {
    try {
      const response =  await axios.post("http://localhost:8000/register", registrationData)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }

    setRegistrationData({
      username: "",
      password: ""
    })
  };

  const handleRegistration = (e) => {
    const { name, value } = e.target;
    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2> Registration page</h2>
      <form onSubmit={handleRegisterSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleRegistration}
          value={registrationData.username}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleRegistration}
          value={registrationData.password}
          required
        />
        <button type="submit">Register</button>

        <p>
          Already Register ? <Link to="/login">Login Here</Link>
        </p>
      </form>
    </div>
  );
};

export default RegistrationPage;
