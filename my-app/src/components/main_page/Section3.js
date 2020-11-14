/* eslint-disable */
import React from "react";

const Section3 = ({handleSubmit, handleChange}) => {
  return (
    <>
      <section className="scroll_section" id="scroll_section_3">
        {/* {this.state.photos.map((photo) => {
          <img src = {photo.urls.small} />
        })} */}
        <div className="photos">
        <div className ="photo">1</div>
        <div className ="photo">2</div>
        <div className ="photo">3</div>
        <div className ="photo">4</div>
        <div className ="photo">5</div>
        <div className ="photo">6</div>
        </div>
        <div className ="search_photos">
          <input className = "input" type = "text" placeholder = "search for here" onChange = {handleChange}/>
          <button className = "btn" onClick = {handleSubmit}>Search</button>
        </div>
        <div className ="photo_description">
          <p>
            코로나가 끝나면 가고 싶었던 <br></br>나라들의 사진을 보고 리스트에 담아보세요
          </p>
        </div>
      </section>
    </>
  )
}

export default Section3