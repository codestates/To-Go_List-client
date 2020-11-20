/* eslint-disable */
import React from "react";
//import { Link, Route, Redirect } from "react-router-dom"
import Nav from "../components/Func_page/Nav";
import ToGoList from "../components/Func_page/ToGoList";
import Post from "../components/Func_page/Post";
import axios from "axios"

import './Funcpage.css'

axios.defaults.withCredentials = true;
class Funcpage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post: ""
        }
    }

    componentDidMount() {
        console.log("기능페이지 didmount중입니다")
        
        
        axios({
            method: 'get',
            url: 'https://togolist-server.ml/post',
        },{withCredentials :true}
        ).then((res) => {
                this.setState({
                    post:res.data
                })
            console.log("기능페이지 포스트 받아오니?", res)
            console.log("기능페이지 스테이트좀 보려고 합니다", this.state.post)
            })
    }


    createPost = () => {
        axios({
            method: 'get',
            url: 'https://togolist-server.ml/post',
        },{withCredentials :true}
        ).then((res) => {
                this.setState({
                    post:res.data
                })
            console.log("생성 된거니?",res)
            })
    }


    render() {
        return (
            <div className="start_page">
                <Nav></Nav>
                <Post createpost={this.createPost }></Post>
                <ToGoList post={this.state.post }></ToGoList>
            </div>
        )
    }
}

export default Funcpage;