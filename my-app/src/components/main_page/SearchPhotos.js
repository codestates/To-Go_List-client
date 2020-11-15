/* eslint-disable */
import React from "react";

class SearchPhotos extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value:"",
    }
    this.handleChange = this.handleChange.bind(this)
  }
    handleChange (e){
        this.setState({
          value: e.target.value,
        });
    }

  render(){
      return(
          <>
          <div className ="search_photos">
            <input className = "input" type = "text" placeholder = "search for photos" onChange = {this.handleChange}/>
            <button className = "btn" onClick = {() =>this.props.searchSubmit(this.state.value)}>Search</button>
          </div>
          <div className ="photo_description">
            <p>
              코로나가 끝나면 가고 싶었던 <br></br>나라들의 사진을 보고 리스트에 담아보세요
            </p>
          </div>
          </>          
      );
  }
}
export default SearchPhotos;