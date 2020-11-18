/* eslint-disable */
import React from "react";
import './FooterContactModal.css'

export default class FooterContactModal extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          
        }
    }
    
    render() {
    //     if (!this.props.show) {
    //       return null
    //   }
    const {show, closeModal} = this.props
    console.log(show)
        return (
          <div className="modal_wrapper_contact" style = {{
              transform: show ? "translateY(0vh)" : "translateY(-100vh)",
              opacity: show ? '1' : '0'
          }}>
            <div className="modal_header_contact">
                <p>How to Contact Us</p> 
                <span onClick={closeModal} className="close_modal_btn_contact">x</span>                
            </div>
            <div className="modal_content_contact">
                <div className="modal_body_contact">
                  <h4>Front-End</h4>
                  <p>
                    배채겸: abc@gamil.com<br/>
                    박지국: abc@gamil.com<br/>
                    이창근: abc@gamil.com
                  </p>
                </div>
                <div className="modal_body_contact">
                  <h4>Back-End</h4>
                  <p>
                    이승철: abc@gamil.com
                  </p>
                </div>
            </div>
            <div className="modal_footer_contact">
              <button onClick={closeModal} className="close_modal_btn_contact">close</button>
            </div>
          </div>
        )
  }
}

