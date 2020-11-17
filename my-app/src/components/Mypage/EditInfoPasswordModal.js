/* eslint-disable */
import React from "react";
import './EditInfoPasswordModal.css'

export default class EditInfoPasswordModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            password : ''
        }
    }


    
    render() {
        {console.log('프롭스 뱉어라',this.props)}
        if (!this.props.show) {
          return null
      }
        return (<div className="modal_page">
            <div className="modal_frame">
            <div className="modal-main">
                    <div>{this.props.children}</div>
                    <input type="password" />
            <button className="empty_modal_close_btn" onClick={() => { this.props.onClose(), this.props.onShow() }}>
                닫기
            </button>
                </div>
                </div>
            </div>
        )
  }
}
