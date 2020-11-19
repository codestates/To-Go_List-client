/* eslint-disable */
import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps';
import ShowNaverMap from './Map';
import { NAVER_MAP_CLIENTID } from "../../config/config";


class Section2 extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  } 
  handleChange (e){
    this.setState({
      value: e.target.value,
    });
  }
  


  render(){
    console.log(this.props)
    return(
      <>
        <section className="scroll_section" id="scroll_section_2">
          <div className = "gif_part" id="map" style={{width:"100%"}, {height:"400px"}}>
    
            <RenderAfterNavermapsLoaded
              ncpClientId={NAVER_MAP_CLIENTID}
              error={<p>Maps Load Error</p>}
              loading={<p>Maps Loading...</p>}>
            <ShowNaverMap lat = {this.props.lat} lng = {this.props.lng}/>
            </RenderAfterNavermapsLoaded>            
          </div>
          <div className = "gif_description">
            <div className ="search_photos">
              <input className = "input" type = "text" placeholder = "search for location" onChange={this.handleChange}/>
              <button className = "btn" onClick={() => this.props.getLatLng(this.state.value)}>Search</button>
              {/* <button className = "btn" onClick={() => this.props.handleSubmit(this.state.value)}>change</button> */}
            </div>
            <p> 기능 설명<br></br> 
              1. 저장했던 장소는 태그했던 내용을 바탕으로 검색하면 됩니다.<br></br>
              2. 저장한 데이터를 마이페이지에서 쉽게 확인 가능합니다<br></br>
              3. 우선순위를 설정해서 가고 싶은 장소의 순위를 정할 수 있습니다.
            </p>
          </div>                
       </section>
      </>
    )
  }
}

export default Section2;