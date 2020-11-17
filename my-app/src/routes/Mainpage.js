/* eslint-disable */
import React from "react";
import './Mainpage.css';
import axios from "axios"
import { UNSPLASH_API_KEY } from "../config/config";
import Nav from '../components/main_page/Nav';
// import "../Animation";
import Section0 from '../components/main_page/Section0';
import Section1 from '../components/main_page/Section1';
import Section2 from '../components/main_page/Section2';
import Section3 from '../components/main_page/Section3';
import Footer from '../components/main_page/Footer';
import { fakeDate } from '../fakeData';

class Mainpage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      photos:fakeDate,
      clientId: UNSPLASH_API_KEY,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    const script = document.createElement("script");
    script.src = "../Animation.js";
    script.type="text/jsx"
    script.async = true;
    document.body.appendChild(script)    
  }

  
  handleSubmit(value){
    const clientId= this.state.clientId
    const searhResult = value
    let url = `/search/photos?page=1&query=${searhResult}&client_id=${clientId}` 
    console.log(url)
    axios.get(url).then((res) => {
      console.log(res)
      this.setState({
        photos: res.data.results
      })
    }).catch(err => console.log("데이터가 없습니다."))
 }

  render(){
    const {isLoading} = this.state;
    return(
      <div className="container">
        <Nav />
        <Section0 />
        <Section1 />
        <Section2 />
        <Section3 handleSubmit = {this.handleSubmit} photos = {this.state.photos}/>
        <Footer />
	    </div>
      )
  }
}

export default Mainpage;