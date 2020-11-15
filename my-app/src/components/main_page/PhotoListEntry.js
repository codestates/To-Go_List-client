/* eslint-disable */
import React from "react";

const PhotoListEntry = (props) => {
  {console.log(props.photo)};
  let photo = props.photo.urls.small;
  return (
    <>
      <div className="photo" style={{backgroundImage:`url(${photo})`}}>
      </div>
    </>
  );
}

export default PhotoListEntry;
