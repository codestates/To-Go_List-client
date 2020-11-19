/* eslint-disable */
import React from "react";
import {RenderAfterNavermapsLoaded, NaverMap, Marker} from "react-naver-maps";


function ShowNaverMap(props) {
  const {lat, lng} = props
  console.log("lat: ", lat, "lng: ", lng)
  return (
    <NaverMap
      mapDivId={'maps-getting-started-uncontrolled'}
      style={{
        width: '100%', 
        height: '42vh'
      }}
      defaultCenter={{lng: 37.5666103, lat: 126.9783882   }}
      defaultZoom={13} 
    />
  );
}

// class ShowNaverMap extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       naverClientId:NAVER_MAP_CLIENTID,
//       naverClientSecreteKey: NAVER_MAP_SECRETE_KEY,
//       latitude: 126.9783882,
//       longitude: 37.5666103,
//     };
//   }
  
//   render(){
//     console.log(this.props)
//     return(
//       <NaverMap
//       mapDivId={'maps-getting-started-uncontrolled'}
//       style={{
//         width: '100%', 
//         height: '42vh'
//       }}
//       defaultCenter={{ lat: 126.9783882 , lng: 37.5666103  }}
//       defaultZoom={20} 
//     />
//     );
//   }
// }

export default ShowNaverMap;