import React from "react";
import { Link } from "react-router-dom";
import NavMenuModal from "./modal/NavMenuModal.js";

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          showMenu: false
        };
    }
    showMenuModal = () =>{
      this.setState({
          showMenu: !this.state.showMenu,
      });
    }

    closeMenuModal = () =>{
        this.setState({
            showMenu: !this.state.showMenu,
        });
    }

    render() {
        return (
            <>
            <div className="start_nav">
                {this.showInfo ? <div onClick={this.closeMenuModal} className="back_drop"></div>:null}
                <div className="start_logo_box">
                    <Link to='/' className="mainpage_link">
                        <img className="Funcpage_logo" src="http://penzim.synology.me/image/firstProject/icon/To-Go_List-logo-black.png" />
                    </Link>
                </div>
                <input id="search" placeholder="검색어를 입력하세요" type="text"></input>
                <button className="search_btn">검색</button>
                <button className="menu_btn" onClick ={this.showMenuModal}>메뉴</button>
            </div>
                <NavMenuModal show={this.state.showMenu} closeModal={this.closeMenuModal}/>
            </>
        );
    }
}

export default Nav;