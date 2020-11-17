/* eslint-disable */
import React from "react";
import "./ListDeleteModal.css";
import axios from "axios";
axios.defaults.withCredentials = true;

export default class ListDeleteModal extends React.Component {
    constructor(props){
        super(props);
        this.state={
        };
    }
    render() {
    console.log("Delete Modal")
    const {show, closeModal} = this.props
        return (
            <div className="modal_page_del">
            <div className="modal_frame_del">
                <div className="modal_message">
                  정말로 삭제하시겠습니까?
                <button className="empty_modal_close_btn_del" onClick={closeModal}>
                  확인
                </button>
                <button className="empty_modal_close_btn_del" onClick={closeModal}>
                  닫기
                </button>
                </div>
            </div>
          </div>
        );
  }
}

