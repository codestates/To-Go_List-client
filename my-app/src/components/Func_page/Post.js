import React from "react";
//import { Link, Route, Redirect } from "react-router-dom"

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="start_newpost">
                <div className="start_newpost_frame">
                    <input id="input_text" type="text" placeholder="내용을 입력하세요"></input>
                    <input id="input_tag" type="text" placeholder="태그를 입력하세요"></input>
                    <input id="input_location" type="text" placeholder="위치를 검색하세요"></input>
                    <button className="search_location">검색</button>
                    <button className="add_btn" type="submit">추가하기</button>
                </div>
            </div>
        );
    }
}

export default Post;