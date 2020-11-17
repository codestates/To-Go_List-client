import React from "react";
import { Link } from "react-router-dom"

class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="start_nav">
                <div className="start_logo_box">
                    <Link to='/' className="mainpage_link">
                        <img className="Mypage_logo" src="http://penzim.synology.me/image/firstProject/icon/To-Go_List-logo-black.png" />
                    </Link>
                </div>
                <input id="search" placeholder="검색어를 입력하세요" type="text"></input>
                <button className="search_btn">검색</button>
                <button className="menu_btn"  >메뉴</button>

            </div>
        )
    }
}

export default Nav