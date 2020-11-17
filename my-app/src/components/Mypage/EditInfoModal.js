/* eslint-disable */
import React from "react";
import './EditInfoModal.css'

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
                            
                            
                    <button className="empty_modal_close_btn" onClick={() => { this.props.onClose() }}>
                    닫기
                </button>
                </div>
                </div>
            </div>
        )
  }
}
