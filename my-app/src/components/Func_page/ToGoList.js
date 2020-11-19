/* eslint-disable */

import React from "react";

import axios from "axios"


import ListDeleteModal from "./modal/ListDeleteModal";
import ListEditModal from "./modal/ListEditModal";

axios.defaults.withCredentials = true;

class ToGoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showEdit: false,
            showDelete: false,
            content: "",
            location: "",
            mapimgpath: "",
            tag: "",
            post: ""
        }
        // this.showEditModal = this.showEditModal.bind(this)
    }

    componentDidMount() {
        console.log("기능페이지 didmount중입니다")
        
        
        axios({
            method: 'get',
            url: 'https://togolist-server.ml/post',
        },{withCredentials :true}
        ).then((res) => {
                this.setState({
                    post:res.data
                })
            console.log("기능페이지 포스트 받아오니?",res)
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
        console.log("state에 저장 ?", this.state)
        return (
            <>
            <section className="start_list">
                    <div className="mypage_mycontent_box">
                        
                        <h1>To Go List</h1>
                        {this.state.post.length === 0 ? "가고 싶은 곳을 등록해주세요!" :  
                this.state.post.map(function (el) {
                    return (
                        
                            <div className="mypage_mycontent_frame">
                                <div className="mypage_mycontent_map">{el.mapimgpath && el.mapimgpath}</div>
                                <div className="mypage_mycontent_content">{el.content}</div>
                                <div className="mypage_mycontent_tag">{el.hashtags.length === 0 ? '' :
                                    el.hashtags.map(function (ele) {
                                    return (ele.tag)
                                })
                            }</div>
                         <div className="start_btn_box">
                            <button className="edit_post" >수정</button>
                            <button className="remove_post" >삭제</button>
                        </div>
                        </div>
                    )
                })
            }
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