/* eslint-disable */

import React from "react";

import axios from "axios"


import ListDeleteModal from "./modal/ListDeleteModal";
import ListEditModal from "./modal/ListEditModal";


class ToGoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {           
            content: "",
            location: "",
            mapimgpath: "",
            tag: "",
            info: "",
            showEdit: false,
            showDelete: false,
        }
    }

    componentDidMount() {
        axios({
            method: "get",
            url: "http://localhost:3001/post"
        })
            .then((res) => {
                console.log(res)
                this.setState({
                    content: res.data.content
                })
            })
    }

    showDeleteModal = () =>{
        this.setState({
            showDelete: !this.state.showDelete,
        });
      }
  
      closeDeleteModal = () =>{
          this.setState({
              showDelete: !this.state.showDelete,
          });
      }
      showEditModal = () =>{
        this.setState({
            showEdit: !this.state.showEdit,
        });
      }
  
      closeEditModal = () =>{
          this.setState({
              showEdit: !this.state.showEdit,
          });
      }

    render() {
        console.log("Edit List", this.state.showEdit);
        return (
            <>
            <section className="start_list">
                <div className="mypage_mycontent_box">
                    <h1>To Go List</h1>
                    <div className="start_content_frame">
                        <div className="mypage_mycontent_map"></div>
                        <div className="mypage_mycontent_content">{this.props.content}</div>
                        <div className="mypage_mycontent_tag">{this.props.tag}</div>
                        <div>
                            <button className="edit_post" onClick={this.showEditModal}>수정</button>
                            <button className="remove_post" onClick={this.showDeleteModal}>삭제</button>
                        </div>
                    </div>
                </div>
            </section>
            {this.state.showDelete ? <ListDeleteModal show={this.state.showDelete} closeModal = {this.closeDeleteModal}/>:null}
            {this.state.showDelete ? <div onClick={this.closeDeleteModal} className="back_drop"></div>:null}
            {this.state.showEdit ? <ListEditModal show={this.state.showEdit} closeModal = {this.closeEditModal}/>:null}
            {this.state.showEdit ? <div onClick={this.closeEditModal} className="back_drop"></div>:null}
            </>
        );
    }
}

export default ToGoList;