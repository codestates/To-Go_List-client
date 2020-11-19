/* eslint-disable */
import React from "react";
import "./ListEditModal.css";
import axios from "axios";
axios.defaults.withCredentials = true;

export default class ListEditModal extends React.Component {
    constructor(props){
        super(props);
        this.state={
        };
    }
    render() {
    console.log("Edit Modal")
    const {show, closeModal} = this.props
        return (
          <div className="modal_page_edit">
            <div className="modal_frame_edit">
              <div className="start_newpost_frame_edit">
                <input id="input_text" type="text" placeholder="내용을 입력하세요"></input>
                <input id="input_tag" type="text" placeholder="태그를 입력하세요"></input>
                <input id="input_location" type="text" placeholder="위치를 검색하세요"></input>
                <button className="search_location_edit">검색</button>
              </div>
              <div>
                <button className="empty_modal_close_btn_edit" onClick={closeModal}>
                  확인
                </button>
                <button className="empty_modal_close_btn_edit" onClick={closeModal}>
                  닫기
                </button>
              </div>
            </div>
          </div>
        );
  }
}

