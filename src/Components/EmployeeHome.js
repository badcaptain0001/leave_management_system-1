import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
const Home = () => {
  const [empId, setEmpId] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    console.log(empId, password);
  }, [empId, password]);
  const data = {
    email: empId,
    password: password
  }
  const handleLogin = () => {
    axios.post('https://marketplaceb.herokuapp.com/api/loginemployee', data)
      .then(res => {
        console.log(res.data);
        if (res.data.message === 'Login successful' && res.data.data != null) {
          localStorage.setItem('empDetails', JSON.stringify(res.data.data));
          window.location.href = '/employee-login';
        }
        else{
          toast.error('please enter valid credentials');
        }
      })
      .catch(err => {
        console.log(err);
        toast.error('Invalid Credentials');
      })
  }
  return (
    <div>
      <Toaster />
      <nav className="navbar navbar-dark bg-primary" style={{ height: "50px" }}>
        <div className="container">
          <span className="text-warning myStyle">
            <i className="fa fa-users text-dark " /> Leave Management System{" "}
          </span>
          <Link to={"/admin-home"} className="btn btn-warning">
            {" "}
            login admin
          </Link>
        </div>
      </nav>

      <div className="container">
        <iframe src="https://embed.lottiefiles.com/animation/93794" className="gif" title="a4"></iframe>
      </div>

      <div className="container2">
        <h1 className="fw-bold emp">Employee Login</h1>
        <br></br>
        <form>
          <div className="mb-4">
            Employee ID: <br></br> <br></br>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="enter your Employee Email"
              required
              onChange={(e) => setEmpId(e.target.value)}
            />
          </div>
          <br></br>
          <div className="mb-4">
            Password : <br></br>
            <br></br>
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="enter your password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div onClick={handleLogin} className="btn btn-success mb-4">
            <i className=" fa fa-sign-in" /> Login
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
