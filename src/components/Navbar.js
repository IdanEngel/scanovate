import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import HomeIcon from '@material-ui/icons/Home';

const Navbar = () => {

// Nav component, return to the default home rout 
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
         <HomeIcon style={{fontSize: 25}}/> Home Page
        </Link>
      </h1>
    </nav>
  );
};

export default Navbar;
