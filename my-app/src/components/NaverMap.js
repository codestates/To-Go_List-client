/* eslint-disable */
import React from 'react';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';
function ShowNaverMap(props) {
  const { lat, lng, getLatLng} = props;
  console.log(props)
  console.log('lat: ', lat, 'lng: ', lng , "getLatLng: ", getLatLng);
  return (
    <>
      <NaverMap
        mapDivId={'maps-getting-started-uncontrolled'}
        style={{
          width: '100%',
          height: '42vh',
        }}
        center={{ lng: Number(lat), lat: Number(lng) }}
        defaultZoom={15}
      />
    </>
  );
}
export default ShowNaverMap;