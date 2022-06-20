import React from 'react'
import { Link } from "react-router-dom";
function Navbar({addEmp}) {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary" style={{ height: "50px" }}>
        <div className="container">
          <span className="text-default fw-bold " style={{ fontSize: "25px" }}>
            <i className="fa fa-users text-dark " /> Admin Dashboard
          </span>
          <div onClick={addEmp} className="btn btn-warning">
            <i className="fa fa-users" /> add employees
          </div>
          <Link to={"/apply-leave"} className="btn btn-warning">
            <i className="fa fa-user-circle" /> employee information
          </Link>
          <Link to={"/maintenance"} className="btn btn-warning">
            <i className="fa fa-map-pin" /> maintenance
          </Link>
          <Link to={"/admin-home"} className="btn btn-danger">
            <i className="fa fa-lock" /> logout
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar