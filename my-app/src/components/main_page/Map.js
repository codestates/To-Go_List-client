/* eslint-disable */
import React from 'react';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';
function ShowNaverMap(props) {
  const { lat, lng } = props;
  console.log('lat: ', lat, 'lng: ', lng);
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