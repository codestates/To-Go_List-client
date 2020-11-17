/* eslint-disable */
import React from "react";
import './EditInfoModal.css'

export default class EditInfoModal extends React.Component {

    handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value, incorrectInfo:false });
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
                            <div className="field">
                                <div className="editinfo_email">이메일</div>
                                <input className="input_email" type="email" onChange={this.handleInputValue("email")}></input>
                            </div>
                            <div className="field">
                                <div className="editinfo_label">패스워드</div>
                                <input className="input_password" type="password" onChange={this.handleInputValue("password")}></input>
                            </div>
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
