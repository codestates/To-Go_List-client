/* eslint-disable */
import React from "react";
import SearchPhotos from "./SearchPhotos";
import PhotoListEntry from "./PhotoListEntry";

const Section3 = (props) => {
  {console.log(props.photos)}
  return (
    <>
      <section className="scroll_section" id="scroll_section_3">
        <div className="photos">
          {props.photos.map((photo) => {
              return(
                <PhotoListEntry photo = {photo} key = {photo.id}/>
              )
          })}
        </div>
        <SearchPhotos searchSubmit = {(value) => props.handleSubmit(value)}/>
      </section>
    </>
  );
}

export default Section3;

