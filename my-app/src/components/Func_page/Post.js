/* eslint-disable */

import React from "react";
//import { Link, Route, Redirect } from "react-router-dom"
import axios from "axios";
import SearchModal from "../../components/SearchModal"

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: [],
            location: "",
            isModalOpen: false,
            tag: "",
            content: "",
            mapimgpath: ""
        }
    }

    handleChange = (key) => (e) => {
        this.setState({ [key]: e.target.value }
        );
    };

    openModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }
    closeModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }

    searchhandle = async () => {
        const ID_KEY = '5depur52lv';
        const SECRET_KEY = 'HvYrvVGgpBrsf5GVeYPf8PV8PcsnTBDhAgBVYRbC';
        const search = this.state.location;
        try {
            if (search === "") {
                this.setState({ result: [] })
            } else {
                const { data: { items } } = await axios.get('https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode', {
                    params: {
                        query: search,
                    },
                    headers: {
                        'X-NCP-APIGW-API-KEY-ID': ID_KEY,
                        'X-NCP-APIGW-API-KEY': SECRET_KEY
                    }
                });
                this.setState({ result: items });
            }
        } catch (error) { console.log(error); }
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





    render() {
        return (
            <div className="start_newpost">
                <div className="start_newpost_frame">
                    <input id="input_text" type="text" placeholder="내용을 입력하세요" onChange={this.handleChange("content")} value={this.state.content}></input>
                    <input id="input_tag" type="text" placeholder="태그를 입력하세요" onChange={this.handleChange("tag")} value={this.state.tag}></input>
                    <input id="input_location" type="text" placeholder="위치를 검색하세요" onChange={this.handleChange("loction")} value={this.state.location}></input>
                    <button className="search_location" onChange={this.searchhandle} onClick={this.openModal} >검색</button>
                    <button className="add_btn" type="submit" onClick={() => { this.handleSubmit(), this.hashTag() }}>추가하기</button>
                </div>
                <SearchModal show={this.state.isModalOpen} closeModal={this.closeModal} />
            </div>
        )
    }
}

export default Post

