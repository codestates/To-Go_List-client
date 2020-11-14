/* eslint-disable */
import React from "react";
import './Mainpage.css';
import axios from "axios"
import { UNSPLASH_API_KEY } from "../config/unsplash"
import Nav from '../components/main_page/Nav';
import "../Animation"
import Section0 from '../components/main_page/Section0';
import Section1 from '../components/main_page/Section1';
import Section2 from '../components/main_page/Section2';
import Section3 from '../components/main_page/Section3';
import Footer from '../components/main_page/Footer'

class Mainpage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      photos:[],
      searh:"",
      clientId: UNSPLASH_API_KEY,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    const script = document.createElement("script");
    script.src = "../Animation.js";
    script.type="text/jsx"
    script.async = true;
    document.body.appendChild(script)    
    console.log("DidMount")

    // window.addEventListener('load', Animation)
    
    // setTimeout(() => {
    //   this.setState({isLoading: false})
    // }, 5000)
  }

  

  handleChange = (e) => {
    this.setState({
      searh: e.target.value,
    })
  }
 
  handleSubmit = (e) => {
    const clientId= this.state.clientId
    const searhResult = this.state.searh
    const url = `https://api.unsplash.com/search/photos?page=1&query=${searhResult}&client_id=${clientId}` 
    console.log(url)
    axios.get(url).then((res) => {
      this.setState({
        photos: res.data.results
      })
    })
 }

  render(){
    console.log("render part")
    const {isLoading} = this.state;
    return(
      <div className="container">
        <Nav />
        <Section0 />
        <Section1 />
        <Section2 />
        <Section3 handleChange = {this.handleChange} handleSubmit = {this.handleSubmit}/>
        <Footer />
	    </div>
      )
  }
}

export default Mainpage;