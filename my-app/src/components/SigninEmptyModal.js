/* eslint-disable */
import React from "react";
import './SigninEmptyModal.css'

export default class SigninEmptyModal extends React.Component {
    render() {
        if (!this.props.show) {
          return null
      }
        return (
          <div className="modal_page">
            <div className="modal_frame">
              <div className="modal-main">
                <div>{this.props.children}</div>
                <button className="empty_modal_close_btn" onClick={() => this.props.onClose()}>
                    닫기
                </button>
                </div>
            </div>
          </div>
        )
  }
}
