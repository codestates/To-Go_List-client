/* eslint-disable */
import React from "react";
//import { Link, Route, Redirect } from "react-router-dom"
import Nav from "../components/Func_page/Nav";
import ToGoList from "../components/Func_page/ToGoList";
import Post from "../components/Func_page/Post";

import './Funcpage.css'
class Funcpage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className="start_page">
                <Nav></Nav>
                <Post></Post>
                <ToGoList></ToGoList>
            </div>
        )
    }
}

export default Funcpage;