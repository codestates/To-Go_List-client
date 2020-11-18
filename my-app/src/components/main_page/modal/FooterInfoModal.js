/* eslint-disable */
import React from "react";
import './FooterInfoModal.css'

export default class FooterInfoModal extends React.Component {
    
    render() {
    const {show, closeModal} = this.props
    console.log(show, closeModal)
        return (
          <div className="modal_wrapper_info" style = {{
              transform: show ? "translateY(0vh)" : "translateY(-100vh)",
              opacity: show ? '1' : '0'
          }}>
            <div className="modal_header_info">
                <p>Project Informaion</p> 
                <span onClick={closeModal} className="close_modal_btn_info">x</span>                
            </div>
            <div className="modal_content_info">
                <div className="modal_body_info">
                  <h4>info</h4>
                  <p>
                    프로젝트: To-Go_List<br/>
                    프론트 : 박지국, 배채겸, 이창근<br/>
                    백앤드: 이승철
                  </p>
                </div>
            </div>
            <div className="modal_footer_info">
              <button onClick={closeModal} className="close_modal_btn_info">close</button>
            </div>
          </div>
        )
  }
}

