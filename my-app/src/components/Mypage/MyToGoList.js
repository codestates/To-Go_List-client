/* eslint-disable */
import React from "react";
import axios from "axios"
axios.defaults.withCredentials = true;

const MyToGoList = (props) => {

    if (!props.tagorlist) {
        return (
            <div className="mypage_mylist">
                {console.log("마이투고리스트 프롭스 확인",props)}
                <div className="mypage_mycontent_boxs">
                    <h2>My tag</h2>
                    {props.tag.length === 0 ? "가고 싶은 곳을 등록해주세요!" :
                        props.tag.map(function (el) {
                            return (
                                <div>
                                    <button className="tag_btn" onClick={() => { props.swiching(), props.search(el.tag)}} >{el.tag}</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    if (props.tagorlist) {
        return (
            <div className="mypage_mylist">
            <div className="mypage_mycontent_boxs">
                    <button className="tag_btn" onClick={props.swiching}>태그보기</button>
                    <div>
                {props.searchtag === '' ? "지도정보가 없습니다" :
                    props.searchtag.map(function (el) {
                    return (
                        <div className="mypage_mycontent_frame">
                            <div className="mypage_mycontent_map">{el.mapimgpath === '' ? '' : el.mapimgpath}</div>
                            <div className="mypage_mycontent_content">{el.content}</div>
                            <div className="mypage_mycontent_tag">{el.location}</div>
                        </div>
                )
                    })}
                        </div>
                </div>
                </div>
        )
    }
}


export default MyToGoList;


// {props.post.length === 0 ? "가고 싶은 곳을 등록해주세요!" : 
//                 props.post.map(function (el) {
//                     return (
                        
//                             <div className="mypage_mycontent_frame">
//                                 <div className="mypage_mycontent_map">{el.mapimgpath && el.mapimgpath}</div>
//                                 <div className="mypage_mycontent_content">{el.content}</div>
//                                 <div className="mypage_mycontent_tag">{el.hashtags.length === 0 ? '' :
//                                     el.hashtags.map(function (ele) {
//                                     return (ele.tag)
//                                 })
//                                 }</div>
                         
//                         </div>
//                     )
//                 })
//                 }