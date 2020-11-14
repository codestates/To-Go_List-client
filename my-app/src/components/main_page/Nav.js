import React from "react";
import { Link } from "react-router-dom"

const Nav = () => (
  <nav className="local_nav">
      <div className="local_nav_links">
        <Link to='/' className="logo_name" >
        <img className ="logo_size" src ="http://penzim.synology.me/image/firstProject/icon/To-Go_List-logo-black.png"></img>
          </Link>
        <Link to='/signin'className="hover">Login</Link>
        <Link to='/signup' className="hover">Sign-up</Link>
      </div>
  </nav>
);


export default Nav;