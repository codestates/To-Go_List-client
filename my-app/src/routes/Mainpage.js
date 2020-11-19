/* eslint-disable */
import React from "react";
import './Mainpage.css';
import axios from "axios"
import { UNSPLASH_API_KEY} from "../config/config";
import { NAVER_MAP_CLIENTID } from "../config/config";
import { NAVER_MAP_SECRETE_KEY } from "../config/config";
import Nav from '../components/main_page/Nav';
import "../Animation";
import Section0 from '../components/main_page/Section0';
import Section1 from '../components/main_page/Section1';
import Section2 from '../components/main_page/Section2';
import Section3 from '../components/main_page/Section3';
import Footer from '../components/main_page/Footer';
import { fakeDate } from '../fakeData';

axios.defaults.withCredentials = true;


class Mainpage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      photos:fakeDate,
      clientUnsplashId: UNSPLASH_API_KEY,
      search: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMapSubmit = this.handleMapSubmit.bind(this);
  }

  componentDidMount(){
    const script = document.createElement("script");
    script.src = "../Animation.js";
    script.setAttribute("id", "animation_script");
    script.type="text/jsx";
    script.async = true;
    document.body.appendChild(script);
  }
  
  componentWillUnmount(){
    let script = document.querySelector("#animation_script");
    if(script){
      script.remove()
    }
  }
  handleSubmit(value){
    const clientUnsplashId= this.state.clientUnsplashId;
    const searhResult = value;
    let url = `/api/search/photos?page=1&query=${searhResult}&client_id=${clientUnsplashId}` 
    console.log(url)
    axios.get(url).then((res) => {
      console.log(res)
      this.setState({
        photos: res.data.results
      })
    }).catch(err => console.log("데이터가 없습니다."))
 }

 handleMapSubmit(value){
  const naverClientId= this.state.naverClientId;
  const naverClientSecreteKey = this.state.naverClientSecreteKey;
  let longitudeY = this.state.longitude;
  let latitudeX = this.state.latitude;
  const searhResult = value;

  console.log(searhResult, naverClientId);
  let url = `/naver/map-geocode/v2/geocode?query=${value}&coordinate=${latitudeX},${longitudeY}`
  console.log(url)
  axios.get(url, {
    headers:{
      "X-NCP-APIGW-API-KEY-ID": naverClientId,
      "X-NCP-APIGW-API-KEY": naverClientSecreteKey,
    }
  }).then((res) => {
    console.log(res.data.addresses[0].x, res.data.addresses[0].y)
    this.setState({
      latitude: res.data.addresses[0].x,
      longitude: res.data.addresses[0].y,
    })
  }).catch(err => console.log("데이터가 없습니다."));
}


  render(){
    const {isLoading} = this.state;
    return(
      <div className="container">
        <Nav />
        <Section0 />
        <Section1 />
        <Section2 handleSubmit = {this.handleMapSubmit} search = {this.state.search} lat ={this.state.latitude} lng = {this.state.longitude}/>
        <Section3 handleSubmit = {this.handleSubmit} photos = {this.state.photos}/>
        <Footer />
	    </div>
      )
  }
}

export default Mainpage;