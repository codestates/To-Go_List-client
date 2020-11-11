import React from "react";
import './MainPage.css';
import { Link } from "react-router-dom"

class Mainpage extends React.Component{
  render(){
      return(
        <div className="container">
		<nav className="local-nav">
			<div className="local-nav-links">
				<Link to='/' className="logo-name" >To-Go_List</Link>
				<Link to='/signin'className="hover">Login</Link>
				<Link to='/signup' className="hover">Sign-up</Link>
			</div>
		</nav> 
		<section className="scroll-section" id="scroll-section-0">
		  <h1>To-Go_List와 함께 가고 싶은 곳을 채워보세요</h1>
		  <img className="logo"src="http://penzim.synology.me/image/To-Go_List-logo-black.png"></img>
		</section>
		<section className="scroll-section" id="scroll-section-1"></section>
		<section className="scroll-section" id="scroll-section-2"></section>
		<section className="scroll-section" id="scroll-section-3"></section>
	</div>
      )
  }
}

export default Mainpage;