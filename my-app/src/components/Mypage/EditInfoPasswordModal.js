/* eslint-disable */
import axios from "axios";
import React from "react";
import './EditInfoPasswordModal.css'

export default class EditInfoPasswordModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            password : ''
        }
        this.CheckUserPassword = this.CheckUserPassword.bind(this)
    }

    CheckUserPassword() {
        const { password } = this.state
        axios({
            method: 'post',
            url: 'http://13.209.99.91:3001/user/checkpwd',
            data: {
            password: password
            }
        }).then(response => {
            console.log(response)
            this.props.onClose(),
            this.props.onShow() 
        }).catch(err => {
            console.log(err)
        })
    }
    handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value});
    };
    
    render() {
        if (!this.props.show) {
          return null
      }
        return (<div className="modal_page">
            <div className="modal_frame">
            <div className="modal-main">
                    <div>{this.props.children}</div>
                    <input type="password" onChange={this.handleInputValue("password")}/>
            <button className="empty_modal_close_btn" onClick={() => { this.CheckUserPassword()}}>
                전송
            </button>
                </div>
                </div>
            </div>
        )
  }
}
