/* eslint-disable */
import React from "react";
import { Link, Route, Redirect } from "react-router-dom"
import axios from "axios";
axios.defaults.withCredentials = true;

class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.handleLogout = this.handleLogout.bind(this)
    }
    handleLogout() {
        
        // axios({
        //     method: 'post',
        //     url: 'http://13.209.21.127:3001/user/signout',
        // }
        // ).then(res => {
        //     this.props.history.push("/")
        // }
            
        // )
        // this.props.history.push("/")
    }
    
    render() {
        return (
            <div className="mypage_nav">
                <div className="mypage_logo_box">
                    <Link to='/' className="mainpage_link">
                    <img className="Mypage_logo" src="http://penzim.synology.me/image/firstProject/icon/To-Go_List-logo-black.png" />
                 </Link>
                </div>
                <div className="Mypage_logout_btn_box">
                    <Link to='/' className="Mypage_logout_btn" onClick={this.handleLogout()}>
                        로그아웃
                </Link>
                </div>
                
            </div>
        )
    }
}

export default Nav