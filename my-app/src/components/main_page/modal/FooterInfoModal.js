/* eslint-disable */
import React from "react";
import './FooterInfoModal.css'

export default class FooterInfoModal extends React.Component {
    
    render() {
    const {show, closeModal} = this.props
    console.log(show, closeModal)
        return (
          <div className="modal_wrapper" style = {{
              transform: show ? "translateY(0vh)" : "translateY(-100vh)",
              opacity: show ? '1' : '0'
          }}>
            <div className="modal_header">
                <p>Project Informaion</p> 
                <span onClick={closeModal} className="close_modal_btn">x</span>                
            </div>
            <div className="modal_content">
                <div className="modal_body">
                  <h4>info</h4>
                  <p>
                    프로젝트: To-Go_List<br/>
                    프론트 : 박지국, 배채겸, 이창근<br/>
                    백앤드: 이승철
                  </p>
                </div>
            </div>
            <div className="modal_footer">
              <button onClick={closeModal} className="close_modal_btn">close</button>
            </div>
          </div>
        )
  }
}

