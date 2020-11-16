/* eslint-disable */
import React from "react";
import './FooterTechModal.css'
import { FaReact } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaNode } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';

export default class FooterTechModal extends React.Component {
    render() {
    const {show, closeModal} = this.props
    console.log(show)
        return (
          <div className="modal_wrapper" style = {{
              transform: show ? "translateY(0vh)" : "translateY(-100vh)",
              opacity: show ? '1' : '0'
          }}>
            <div className="modal_header">
                <p>Technical Reference</p> 
                <span onClick={closeModal} className="close_modal_btn">x</span>                
            </div>
            <div className="modal_content">
                <div className="modal_body">
                  <h4>Tech</h4>
                  <p><FaReact size="2rem"/> <FaHtml5 size="2rem"/> <FaCss3Alt size="2rem"/> <FaNode size="2rem"/> <SiMysql size="2rem"/> <SiJavascript size="2rem"/></p>
                </div>
            </div>
            <div className="modal_footer">
              <button onClick={closeModal} className="close_modal_btn">close</button>
            </div>
          </div>
        )
  }
}

