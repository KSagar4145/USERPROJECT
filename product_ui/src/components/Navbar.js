import {React}from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Product Management System
          </a>
          <Link to="/" className="navbar-brand" >
            Home</Link>
          <Link to="/addProduct"className="navbar-brand" >
            Add Product
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
