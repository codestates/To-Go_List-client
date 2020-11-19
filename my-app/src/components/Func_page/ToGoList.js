/* eslint-disable */

import React from "react";
import axios from "axios"


class ToGoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: "",
            location: "",
            mapimgpath: "",
            tag: "",
            info: ""
        }
    }

    componentDidMount() {
        axios({
            method: "get",
            url: "http://localhost:3001/post"
        })
            .then((res) => {
                console.log(res)
                this.setState({
                    content: res.data.content
                })
            })
    }


    render() {
        return (
            <section className="start_list">
                <div className="mypage_mycontent_box">
                    <h1>To Go List</h1>
                    <div className="start_content_frame">
                        <div className="mypage_mycontent_map"></div>
                        <div className="mypage_mycontent_content">{this.props.content}</div>
                        <div className="mypage_mycontent_tag">{this.props.tag}</div>
                        <div>
                            <button className="edit_post">수정</button>
                            <button className="remove_post">삭제</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ToGoList