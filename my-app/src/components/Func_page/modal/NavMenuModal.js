/* eslint-disable */
import React from "react";
import './NavMenuModal.css'
import axios from "axios";
import { Link } from "react-router-dom";
axios.defaults.withCredentials = true;

export default class NavMenuModal extends React.Component {
    constructor(props){
        super(props);
        this.state={

        };
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout() {
    //   axios({
    //     method: 'post',
    //     url: 'https://togolist-server.ml/user/signout',
    // }
    // ).then(res => {
    //     console.log('왜실행되는거야?',res)
    //     localStorage.removeItem('isLogin')
    //     this.props.history.push("/")
    // }
      
    // ).catch((err) => {
    //     console.log(err)

        
    // }) 
    }
    

    render() {
    const {show, closeModal} = this.props
        return (
          <div className="modal_wrapper_Nav" style = {{
              transform: show ? "translateX(0vh)" : "translateX(-100vh)",
              opacity: show ? '1' : '0'
          }}>
            <div className="modal_content">
                <div className="modal_body">
                    <div className="menu_name">
                    <Link onClick={this.handleLogout()} to='/mypage'>마이페이지</Link>
                    </div>
                </div>
                <div className="modal_body">
                  <div className="menu_name">
                    다크모드
                  </div>
                </div>
                <div className="modal_body">
                  <div className="menu_name">
                    <Link to='/' onClick={this.handleLogout} >로그아웃</Link>
                  </div>
                </div>
                <div className="modal_body">
                  <button onClick={closeModal} className="close_modal_btn">close</button>
                </div>
            </div>
          </div>
        )
  }
}

