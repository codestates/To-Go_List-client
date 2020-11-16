/* eslint-disable */
import React from "react";
import { Link, Route, Redirect } from "react-router-dom"

class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
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
                <button className="Mypage_logout_btn">
                        로그아웃
                </button>
                </div>
                
            </div>
        )
    }
}

export default Nav