/* eslint-disable */

import React from "react";
import axios from "axios";
import SearchModal from "../../components/SearchModal"
import { NAVER_MAP_CLIENTID } from "../../config/config";
import { NAVER_MAP_SECRETE_KEY } from "../../config/config";

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: "",
          isModalOpen: false,
          latitude: null,
          longitude: null,
          naverClientId:NAVER_MAP_CLIENTID,
          naverClientSecreteKey: NAVER_MAP_SECRETE_KEY,
          location: "",
          tag: "",
          content: "",
          mapimgpath: ""
        }
        this.getLatLng = this.getLatLng.bind(this);
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({ value: e.target.value }
        );
    };

    handleKeyChange = (key) => (e) => {
        this.setState({ [key]: e.target.value }
        );
    };

    openModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }
    closeModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }
    
    hashTag = () => {
        const { tag } = this.state;
        axios
            .post("http://localhost:3001/hashtag/new", {
                tag: tag
            })
            .then((res) => {
                console.log(res.response)
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err.response.data);
                }
            })
    }
    handleSubmit = () => {
        const { mapimgpath, content, location } = this.state;
        axios({
            method: 'post',
            url: 'http://localhost:3001/post/new',
            data: {
                content: content,
                location: location,
                mapimgpath: mapimgpath
            }
        })
            .then((res) => {
                console.log(res.response)
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err.response.data);
                }
            })
    };

    async getLatLng(value){
      console.log("pass")
      const naverClientId= this.state.naverClientId;
      const naverClientSecreteKey = this.state.naverClientSecreteKey;
      let longitudeY = this.state.longitude;
      let latitudeX = this.state.latitude;
      const searhResult = value;
      let url = `/naver/map-geocode/v2/geocode?query=${searhResult}`
      console.log(url)
      await axios.get(url, {
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
      
    render() {
        return (
            <div className="start_newpost">
                <div className="start_newpost_frame">
                    <input id="input_text" type="text" placeholder="내용을 입력하세요" onChange={this.handleKeyChange("content")} value={this.state.content}></input>
                    <input id="input_tag" type="text" placeholder="태그를 입력하세요" onChange={this.handleKeyChange("tag")} value={this.state.tag}></input>
                    <input id="input_location" type="text" placeholder="위치를 검색하세요" onChange={this.handleChange} value={this.state.location}></input>
                    <button className="search_location" onClick={(event) =>{
                        this.openModal()
                        this.getLatLng(this.state.value)
                    }}>검색</button>
                    <button className="add_btn" type="submit" onClick={() => { this.handleSubmit(), this.hashTag() }}>추가하기</button>
                </div>
                <SearchModal show={this.state.isModalOpen} closeModal={this.closeModal} value = {this.state.value} lat = {this.state.latitude} lng = {this.state.longitude}/>
            </div>
        );
    }
}


export default Post


