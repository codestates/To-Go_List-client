/* eslint-disable */
import React from "react";
import {RenderAfterNavermapsLoaded, NaverMap, Marker} from "react-naver-maps";


// function NaverMapAPI(props) {
//   const {lat, lng} = props
//   console.log("lat: ", lat, "lng: ", lng)
//   return (
//     <NaverMap
//       mapDivId={'maps-getting-started-uncontrolled'}
//       style={{
//         width: '100%', 
//         height: '42vh'
//       }}
//       defaultCenter={{ lat: Number(lat) , lng: Number(lng)  }}
//       defaultZoom={20} 
//     />
//   );
// }

class ShowNaverMap extends React.Component{
  constructor(props){
    super(props);
    this.state={

    };
  }

  render(){
    console.log(this.props)
    return(
      <NaverMap
      mapDivId={'maps-getting-started-uncontrolled'}
      style={{
        width: '100%', 
        height: '42vh'
      }}
      defaultCenter={{ lat: 126.9783882 , lng: 37.5666103  }}
      defaultZoom={20} 
    />
    );
  }
}

export default ShowNaverMap;