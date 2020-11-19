/* eslint-disable */
import React from "react";
import './EditInfoModal.css'
import { Link, Route, Redirect } from "react-router-dom"
import axios from "axios";

axios.defaults.withCredentials = true;

export default class EditInfoModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            phonenum: '',
            username: '',
            password: '',
            passwordck: ''
        }
    }

    handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value});
    };

    handleSubmit = () => {
        const { phonenum, username, password } = this.state
        console.log('patch합니다')
        axios({
          method: 'patch',
          url: 'http://13.209.99.91:3001/user/editinfo',
            data: {
                phonenum,
                username,
            password
          }
        })
            .then((res) => {
                console.log("뭐가 찍히는게야", res.response)
                this.props.editinfo()  
          })
            .catch((err) => {
                console.dir(err)
            })
    };

    render() {
        {console.log('프롭스 뱉어라',this.props)}
        if (!this.props.show) {
          return null
        }
        


        return (<div className="modal_page">
            <div className="modal_frame">
            <div className="modal-main">
                    
                    <div className="general_login_form">
                            <div className="editinfo_box">
                                <span className="editinfo_username">이름</span>
                                <input className="input_username" type="text" onChange={this.handleInputValue("username")}></input>
                            </div>
                            <div className="editinfo_box">
                                <span className="editinfo_phonenum">휴대폰 번호</span>
                                <input className="input_tel" type="tel" onChange={this.handleInputValue("phonenum")}></input>
                            </div>
                    </div>
                    <div className="editinfo_box">
                                <span className="editinfo_password">비밀번호</span>
                                <input className="input_edit_password" type="password" onChange={this.handleInputValue("password")}></input>
                            </div>
                            <div className="editinfo_box">
                                <span className="editinfo_passwordck">비밀번호 확인</span>
                                <input className="input_password_check" type="password" onChange={this.handleInputValue("passwordck")}></input>
                            </div>
                            
                            
                    <button className="editinfo_modal_close_btn" onClick={() => { this.props.onClose() }}>
                        닫기
                </button>
                <button className="editinfo_modal_submit_btn" onClick={() => { this.handleSubmit(), this.props.onClose() }}>
                    전송
                </button>
                </div>
                </div>
            </div>
        )
  }
}
