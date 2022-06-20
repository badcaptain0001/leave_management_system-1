import React from "react";
import {Link} from 'react-router-dom'
const Home = () => {

    
  return (
   
    <div>
        <nav className="navbar navbar-dark bg-primary" style={{ height: "50px" }}>
    <div className="container">
      <span className="text-warning myStyle">
        <i className="fa fa-users text-dark " /> Leave Management System </span>
        <Link to={"/employee-home"} className="btn btn-warning"> employee login</Link>
        
    </div>
  </nav> 

  <div className="container">
    
  <iframe className="gif"  src="https://embed.lottiefiles.com/animation/9573" title="a2"></iframe>
    </div>   

    <div className="container2">
    
        <h1 className="fw-bold emp" >Admin Login</h1>
        <br></br>
    <form>
     
    <div className="mb-4">
                   Admin:  <br></br> <br></br><input type="text" className="form-control form-control-lg" placeholder="enter your admin Id"required/>
                 </div>
               <br></br>
                 <div className="mb-4">
                   Password : <br></br><br></br><input type="password" className="form-control form-control-lg" placeholder="enter your password" required/>
                 </div>
                 <div className="mb-4">
                   <br></br>
                 <Link to={'/admin-login'} className="btn btn-success"><i className =" fa fa-sign-in"/>    Login</Link>
                 </div>
                
    </form>
      </div>
      </div>   
  




   
  );
};

export default Home;
